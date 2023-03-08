"use client";
import React from "react";
import Link from "next/link";
import { Gilda_Display } from "@next/font/google";
const GildaDisplay = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  const urls = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Work", url: "/work" },
  ];
  return (
    <nav
      className={
        "flex w-full py-[10px] justify-center items-center gap-6 bg-custom-white  " +
        GildaDisplay.className
      }
    >
      {urls.map((url) => (
        <Link
          key={url.url}
          className="uppercase relative z-[999999] font-bold hover:border-b-4 decoration-wavy transition-all"
          href={url.url}
        >
          {url.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
