import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const routes = [
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
    link: "https://twitter.com/Ife_YeLu",
    Icon: AiOutlineTwitter,
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/oluwayelu-ifeoluwa",
    Icon: AiFillLinkedin,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/ifeyelu_",
    Icon: AiOutlineInstagram,
  },
];

export default routes;
