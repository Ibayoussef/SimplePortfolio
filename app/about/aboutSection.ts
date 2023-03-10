import { Gilda_Display } from "@next/font/google";
import { AboutSection } from "./interfaces/AboutSection";
const GildaDisplay = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
});

export const aboutSection: AboutSection[] = [
  {
    text: "Ismail Bayoussef",
    delay: 0.25,
    classNames: "text-4xl uppercase text-browny " + GildaDisplay.className,
  },
  {
    text: "Front-End React Expert",
    delay: 0.5,
    classNames:
      "text-4xl w-[300px] leading-[40px] uppercase text-custom-white " +
      GildaDisplay.className,
  },
  {
    text: "Developer",
    delay: 0.75,
    classNames: "text-3xl  text-custom-white mt-2",
  },
  {
    text: "I'm Living in Morocco. As a professional programmer with 5 years of experience. I'm excited to be a part of your project",
    delay: 1,
    classNames: "text-base font-lighter mt-10",
  },
  {
    text: "Proficient in using Laravel as a backend framework to create robust and scalable web applications. Strong understanding of web development concepts and technologies, including HTML, CSS, JavaScript, React, Laravel, Solidity and PHP. Proven ability to work collaboratively in a team environment and deliver projects on time and within budget. Strong problem-solving skills and a passion for creating intuitive and user-friendly experiences",
    delay: 1.25,
    classNames: "text-base font-lighter text-browny mt-10",
  },
  {
    text: "(+212)762868577",
    delay: 1.5,
    classNames: "text-2xl font-lighter text-browny mt-10",
  },
  {
    text: "https://bayoussefismail.com",
    delay: 1.75,
    classNames: "text-2xl font-lighter text-browny",
  },
  {
    text: "bayoussefismail@gmail.com",
    delay: 2,
    classNames: "text-2xl font-lighter text-browny ",
  },
];
