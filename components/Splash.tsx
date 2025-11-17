// @/components/Splash.tsx
import Image from "next/image";

const Splash = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <Image
        src="/branding/logo.svg"
        alt="CoreQuarry Logo"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Splash;
