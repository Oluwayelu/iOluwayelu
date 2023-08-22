import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

import { diffDate } from "utils";
import { fadeIn, stagger } from "utils/motion";
import { Details, TypingText } from "components";
import { educations, experiences } from "utils/DATA";

import type { FunctionComponent } from "react";

const About: FunctionComponent = () => {
  return (
    <motion.div
      id="about"
      initial="hidden"
      whileInView="show"
      variants={stagger}
      className="relative w-full lg:max-w-7xl lg:mx-auto px-5 md:px-10 py-16 md:py-20 bg-primary-300/70"
    >
      <TypingText title="About Me" />

      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center space-y-3 lg:space-y-0 lg:space-x-3">
        <motion.div
          variants={fadeIn("up", true)}
          whileInView="whileInView"
          className="w-full lg:w-1/3 inline-flex justify-start"
        >
          <div className="relative w-40 h-40 lg:w-60 lg:h-60 rounded-full overflow-hidden">
            <Image
              src="/images/ifeoluwa.jpg"
              alt="Ifeoluwa"
              layout="fill"
              className="filter object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right")}
          whileInView="whileInView"
          className="w-full lg:w-2/3 space-y-3"
        >
          <p className="text-lg md:text-xl leading-loose">
            My name is{" "}
            <span className="font-bold text-primary">
              Oluwayelu Ifeoluwa David
            </span>
            , and I am an experienced Software Engineer with a professional
            experience of {diffDate(new Date(2019, 5, 11), new Date())}+ years,
            proficient in both frontend and backend development with a keen eye
            for UI/UX design. <br /> From elegantly coding functional features
            to shaping intuitive UI designs, I bring a holistic approach to
            Software creation.
          </p>
          <Link href="/doc/Ifeoluwa Oluwayelu Resume.pdf">
            <a
              target="_blank"
              download="Ifeoluwa Oluwayelu Resume.pdf"
              className="inline-flex items-center py-1 px-3 bg-primary text-white rounded text-xl space-x-1"
            >
              <AiOutlineDownload className="w-6 h-6" />
              <p className="text-sm text-white">Download Resume</p>
            </a>
          </Link>
        </motion.div>
      </div>

      <div className="w-full lg:max-w-5xl lg:mx-auto lg:px-10 mt-5 lg:mt-10 flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
        <div className="w-full flex flex-col lg:items-start space-y-5">
          <h2>Experience</h2>

          <div className="w-full space-y-3">
            {experiences &&
              experiences.map((detail, index) => (
                <Details detail={detail} key={index} />
              ))}
          </div>
        </div>

        <div className="w-full flex flex-col lg:items-end space-y-5">
          <h2>Education</h2>

          <div className="w-full space-y-3">
            {educations &&
              educations.map((detail, index) => (
                <Details detail={detail} align="end" key={index} />
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
