"use client";
import React, { useRef, ReactNode, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFollowPointer } from "../hooks/useFollowPointer";

import { Fira_Code } from "@next/font/google";
export interface PageWrapperProps {
  children: ReactNode;
}
const FiraCode = Fira_Code({
  weight: "600",
  subsets: ["latin"],
});
export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div className={FiraCode.className}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            delay: 0.25,
            y: { duration: 0.5 },
            default: { ease: "easeInOut" },
          }}
        >
          {children}
          <motion.div
            ref={ref}
            className="bg-custom-white border-2 w-[50px] h-[50px] rounded-full -z-50"
            animate={{ x, y }}
            transition={{
              type: "spring",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
