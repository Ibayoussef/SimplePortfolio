"use client";
import { PageWrapper } from "app/components/page-wrapper";
import React from "react";
import { Gilda_Display } from "@next/font/google";
import { motion } from "framer-motion";
const GildaDisplay = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
});

function About() {
  const text = "About Me";
  return (
    <PageWrapper>
      <div className="flex row justify-start items-center">
        <div className="flex h-screen w-1/4 flex-col justify-start bg-custom-white items-center">
          <h1 className={"text-5xl h-fit   " + GildaDisplay.className}>1</h1>
          <h1 className="text-3xl uppercase -mt-14">
            {text.split("").map((p) => (
              <motion.button
                key={p}
                className={`relative z-[999999] uppercase ${
                  p === "M" ? "ml-2" : ""
                } `}
                whileHover={{
                  scale: 1.5,
                  transition: { duration: 0.25 },
                }}
              >
                {p}
              </motion.button>
            ))}
          </h1>
        </div>
        <div className="flex h-screen  w-full flex-col bg-blk justify-start text-white items-start p-[100px]">
          <div className="w-1/2">
            {" "}
            <div className={GildaDisplay.className}>
              <motion.h1
                className="text-4xl uppercase text-browny"
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  delay: 0.25,
                  x: { duration: 1 },
                  default: { ease: "easeInOut" },
                }}
              >
                Ismail Bayoussef
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  delay: 0.5,
                  x: { duration: 1 },
                  default: { ease: "easeInOut" },
                }}
                className="text-4xl w-[300px] leading-[40px] uppercase text-custom-white"
              >
                Front-End React Expert
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  delay: 0.75,
                  x: { duration: 1 },
                  default: { ease: "easeInOut" },
                }}
                className="text-3xl  text-custom-white mt-2"
              >
                Developer
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{
                delay: 1,
                x: { duration: 1 },
                default: { ease: "easeInOut" },
              }}
              className="text-base font-lighter mt-10"
            >
              <span className="text-xl">
                Hello, My Name is Ismail Bayoussef,
              </span>{" "}
              I'm Living in Morocco. As a professional programmer with 5 years
              of experience. I'm excited to be a part of your project
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{
                delay: 1.25,
                x: { duration: 1 },
                default: { ease: "easeInOut" },
              }}
              className="text-base font-lighter text-browny mt-10"
            >
              <span className="text-xl">Also,</span> Proficient in using Laravel
              as a backend framework to create robust and scalable web
              applications. Strong understanding of web development concepts and
              technologies, including HTML, CSS, JavaScript, React, Laravel,
              Solidity and PHP. Proven ability to work collaboratively in a team
              environment and deliver projects on time and within budget. Strong
              problem-solving skills and a passion for creating intuitive and
              user-friendly experiences
            </motion.p>
            <div className="text-2xl font-lighter text-browny mt-10">
              <motion.p
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  delay: 1.5,
                  x: { duration: 1 },
                  default: { ease: "easeInOut" },
                }}
              >
                (+212)762868577
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  delay: 1.75,
                  x: { duration: 1 },
                  default: { ease: "easeInOut" },
                }}
              >
                https://bayoussefismail.com
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -250 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{
                  delay: 2,
                  x: { duration: 1 },
                  default: { ease: "easeInOut" },
                }}
              >
                bayoussefismail@gmail.com
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default About;
