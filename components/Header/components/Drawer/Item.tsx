import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { items } from "variants";

type ItemProps = {
  route: { name: string; path: string };
  toggle: Function;
};

export const Item: FunctionComponent<ItemProps> = ({
  route: { name, path },
  toggle,
}) => {
  return (
    <motion.li
      onClick={() => toggle()}
      variants={items}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={path} scroll>
        <a className="text-left">{name}</a>
      </Link>
    </motion.li>
  );
};
