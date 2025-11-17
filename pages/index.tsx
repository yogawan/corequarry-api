// @/pages/index.tsx
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Splash from "@/components/Splash";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return <Sidebar />;
};

export default HomePage;
