import type { IDetails, IProject, ISkill, ITechnologies } from "interface";

export const projects: IProject[] = [
  {
    id: 1,
    name: "Easeit",
    image: "/images/projects/easeit.jpg",
    description:
      "Easit is a Non Profit organisation that helps the needy during the Covid Pandemic",
    category: ["html", "css", "node"],
    tags: ["HTML", "Non-Profit"],
  },
  {
    id: 2,
    name: "Netflix",
    image: "/images/projects/netflix.jpg",
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
    image: "/images/projects/puzzles.jpg",
    link: "https://puzzles.netlify.app",
    code: "https://github.com/Oluwayelu/puzzles",
    description: "A Picture Puzzle game",
    category: ["react", "tailwindcss"],
    tags: ["React", "Styled-components"],
  },
  {
    id: 4,
    name: "Accessoriess Hubb",
    image: "/images/projects/accessories-hubb.jpg",
    description: "An Ecommerce Store for Phone/Computer Accessories",
    category: ["next", "react", "tailwindcss", "mongodb", "node"],
    tags: ["Next", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "YChatt",
    image: "/images/projects/ychatt.jpg",
    link: "https://ychatt.netlify.app",
    code: "https://github.com/Oluwayelu/ychat-client",
    description: "A room messaging app built with react.js and node.",
    category: ["next", "tailwindcss"],
    tags: ["Next", "Framer Motion", "Styled-components"],
  },
  {
    id: 6,
    name: "Snaple",
    image: "/images/projects/snaple.jpg",
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
    image: "/images/projects/for.jpg",
    link: "https://yfor.netlify.app",
    code: "https://github.com/Oluwayelu/For.",
    description: "For. is a women fasion website",
    category: ["next", "tailwindcss", "typescript"],
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 8,
    name: "Casecraft",
    image: "/images/projects/casecraft.jpg",
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
    image: "/svg/frontend.svg",
    title: "Frontend",
    description: "Experience with React.js and Next.js",
  },
  {
    title: "Backend",
    image: "/svg/backend.svg",
    description: "Experience with Node.js and mongo DB",
  },
  {
    title: "Ui/Ux",
    image: "/svg/figma.svg",
    description: "Experience with Figma and Adobe XD",
  },
];

export const educations: IDetails[] = [
  {
    endDate: "June, 2023",
    organization: "Univeristy of Lagos",
    position: "BSc. Systems Engineering",
    location: "Lagos, Nigeria",
    description: "Major in Artificial Intelligence and Robotics",
  },
];

export const experiences: IDetails[] = [
  {
    startDate: "Oct, 2021",
    endDate: "April, 2023",
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
    icon: "/svg/skills/react.svg",
    title: "React",
    perct: 90,
  },
  {
    icon: "/svg/skills/node.svg",
    title: "Node",
    perct: 90,
  },
  {
    icon: "/svg/skills/python.svg",
    title: "Python",
    perct: 90,
  },
  {
    icon: "/svg/skills/css.svg",
    title: "CSS",
    perct: 90,
  },

  {
    icon: "/svg/skills/nextjs.svg",
    title: "Next",
    perct: 80,
  },
  {
    icon: "/svg/skills/express.svg",
    title: "Express",
    perct: 75,
  },
  {
    icon: "/svg/skills/javascript.svg",
    title: "JavaScript",
    perct: 80,
  },
  {
    icon: "/svg/skills/sass.svg",
    title: "Sass",
    perct: 70,
  },

  {
    icon: "/svg/skills/vue.svg",
    title: "Vue",
    perct: 50,
  },
  {
    icon: "/svg/skills/firebase.svg",
    title: "Firebase",
    perct: 75,
  },
  {
    icon: "/svg/skills/typescript.svg",
    title: "Typescript",
    perct: 80,
  },
  {
    icon: "/svg/skills/less.svg",
    title: "Less",
    perct: 80,
  },

  {
    icon: "/svg/skills/html5.svg",
    title: "HTML5",
    perct: 85,
  },
  {
    icon: "/svg/skills/socket-io.svg",
    title: "Socket.io",
    perct: 65,
  },
  {
    icon: "/svg/skills/redux.svg",
    title: "Redux",
    perct: 70,
  },
  {
    icon: "/svg/skills/bootstrap.svg",
    title: "Bootstrap",
    perct: 90,
  },

  {
    icon: "/svg/skills/docker.svg",
    title: "Docker",
    perct: 60,
  },
  {
    icon: "/svg/skills/apollo.svg",
    title: "Apollo graphql.",
    perct: 60,
  },
  {
    icon: "/svg/skills/mongodb.svg",
    title: "Mongo DB",
    perct: 85,
  },
  {
    icon: "/svg/skills/tailwind-css.svg",
    title: "Tailwind CSS",
    perct: 90,
  },

  {
    icon: "/svg/skills/aws.svg",
    title: "AWS",
    perct: 50,
  },
  {
    icon: "/svg/skills/graphql.svg",
    title: "Graphql",
    perct: 70,
  },
  {
    icon: "/svg/skills/postgresql.svg",
    title: "Postgresql",
    perct: 70,
  },

  {
    icon: "/svg/skills/material-ui.svg",
    title: "Material Ui",
    perct: 70,
  },
];
