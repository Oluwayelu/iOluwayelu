import type { IDetails, IProject, ISkill, ITechnologies } from "interface";

export const projects: IProject[] = [
  {
    id: 0,
    name: "Netflix clone",
    image: "/images/projects/netflix.jpg",
    link: "https://ynetflix.vercel.app/",
    code: "https://github.com/Oluwayelu/NetfixClone",
    description:
      "Netflix clone built with Next JS for the client and Firebase as the backend",
    category: ["next", "styled-component", "firebase"],
    tags: ["Next", "Framer Motion", "Styled-components"],
  },

  {
    id: 1,
    name: "imGenerator Ai",
    image: "/images/projects/imgenai.png",
    code: "https://github.com/Oluwayelu/imGenerator-client",
    link: "https://imgeneratorai.netlify.app/",
    description:
      "imGenerator AI, an application that leverages OpenAI's image generation technology, enabling users to generate unique images based on custom prompts. The platform also allows users to browse previously generated images and download their favorites, offering an intuitive interface for creating and managing AI-generated visuals.",
    category: ["react", "node", "tailwindcss", "typescript"],
    tags: ["React", "TypeScript", "TailwindCSS", "Open AI"],
  },
  {
    id: 2,
    name: "Puzzles",
    image: "/images/projects/puzzles.jpg",
    link: "https://ypuzzles.netlify.app",
    code: "https://github.com/Oluwayelu/puzzles",
    description: "A Picture Puzzle game",
    category: ["react", "tailwindcss"],
    tags: ["React", "Styled-components"],
  },
  {
    id: 3,
    name: "Talkteon",
    image: "/images/projects/talkteon.png",
    link: "https://talkteon.com",
    description:
      "A high-performance video conferencing and podcast platform from the ground up, using Next.js, Node.js, and Mediasoup. Led a team of three and completed the initial release within two months, including features for live video streaming, real-time messaging, and content archiving. This platform supports up to 1000 participants per session, optimized for minimal latency and high-quality video streaming.",
    category: ["next", "tailwindcss", "node", "socket.io"],
    tags: ["Next", "Node", "Socket.io"],
  },
  {
    id: 4,
    name: "Trendteon",
    image: "/images/projects/trendteon.png",
    link: "https://www.trendteon.com",
    description:
      "Trendteon, a platform designed for managing influencer-based campaigns. Trendteon enables users to create campaigns and connect with influencers to achieve targeted campaign objectives. With tools to select and collaborate with influencers directly, the platform helps streamline the process of organizing and executing impactful influencer campaigns.",
    category: ["next", "tailwindcss", "typescript", "node"],
    tags: ["React", "TypeScript", "Node", "TailwindCSS"],
  },
  {
    id: 5,
    name: "Newsteon",
    image: "/images/projects/newsteon.png",
    link: "https://www.newsteon.com",
    description:
      "Developed Newsteon, a media campaign management platform tailored for media agencies in Nigeria. Newsteon allows users to create campaigns, select specific placements (such as Frontpage, Back page, or Bits), and choose from various media agents or media houses on the platform. With its streamlined interface, Newsteon simplifies the campaign setup process, helping agencies efficiently target and publish their media content.",
    category: ["next", "tailwindcss", "typescript"],
    tags: ["React", "TypeScript", "TailwindCSS"],
  },

  {
    id: 6,
    name: "Tic-Tac-Toe",
    image: "/images/projects/tic-tac-toe.png",
    link: "https://ytic-tac-toe.netlify.app/",
    description:
      "Created an interactive Tic Tac Toe game with both single-player (AI mode) and multiplayer options, available online at YTic Tac Toe. The game features a responsive design, intuitive UI, and real-time updates for multiplayer mode. It’s optimized for quick, enjoyable gameplay and provides a challenging AI opponent in single-player mode.",
    category: [
      "react",
      "node",
      "tailwindcss",
      "typescript",
      "javascript",
      "socket.io",
    ],
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 7,
    name: "BOEvents",
    image: "/images/projects/boevents.png",
    link: "https://boevent.netlify.app/",
    description:
      "Developed BOEvent, an intuitive Event Booking application that allows users to explore and register for various events. The platform features a clean, responsive design, making event discovery and booking straightforward and accessible for users.",
    category: ["next", "node", "tailwindcss", "typescript"],
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 8,
    name: "Accessoriess Hubb",
    image: "/images/projects/accessories-hubb.jpg",
    link: "https://accessoriesshubb.netlify.app/",
    description: "An Ecommerce Store for Phone/Computer Accessories",
    category: ["next", "react", "tailwindcss", "mongodb", "node"],
    tags: ["Next", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 9,
    name: "YChatt",
    image: "/images/projects/ychatt.jpg",
    link: "https://ychatt.netlify.app",
    code: "https://github.com/Oluwayelu/ychat-client",
    description:
      "Developed YChatt, a real-time chatting platform where users can join rooms to connect and chat with others. The application supports seamless messaging in a clean, responsive interface, creating a smooth user experience for both one-on-one and group conversations.",
    category: ["react", "node", "tailwindcss", "socket.io", "javascript"],
    tags: ["Next", "Framer Motion", "Styled-components", "Socket.io"],
  },
  {
    id: 10,
    name: "Snaple",
    image: "/images/projects/snaple.jpg",
    link: "https://snaple.netlify.app",
    code: "https://github.com/Oluwayelu/snaple",
    description:
      "Created Snaples, a modern take on the classic snake game where players navigate a growing snake to eat apples while avoiding walls and the snake’s own body. Designed with smooth controls and an engaging interface, Snaples challenges players’ reflexes and strategy, providing a nostalgic yet refreshed gaming experience.",
    category: ["react", "tailwindcss"],
    tags: ["React", "JavaScript", "TailwindCSS"],
  },
  {
    id: 11,
    name: "For.",
    image: "/images/projects/for.jpg",
    link: "https://yfor.netlify.app",
    code: "https://github.com/Oluwayelu/For.",
    description:
      "Developed For., a visually engaging, static one-page application dedicated to women’s fashion. The site showcases stylish design and a modern layout, providing an elegant online experience tailored to fashion enthusiasts. Optimized for quick loading and seamless browsing.",
    category: ["next", "tailwindcss", "typescript"],
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 12,
    name: "Casecraft",
    image: "/images/projects/casecraft.jpg",
    link: "https://ycasecraft.netlify.app",
    code: "https://github.com/Oluwayelu/casecraft",
    description:
      "Built Casecraft, a static one-page store that allows users to design and create unique, custom cases for their gadgets. Featuring an intuitive design interface, Casecraft provides a streamlined experience for users to craft personalized, stylish, and protective cases, tailored to their tastes and devices.",
    category: ["next", "tailwindcss", "typescript"],
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 13,
    name: "Knowledgator",
    image: "/images/projects/knowledgator.png",
    link: "https://knowledgator.netlify.app/",
    code: "https://github.com/Oluwayelu/knowledgator",
    description:
      "Developed Knowledgator, a powerful Text Decoration Editor that allows users to upload text or JSON files and transform them into colorful, styled text. With the ability to apply different colors to text and export the result back to a JSON format, Knowledgator provides a simple yet effective way to enhance textual content for various creative and presentation purposes.",
    category: ["next", "react", "tailwindcss", "javascript"],
    tags: ["React", "JavScript", "TailwindCSS"],
  },
  {
    id: 14,
    name: "Evalus",
    image: "/images/projects/evalus.jpg",
    link: "https://evalus.netlify.app/",
    code: "https://github.com/Oluwayelu/evalus",
    description:
      "Developed Evalus, a sleek and user-friendly calculator app designed for quick and accurate calculations. Featuring a clean interface and essential arithmetic functions, Evalus is optimized for everyday calculations, making it an ideal tool for users seeking a simple and effective calculator experience.",
    category: ["react", "tailwindcss", "typescript"],
    tags: ["React", "JavScript", "TailwindCSS"],
  },
  {
    id: 15,
    name: "Easeit",
    image: "/images/projects/easeit.jpg",
    description:
      "Easit, a platform for a non-profit organization dedicated to supporting those in need during the Covid pandemic. Easit facilitates outreach efforts, connecting resources with communities most affected by the pandemic, and provides an accessible platform for donations and volunteer engagement.",
    category: ["html", "css", "node"],
    tags: ["HTML", "Non-Profit"],
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
    startDate: "Dec, 2023",
    endDate: "Present",
    organization: "Precise platforms",
    position: "Fullstack developer",
    location: "Lagos, Nigeria(Hybrid)",
    description:
      "At Precise Platforms, I upgraded the company’s main product with a modern design and led the development of Talkteon, a video conferencing and podcast platform supporting up to 1000 participants. Collaborating with a small team, we launched the platform in two months, incorporating video streaming and real-time messaging.",
  },
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
