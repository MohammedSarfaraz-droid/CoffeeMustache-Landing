import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTheme } from "../ThemeProvider";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0.3, x: -120 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex items-center flex-shrink-0 cursor-pointer"
      onClick={() => {
        if (typeof window !== 'undefined') {
          window.location.href = "/";
        }
      }}
      title="Go to Home"
    >
      <Image
        src={
          theme === "light"
            ? "/Images/cm-logo-black.png"
            : "/Images/cm-logo-white.png"
        }
        alt="Coffee Mustache Logo"
        width={240}
        height={64}
        className="object-contain w-[180px] h-[48px] sm:w-[240px] sm:h-[64px]"
      />
    </motion.div>
  );
};

export default Logo;
