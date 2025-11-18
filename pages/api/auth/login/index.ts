// @/pages/api/auth/login/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Branch from "@/models/Branch";
import User from "@/models/User";
import { mongoConnect } from "@/lib/mongoConnect";
import { enableCors } from "@/middleware/enableCors";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    await mongoConnect();

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email dan password wajib diisi" });
    }

    const user = (await User.findOne({ email })
      .populate<{ cabangId: any }>({
        path: "cabangId",
        select: "namaCabang kodeCabang alamat kontak googleMapsLink",
      })
      .lean()) as any;

    if (!user) {
      return res.status(400).json({ success: false, message: "Email atau password salah" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Email atau password salah" });
    }

    if (!user.isActive) {
      return res.status(403).json({ success: false, message: "Akun tidak aktif. Hubungi administrator." });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET tidak dikonfigurasi!");
      return res.status(500).json({ success: false, message: "Server error" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
        cabangId: user.role === "pengelola_cabang" ? user.cabangId?._id ?? null : null,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login berhasil",
      token,
      user: {
        id: user._id,
        nama: user.nama,
        email: user.email,
        role: user.role,
        cabang: user.role === "pengelola_cabang" ? user.cabangId : null,
      },
    });
  } catch (err: any) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Terjadi kesalahan server" });
  }
}

export default enableCors(handler);