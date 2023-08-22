import Image from "next/image";

import { motion } from "framer-motion";
import { barVariant, fadeIn } from "utils/motion";

import type { ISkill } from "interface";
import type { FunctionComponent } from "react";

type Props = {
  skill: ISkill;
};

const Bar: FunctionComponent<Props> = ({ skill: { icon, title, perct } }) => {
  const width = `${perct}%`;
  const bar = barVariant(width);
  return (
    <motion.div
      variants={fadeIn("up", true)}
      whileInView="whileInView"
      className="space-y-1"
    >
      <div className="w-full flex items-center space-x-3">
        {icon && (
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <div className="relative w-4 h-4">
              <Image
                src={icon}
                alt={title}
                layout="fill"
                className="w-full h-full"
              />
            </div>
          </div>
        )}
        <h4>{title}</h4>
      </div>

      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
        <motion.div
          variants={bar}
          exit="initial"
          initial="initial"
          whileInView="animate"
          className="h-full bg-primary rounded-r-full"
          style={{ width }}
        />
      </div>
    </motion.div>
  );
};

export default Bar;
