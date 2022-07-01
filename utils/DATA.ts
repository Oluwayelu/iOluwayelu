import { FaReact, FaDatabase, FaFigma } from "react-icons/fa";

import type { IDetails, IProject, ISkill, ITechnologies } from "interface";

export const projects: IProject[] = [
  {
    id: 1,
    name: "Easeit",
    image: "/images/easeit.jpg",
    description: "A weather app built with react js",
    category: ["html", "css", "node"],
    tags: ["HTML", "Non profit"],
  },
  {
    id: 2,
    name: "Netflix",
    image: "/images/netflix.jpg",
    link: "https://ynetflix.netlify.app",
    code: "https://github.com/Oluwayelu/weather-app",
    description: "A weather app built with react js",
    category: ["next", "styled-component"],
    tags: ["Next", "Framer Motion", "Styled-components"],
  },
  {
    id: 3,
    name: "Old Portfolio",
    image: "/images/portfolio.jpg",
    code: "https://github.com/Oluwayelu/my-portfolio",
    description:
      "A weather app built with react js suabsi absasbaisba xugzxbudbudu uxbsyc sc uvc cvc vz vszd dc sda s",
    category: ["next", "tailwindcss"],
    tags: ["Next", "Framer Motion", "Styled-components"],
  },
  {
    id: 4,
    name: "Accessoriess Hubb",
    image: "/images/accessories-hubb.jpg",
    description: "A weather app built with react js",
    category: ["next", "react", "tailwindcss", "mongodb"],
    tags: ["Next", "Framer Motion", "Styled-components"],
  },
  {
    id: 5,
    name: "YChatt",
    image: "/images/ychatt.jpg",
    link: "https://ychatt.netlify.app",
    code: "https://github.com/Oluwayelu/ychat-client",
    description: "A room messaging app built with react.js and node.",
    category: ["next", "tailwindcss"],
    tags: ["Next", "Framer Motion", "Styled-components"],
  },
  {
    id: 6,
    name: "Snaple",
    image: "/images/snaple.jpg",
    link: "https://snaple.netlify.app",
    code: "https://github.com/Oluwayelu/snaple",
    description:
      "Snaple is a snake game where the snake has to eat an apple while avoiding the walls.",
    category: ["react", "tailwindcss"],
    tags: ["React", "JavaScript", "TailwindCSS"],
  },
];

export const technologies: ITechnologies[] = [
  {
    Icon: FaReact,
    title: "Frontend",
    description: "Experience with React.js",
  },
  {
    Icon: FaDatabase,
    title: "Backend",
    description: "Experience with Node.js and mongo DB",
  },
  {
    Icon: FaFigma,
    title: "Ui/Ux",
    description: "Experience with Figma and Adobe XD",
  },
];

export const educations: IDetails[] = [
  {
    startDate: "Nov, 2017",
    organization: "Univeristy of Lagos",
    position: "BSc. Systems Engineerinng",
    location: "Lagos, Nigeria",
    description: "Major in Artificial Intelligence and Robotics",
  },
];

export const experiences: IDetails[] = [
  {
    startDate: "May, 2019",
    organization: "Freelance",
    position: "Full stack Developer",
    location: "Lagos, Nigeria",
    description: "Major in Artificial Intelligence and Robotics",
  },
  {
    startDate: "Feb, 2020",
    endDate: "May, 2020",
    organization: "Facebook developers circle",
    position: "Backend Developer Intern",
    location: "Lagos, Nigeria",
    description: "Major in Artificial Intelligence and Robotics",
  },
  {
    startDate: "Oct, 2021",
    organization: "United States of Africa",
    position: "Frontend Engineering Lead",
    location: "Plano, Texas(Remote)",
    description:
      "Mentored a team of 6 frontend developers to build and deliver the frontend infrastructure of a videoconferencing and live streaming application built with React.js",
  },
];

export const skills: ISkill[] = [
  {
    Icon: FaReact,
    title: "React",
    perct: 90,
  },
  {
    title: "Node",
    perct: 90,
  },
  {
    Icon: FaReact,
    title: "Python",
    perct: 90,
  },
  {
    title: "Antd.",
    perct: 70,
  },

  {
    Icon: FaReact,
    title: "Next",
    perct: 80,
  },
  {
    title: "Express",
    perct: 75,
  },
  {
    Icon: FaReact,
    title: "JavaScript",
    perct: 80,
  },
  {
    title: "Material Ui",
    perct: 70,
  },

  {
    Icon: FaReact,
    title: "HTML5",
    perct: 85,
  },
  {
    title: "Socket.io",
    perct: 65,
  },
  {
    Icon: FaReact,
    title: "Typescript",
    perct: 70,
  },
  {
    title: "Bootstrap",
    perct: 90,
  },

  {
    Icon: FaReact,
    title: "CSS",
    perct: 85,
  },
  {
    title: "Firebase",
    perct: 70,
  },
  {
    Icon: FaReact,
    title: "Mongo DB",
    perct: 80,
  },
  {
    title: "Tailwind CSS",
    perct: 90,
  },

  {
    Icon: FaReact,
    title: "postgreSQL",
    perct: 60,
  },
  {
    title: "Firebase Realtime",
    perct: 60,
  },
  {
    title: "AWS Lambda",
    perct: 30,
  },

  {
    Icon: FaReact,
    title: "Docker",
    perct: 40,
  },
];
