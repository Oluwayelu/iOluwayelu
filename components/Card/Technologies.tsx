import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "utils/motion";

import type { ITechnologies } from "interface";
import type { FunctionComponent } from "react";

export type TechnologiesProps = {
  technology: ITechnologies;
};

const Technologies: FunctionComponent<TechnologiesProps> = ({
  technology: { image, title, description },
}) => {
  return (
    <motion.div
      variants={fadeIn("up", true)}
      whileInView="whileInView"
      className="w-full p-3 bg-gray-100/50 rounded-xl flex items-center backdrop-blur-sm"
    >
      {image && (
        <div className="w-1/3 flex items-center justify-center">
          <div className="relative w-28 h-28">
            <Image src={image} alt={title} layout="fill" />
          </div>
        </div>
      )}

      <div className="w-2/3 flex flex-col items-start">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default Technologies;
