import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "utils/DATA";
import { stagger } from "utils/motion";
import { Project, Card, TypingText } from "components";

import type { Category } from "interface";
import type { FunctionComponent } from "react";

const Portfolio: FunctionComponent = () => {
  const [show, setShow] = useState(0);
  const [active, setActive] = useState("all");
  const [projectsData, setProjects] = useState(projects);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleFilterCategory = (category: Category) => {
    setActive(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (category === "all") {
        setProjects(projects);
        setShow(projects[0].id);
      } else {
        const newProjects = projects.filter((project) =>
          project.category.includes(category)
        );
        setProjects(newProjects);
        setShow(newProjects[0]?.id);
      }
    }, 500);
  };

  return (
    <motion.div
      id="portfolio"
      initial="hidden"
      whileInView="show"
      variants={stagger}
      className="relative w-full min-h-[50vh] py-16 md:py-20 bg-primary-300"
    >
      <div className="w-full lg:max-w-7xl lg:mx-auto px-5 md:px-10">
        <TypingText title="My Portfolio" className="text-center" />
        <div className="w-full h-full inline-flex flex-col justify-around items-center space-y-5">
          <Project.Navbar
            active={active}
            filterCategory={handleFilterCategory}
          />
          {projectsData.length > 0 ? (
            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className={`${
                projectsData.length > 3 ? "min-h-[90vh]" : "min-h-[50vh]"
              } w-full flex lg:flex-row flex-col lg:min-h-0 gap-5`}
            >
              {projectsData.map((project, index) => (
                <Card
                  type="project"
                  key={index}
                  show={show}
                  setShow={setShow}
                  data={project}
                />
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
    </motion.div>
  );
};

export default Portfolio;
