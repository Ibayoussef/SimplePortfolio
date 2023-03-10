import React from "react";
import { ButtonProps } from "../Interfaces/ButtonProps";
import { motion } from "framer-motion";
const Button: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <div className="mt-8 ">
      <motion.a
        whileHover={{
          opacity: 1,
          y: -1,

          color: "#b28255",

          transition: { duration: 0.5 },
        }}
        href={link}
        target="_blank"
        className="relative z-[9999] card-button bg-browny px-8 py-4 text-xl rounded-lg"
      >
        {children}
      </motion.a>
    </div>
  );
};

export default Button;
