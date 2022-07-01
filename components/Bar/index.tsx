import { motion } from "framer-motion";
import { barVariant } from "variants";

import type { ISkill } from "interface";
import type { FunctionComponent } from "react";

type Props = {
  skill: ISkill;
};

const Bar: FunctionComponent<Props> = ({ skill: { Icon, title, perct } }) => {
  const width = `${perct}%`;
  const bar = barVariant(width);
  return (
    <div>
      <div className="w-full flex items-center space-x-3">
        {Icon && <Icon className="w-7 h-7" />}
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
    </div>
  );
};

export default Bar;
