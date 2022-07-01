import { useState } from "react";
import { motion } from "framer-motion";
import { Project, Card } from "components";
import {  projects } from "utils/DATA";

import type { Category } from "interface";
import type { FunctionComponent } from "react";

const Portfolio: FunctionComponent = () => {
  const [projectsData, setProjects] = useState(projects);
  const [active, setActive] = useState("all");

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleFilterCategory = (category: Category) => {
    setActive(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (category === "all") {
        setProjects(projects);
      } else {
        setProjects(
          projects.filter((project) => project.category.includes(category))
        );
      }
    }, 500);
  };

  return (
    <div
      id="portfolio"
      className="relative w-full min-h-[50vh] py-16 md:py-20 bg-primary-300"
    >
      <div className="w-full lg:max-w-5xl lg:mx-auto px-5 md:px-10">
        <h1 className="capitalize text-4xl lg:text-6xl text-center font-bold pb-5">
          My Portfolio
        </h1>
        <div className="w-full h-full inline-flex flex-col justify-around items-center space-y-5">
          <Project.Navbar
            active={active}
            filterCategory={handleFilterCategory}
          />
          {projectsData.length > 0 ? (
            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {projectsData.map((project, index) => (
                <Card type="project" data={project} key={index} />
              ))}
            </motion.div>
          ) : (
            <motion.p
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="text-4xl cols-span-4"
            >
              No Project Found
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
