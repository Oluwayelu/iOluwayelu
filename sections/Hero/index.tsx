import Image from "next/image";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { fadeIn } from "utils/motion";

import type { FunctionComponent } from "react";

const Hero: FunctionComponent = () => {
  return (
    <div
      id="home"
      className="relative w-full px-5 pt-16 md:px-14 lg:px-28 h-screen overflow-hidden"
    >
      <div className="absolute left-0 right-0 bottom-0 w-full h-1 bg-white" />
      <div className="absolute -left-3  bottom-0 w-1/4 md:w-1/6 h-full flex items-center justify-center z-0">
        <p className="-rotate-90 text-[75px] md:text-[150px]">Oluwayelu</p>
      </div>
      <div className="absolute right-0 -bottom-5 w-full h-1/4 flex items-center justify-center z-0">
        <p className=" text-[75px] md:text-[150px]">Ifeoluwa</p>
      </div>
      <div className="absolute inset-0 w-full h-full bg-primary-300/70 z-10" />

      <div className="relative w-full h-full flex justify-center lg:justify-end items-center z-20">
        <motion.div
          variants={fadeIn("up", true)}
          whileInView="whileInView"
          className="absolute bottom-[5%] right-0 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mt-8 md:mt-0 flex justify-center items-center bg-white bounce rounded-full"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
            <Image alt="node" layout="fill" src="/svg/skills/node.svg" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", true)}
          whileInView="whileInView"
          className="absolute top-[5%] left-[15%] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-ml-10 lg:-ml-12 flex justify-center items-center bg-white bounce rounded-full"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image alt="python" layout="fill" src="/svg/skills/graphql.svg" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", true)}
          whileInView="whileInView"
          className="absolute top-[3%] right-0 md:top-[15%] md:right-[5%] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-8 md:mb-0 flex justify-center items-center bg-white bounce rounded-full"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
            <Image alt="react" layout="fill" src="/svg/skills/react.svg" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", true)}
          whileInView="whileInView"
          className="absolute bottom-[15%] left-[10%] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-mr-10 lg:-mr-12 flex justify-center items-center bg-white bounce rounded-full"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image alt="redux" layout="fill" src="/svg/skills/nextjs.svg" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", true)}
          whileInView="whileInView"
          className="absolute top-[25%] md:top-[30%] right-1/3 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-ml-10 lg:-ml-12 flex justify-center items-center bg-white bounce rounded-full"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image
              alt="typescript"
              layout="fill"
              src="/svg/skills/typescript.svg"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", true)}
          whileInView="whileInView"
          className="w-full h-full flex flex-col justify-center items-center mditems-end space-y-2"
        >
          <h2>👋 Hi, my name is</h2>
          <h1>Oluwayelu Ifeoluwa</h1>
          <Typewriter
            component="p"
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Software Engineer | Frontend & Backend")
                .pauseFor(2500)
                .deleteAll()
                .typeString("Coding, Designing | Bridging Tech and Design")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
