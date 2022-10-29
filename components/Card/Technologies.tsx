import { motion } from "framer-motion";

import type { ITechnologies } from "interface";
import type { FunctionComponent } from "react";

export type TechnologiesProps = {
  technology: ITechnologies;
};

const Technologies: FunctionComponent<TechnologiesProps> = ({
  technology: { Icon, title, description },
}) => {
  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1], scale: [0, 1] }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full p-3 bg-gray-100/50 rounded-xl flex items-start"
    >
      {Icon && (
        <div className="w-1/4 flex items-center justify-center">
          <Icon className="w-14 h-14" />
        </div>
      )}

      <div className="w-3/4 flex flex-col items-start">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default Technologies;
