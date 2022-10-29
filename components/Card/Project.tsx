import Image from "next/image";
import { IProject } from "interface";
import { motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

export type ProjectProps = {
  project: IProject;
};

const Project: FunctionComponent<ProjectProps> = ({ project }) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      onClick={() => setShow(!show)}
      whileInView={{ y: [100, 0], opacity: [0, 1], scale: [0, 1] }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full bg-white text-black rounded-xl shadow transition-all cursor-pointer overflow-hidden"
    >
      <div className="relative h-60 w-full flex justify-center">
        <Image
          layout="fill"
          src={project.image}
          alt={project.name}
          className="rounded-t filter object-contain object-center"
        />
        <div className="absolute inset-0 bg-primary/20" />
        {show && (
          <motion.div
            className="absolute inset-0 px-3 pt-5 pb-14 w-full h-full bg-dark-100/70 transition-all flex flex-col items-center justify-between space-y-3"
          >
            <p className="w-full text-sm text-left">{project.description}</p>

            <div className="inline-flex space-x-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="w-10 h-10 flex justify-center items-center rounded-full text-dark-100 bg-gray-100 font-extrabold cursor-pointer transition-all"
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
                    className="w-10 h-10 flex justify-center items-center rounded-full text-dark-100 bg-gray-100 font-extrabold cursor-pointer transition-all"
                  >
                    <AiFillGithub className="w-1/2 h-1/2" />
                  </motion.div>
                </a>
              )}
            </div>
          </motion.div>
        )}
        <div className="absolute bottom-0 h-10 px-5 bg-white flex items-center rounded-t-xl font-medium">
          <p className="text-black">{project.name}</p>
        </div>
      </div>
      {/* <div className="w-full flex flex-col justify-between p-3">
        <div className="w-full flex flex-wrap gap-1">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="px-3 py-1 bg-primary text-white text-sm rounded-full"
            >
              {tag}
            </div>
          ))}
        </div>
      </div> */}
    </motion.div>
  );
};

export default Project;
