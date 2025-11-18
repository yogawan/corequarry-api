// @/pages/api/auth/register/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { mongoConnect } from "@/lib/mongoConnect";
import { enableCors } from "@/middleware/enableCors";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    await mongoConnect();

    const { nama, email, password, role, cabangId } = req.body;

    if (!nama || !email || !password) {
      return res.status(400).json({ success: false, message: "Field tidak boleh kosong" });
    }

    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(400).json({ success: false, message: "Email sudah terdaftar" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      nama,
      email,
      password: hashedPass,
      role: role || "pengelola_cabang",
      cabangId: role === "pengelola_cabang" ? cabangId : null,
    });

    return res.status(201).json({
      success: true,
      message: "Register berhasil",
      data: {
        id: newUser._id,
        nama: newUser.nama,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
}

export default enableCors(handler);