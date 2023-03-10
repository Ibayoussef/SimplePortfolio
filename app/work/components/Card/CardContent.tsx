import React from "react";
import { motion } from "framer-motion";
import { LayoutProps } from "app/interfaces/LayoutProps";

interface CardContentProps extends LayoutProps {}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        opacity: 1,
        transition: { duration: 0.25 },
      }}
      className="h-full opacity-0 w-full h-full px-4 pt-4 absolute z-[99999] bg-[#504745]"
    >
      {children}
    </motion.div>
  );
};

export default CardContent;
