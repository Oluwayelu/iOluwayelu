import Link from "next/link";
import Image from "next/image";

import { scale } from "variants";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
// import Typewriter from "";

import type { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <div
      id="home"
      className="relative w-full px-5 pt-16 md:px-14 lg:px-28 h-screen filter bg-left bg-cover"
      style={{
        backgroundImage: "url('/images/background.png')",
      }}
    >
      <div className="absolute inset-0 bg-primary-300 opacity-40" />

      <div className="relative w-full h-full flex justify-center lg:justify-end items-center">
        <motion.div
          variants={scale}
          whileInView={scale.whileInView}
          className="absolute bottom-[5%] right-0 w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mt-8 md:mt-0 flex justify-center items-center bg-white rounded-full"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
            <Image alt="node" layout="fill" src="/images/node.png" />
          </div>
        </motion.div>

        <motion.div
          variants={scale}
          whileInView={scale.whileInView}
          className="absolute top-[5%] left-[10%] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-ml-10 lg:-ml-12 flex justify-center items-center bg-white rounded-full"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image alt="python" layout="fill" src="/images/python.png" />
          </div>
        </motion.div>

        <motion.div
          variants={scale}
          whileInView={scale.whileInView}
          className="absolute top-[3%] right-0 md:top-[15%] md:right-[5%] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-8 md:mb-0 flex justify-center items-center bg-white rounded-full"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
            <Image alt="react" layout="fill" src="/images/react.png" />
          </div>
        </motion.div>

        <motion.div
          variants={scale}
          whileInView={scale.whileInView}
          className="absolute bottom-[15%] left-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-mr-10 lg:-mr-12 flex justify-center items-center bg-white rounded-full"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image alt="redux" layout="fill" src="/images/redux.png" />
          </div>
        </motion.div>

        <motion.div
          variants={scale}
          whileInView={scale.whileInView}
          className="absolute top-[25%] md:top-[30%] right-1/3 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-ml-10 lg:-ml-12 flex justify-center items-center bg-white rounded-full"
        >
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image
              alt="typescript"
              layout="fill"
              src="/images/typescript.png"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], y: [30, 0] }}
          transition={{ duration: 0.8 }}
          className="w-full h-full flex flex-col justify-center items-center md:items-end space-y-2"
        >
          <h2>Hi, my name is</h2>
          <h1>Oluwayelu Ifeoluwa</h1>

          <p>I am a Software Engineer</p>

          <Link href="/doc/Ifeoluwa Oluwayelu Resume.pdf">
            <a
              target="_blank"
              download="Ifeoluwa Oluwayelu Resume.pdf"
              className="inline-flex items-center py-1 px-5 md:py-2 md:px-10 bg-primary rounded-full text-xl space-x-1"
            >
              <AiOutlineDownload className="w-7 h-7" />
              <p className="text-white">Download Resume</p>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
