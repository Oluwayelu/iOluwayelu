import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const routes = [
  // { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Portfolio", path: "/#portfolio" },
  { name: "Technologies", path: "/#technologies" },
  { name: "Contact Me", path: "/#contact-me" },
];

export const social = [
  {
    name: "Github",
    link: "https://github.com/Oluwayelu",
    Icon: AiOutlineGithub,
  },
  {
    name: "Twitter",
    link: "https://github.com/Oluwayelu",
    Icon: AiOutlineTwitter,
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/oluwayelu-ifeoluwa",
    Icon: AiFillLinkedin,
  },
  {
    name: "Instagram",
    link: "https://github.com/Oluwayelu",
    Icon: AiOutlineInstagram,
  },
];

export default routes;
