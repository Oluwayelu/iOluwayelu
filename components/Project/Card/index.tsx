import Image from "next/image";
import { IProject } from "interface";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

type Props = {
  project: IProject;
};

const Card: FunctionComponent<Props> = ({ project }) => {
  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1], scale: [0, 1] }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full bg-white text-black rounded shadow transition-all cursor-pointer"
    >
      <div className="relative h-60 w-full flex justify-center">
        <Image
          layout="fill"
          src={project.image}
          alt={project.name}
          className="rounded-t filter object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="absolute inset-0  p-3 md:p-5 w-full h-full rounded-t-xl flex justify-center items-center bg-dark-100/50 opacity-0 transition-all flex flex-col items-center space-y-3"
        >
          <p>{project.description}</p>

          <div className="inline-flex space-x-3">
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
          </div>
        </motion.div>
        <div className="absolute bottom-0 bg-white px-5 pt-2 rounded-t-xl font-medium">
          {project.name}
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

export default Card;
