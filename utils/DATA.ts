import { FaReact, FaDatabase, FaFigma } from "react-icons/fa";

import type { IDetails, IProject, ISkill, ITechnologies } from "interface";

export const projects: IProject[] = [
  {
    id: 1,
    name: "Easeit",
    image: "/images/easeit.jpg",
    description:
      "Easit is a Non Profit organisation that helps the needy during the Covid Pandemic",
    category: ["html", "css", "node"],
    tags: ["HTML", "Non-Profit"],
  },
  {
    id: 2,
    name: "Netflix",
    image: "/images/netflix.jpg",
    link: "https://ynetflix.netlify.app",
    code: "https://github.com/Oluwayelu/weather-app",
    description:
      "Netflix clone built with Next JS for the client and Firebase as the backend",
    category: ["next", "styled-component", "firebase"],
    tags: ["Next", "Framer Motion", "Styled-components"],
  },
  {
    id: 3,
    name: "Puzzles",
    image: "/images/puzzles.jpg",
    link: "https://puzzles.netlify.app",
    code: "https://github.com/Oluwayelu/puzzles",
    description: "A Picture Puzzle game",
    category: ["react", "tailwindcss"],
    tags: ["React", "Styled-components"],
  },
  {
    id: 4,
    name: "Accessoriess Hubb",
    image: "/images/accessories-hubb.jpg",
    description: "An Ecommerce Store for Phone/Computer Accessories",
    category: ["next", "react", "tailwindcss", "mongodb", "node"],
    tags: ["Next", "Framer Motion", "Tailwind CSS"],
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
  {
    id: 7,
    name: "For.",
    image: "/images/for.jpg",
    link: "https://yfor.netlify.app",
    code: "https://github.com/Oluwayelu/For.",
    description: "For. is a women fasion website",
    category: ["next", "tailwindcss", "typescript"],
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 8,
    name: "Casecraft",
    image: "/images/casecraft.jpg",
    link: "https://ycasecraft.netlify.app",
    code: "https://github.com/Oluwayelu/casecraft",
    description:
      "Casecraft is a store where you can design and make spectacular cases for your gadgets.",
    category: ["next", "tailwindcss", "typescript"],
    tags: ["React", "TypeScript", "TailwindCSS"],
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
    endDate: "Expected May, 2023",
    organization: "Univeristy of Lagos",
    position: "BSc. Systems Engineering",
    location: "Lagos, Nigeria",
    description: "Major in Artificial Intelligence and Robotics",
  },
];

export const experiences: IDetails[] = [
  {
    startDate: "Oct, 2021",
    organization: "United States of Africa",
    position: "Frontend Engineering Lead",
    location: "Plano, Texas(Remote)",
    description:
      "Mentored a team of 6 frontend developers to build and deliver the frontend infrastructure of a videoconferencing and live streaming application built with React.js",
  },
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
];

export const skills: ISkill[] = [
  {
    title: "React",
    perct: 90,
  },
  {
    title: "Node",
    perct: 90,
  },
  {
    title: "Python",
    perct: 90,
  },
  {
    title: "Antd.",
    perct: 70,
  },

  {
    title: "Next",
    perct: 80,
  },
  {
    title: "Express",
    perct: 75,
  },
  {
    title: "JavaScript",
    perct: 80,
  },
  {
    title: "Material Ui",
    perct: 70,
  },

  {
    title: "HTML5",
    perct: 85,
  },
  {
    title: "Socket.io",
    perct: 65,
  },
  {
    title: "Typescript",
    perct: 70,
  },
  {
    title: "Bootstrap",
    perct: 90,
  },

  {
    title: "CSS",
    perct: 85,
  },
  {
    title: "Firebase",
    perct: 70,
  },
  {
    title: "Mongo DB",
    perct: 80,
  },
  {
    title: "Tailwind CSS",
    perct: 90,
  },

  {
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
    title: "Docker",
    perct: 40,
  },
];
