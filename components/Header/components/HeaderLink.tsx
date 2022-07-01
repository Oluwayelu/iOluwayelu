import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  name: string;
  path: string;
};

const HeaderLink: FunctionComponent<Props> = ({ name, path }) => {
  return (
    <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link href={path} scroll>
        <a className="">{name}</a>
      </Link>
    </motion.li>
  );
};

export default HeaderLink;
