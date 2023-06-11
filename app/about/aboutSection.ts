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
    classNames:
      "text-2xl uppercase text-browny max-sm:text-2xl " +
      GildaDisplay.className,
  },
  {
    text: "Front-End React Expert",
    delay: 0.5,
    classNames:
      "text-2xl w-[300px] leading-[40px] uppercase text-custom-white max-sm:text-2xl max-sm:w-[200px] " +
      GildaDisplay.className,
  },
  {
    text: "Developer",
    delay: 0.75,
    classNames: "text-xl  text-custom-white mt-2 max-sm:text-xl  ",
  },
  {
    text: "I'm Living in Morocco. As a professional programmer with 5 years of experience. I'm excited to be a part of your project",
    delay: 1,
    classNames: "text-sm font-lighter mt-10 max-sm:text-sm max-sm:mt-4",
  },
  {
    text: "Proficient in using Laravel as a backend framework to create robust and scalable web applications. Strong understanding of web development concepts and technologies, including HTML, CSS, JavaScript, React, Laravel, Solidity and PHP. Proven ability to work collaboratively in a team environment and deliver projects on time and within budget. Strong problem-solving skills and a passion for creating intuitive and user-friendly experiences",
    delay: 1.25,
    classNames:
      "text-sm font-lighter text-browny mt-10 max-sm:text-sm max-sm:mt-4",
  },
  {
    text: "(+212)762868577",
    delay: 1.5,
    classNames:
      "text-base font-lighter text-browny mt-10 max-sm:text-[18px] max-sm:mt-4",
  },
  {
    text: "https://bayoussefismail.com",
    delay: 1.75,
    classNames: "text-base font-lighter text-browny max-sm:text-[18px]",
  },
  {
    text: "bayoussefismail@gmail.com",
    delay: 2,
    classNames: "text-base font-lighter text-browny max-sm:text-[18px]",
  },
];
