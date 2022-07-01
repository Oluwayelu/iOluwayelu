import { FunctionComponent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scale } from "variants";
// import Typewriter from "";

const Home: FunctionComponent = () => {
  return (
    <div
      id="home"
      className="relative w-full px-5 pt-16 md:px-14 lg:px-28 h-screen flex flex-col md:flex-row justify-center items-center filter bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/programmer-working.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-primary-300 opacity-40" />
      <motion.div
        variants={scale}
        whileInView={scale.whileInView}
        className="w-full md:w-1/6 h-full flex md:flex-col justify-around items-end"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-mr-10 lg:-mr-12 flex justify-center items-center bg-white rounded-full">
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image alt="git" layout="fill" src="/images/git.png" />
          </div>
        </div>

        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-8 md:mb-0 flex justify-center items-center bg-white rounded-full">
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
            <Image alt="react" layout="fill" src="/images/react.png" />
          </div>
        </div>

        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-mr-10 lg:-mr-12 flex justify-center items-center bg-white rounded-full">
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image alt="redux" layout="fill" src="/images/redux.png" />
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex justify-center items-center"
      >
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex justify-center items-center bg-white w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[600px] lg:h-[600px] rounded-full"
        >
          <div className="w-[200px] lg:w-[400px] text-black text-center z-20">
            <p className="text-2xl lg:text-6xl">👋</p>
            <p className="text-sm lg:text-base">Hello, my name is</p>
            <h1 className="text-xl lg:text-4xl font-bold">
              Oluwayelu <span className="text-primary">Ifeoluwa</span>
            </h1>
            <h3 className="text-lg lg:text-2xl font-medium">
              I am a, Software Engineer
            </h3>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={scale}
        whileInView={scale.whileInView}
        className="w-full md:w-1/6 h-full flex md:flex-col justify-around items-start"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-ml-10 lg:-ml-12 flex justify-center items-center bg-white rounded-full">
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image
              alt="typescript"
              layout="fill"
              src="/images/typescript.png"
            />
          </div>
        </div>

        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mt-8 md:mt-0 flex justify-center items-center bg-white rounded-full">
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
            <Image alt="node" layout="fill" src="/images/node.png" />
          </div>
        </div>

        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 md:-ml-10 lg:-ml-12 flex justify-center items-center bg-white rounded-full">
          <div className="relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image alt="python" layout="fill" src="/images/python.png" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
