import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "utils/motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import type { IProject } from "interface";
import type { FunctionComponent } from "react";

export type ProjectProps = {
  show?: number;
  setShow?: Function;
  project: IProject;
};

const Project: FunctionComponent<ProjectProps> = ({
  show,
  setShow,
  project,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", true)}
      whileInView="whileInView"
      className={`relative ${
        show === project.id
          ? "lg:flex-[3.5] flex-[8]"
          : "lg:flex-[0.5] flex-[1.5]"
      } flex items-center justify-center w-full h-60 lg:h-80 transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => setShow && setShow(project.id)}
    >
      <Image
        layout="fill"
        src={project.image}
        alt={project.name}
        className="rounded-xl filter object-cover object-center"
      />

      {show !== project.id ? (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-primary-300/50">
          <p className="text-center text-white lg:-rotate-90">{project.name}</p>
        </div>
      ) : (
        <div className="absolute bottom-0 p-5 flex justify-start w-full flex-col bg-primary-300/70 rounded-b-xl space-y-2">
          <h2 className="uppercase">{project.name}</h2>

          <p className="w-full text-sm text-white text-left">
            {project.description}
          </p>

          <div className="inline-flex space-x-3">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="w-10 h-10 flex justify-center items-center rounded-full text-dark-100 bg-white cursor-pointer backdrop-blur-sm"
                >
                  <AiFillEye className="w-1/2 h-1/2" />
                </motion.div>
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="w-10 h-10 flex justify-center items-center rounded-full text-dark-100 bg-white cursor-pointer backdrop-blur-sm"
                >
                  <AiFillGithub className="w-1/2 h-1/2" />
                </motion.div>
              </a>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Project;
