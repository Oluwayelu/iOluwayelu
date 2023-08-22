import { motion } from "framer-motion";
import { textContainer, textVariant } from "utils/motion";

import type { FunctionComponent } from "react";
type Props = {
  title: String;
  className?: String;
};

const TypingText: FunctionComponent<Props> = ({ title, className }) => (
  <motion.h1
    variants={textContainer}
    className={`capitalize text-4xl lg:text-6xl text-left font-bold pb-5 ${
      className && className
    }`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>
);

export default TypingText;
