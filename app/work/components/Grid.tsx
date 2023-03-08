"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";

function ImageContainer({
  img,
  name,
  desc,

  link,
}: {
  img: string;
  name: string;
  desc: string;
  link: string;
}) {
  return (
    <div className=" bg-[#4d4d4d3c] p-4 h-fit rounded-xl">
      <div
        className={
          "relative h-full w-full bg-[#504745] overflow-hidden rounded-xl flex justify-center align-center p-4"
        }
      >
        <Image
          src={img}
          width={500}
          height={400}
          className="w-[300px] h-[300px] object-contain"
        />
        <motion.div
          whileHover={{
            opacity: 1,
            transition: { duration: 0.25 },
          }}
          className="h-full opacity-0 w-full h-full px-4 pt-4 absolute z-[99999] bg-[#504745]"
        >
          <h1 className="text-2xl text-browny"> {`#${name}`}</h1>
          <h1 className="text-base w-full text-custom-white"> {`${desc}`}</h1>
          <div className="mt-8">
            <motion.a
              whileHover={{
                opacity: 1,
                y: -1,
                background: "transparent",
                color: "#b28255",
                border: "1px solid #b28255",
                transition: { duration: 0.5 },
              }}
              href={link}
              target="_blank"
              className="relative z-[9999] bg-browny px-8 py-4 text-xl rounded-lg"
            >
              Visit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Grid() {
  const projects = [
    {
      name: "Visit Beni Mellal",
      image: "/images/beni1.png",
      url: "https://visitbenimellal.com",
      desc: "A web application made during working with Casbah Tourism Development, a website so tourists can check the points of interests in the region of beni mellal and they can generate their own tour",
    },
    {
      name: "Visit Fes Meknes",
      image: "/images/fes.svg",
      url: "https://visifesmeknes.ma/",
      desc: "A web application made during working with Casbah Tourism Development, a website so tourists can check the points of interests in the region of Fes and they can generate their own tour",
    },
    {
      name: "MemeNation",
      image: "/images/meme1.png",
      desc: "Create your own meme NFTs on Memenation and get paid in Memenation Tokens for each like. Start earning with your memes today.",
      url: "https://nft-market-place-ibayoussef.vercel.app/",
    },
    {
      name: "ChessGame",
      image: "/images/chess.png",
      desc: "Made a javascript chess game using ES6",
      url: "https://ibayoussef.github.io/Chess-Game/",
    },
    {
      name: "ThreejsPortfolio",
      image: "/images/eye.png",
      desc: "Old Portfolio created with threejs, accessibility support the whole website can be navigated by voice using AlanAi",
      url: "https://bayoussefismail.com",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex flex-row flex-wrap place-content-center place-items-center h-fit w-full gap-8 p-4">
        {projects.map((image) => (
          <motion.div
            initial={{ opacity: 0, y: -250 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              delay: 0.5,
              x: { duration: 6 },
              default: { ease: "easeInOut" },
            }}
            className="h-fit"
            key={image.name}
          >
            <ImageContainer
              link={image.url}
              img={image.image}
              name={image.name}
              desc={image.desc}
            />
          </motion.div>
        ))}
      </div>{" "}
    </div>
  );
}
