import { Bar, Card } from "components";
import { technologies, skills } from "utils/DATA";

import type { FunctionComponent } from "react";

const Technologies: FunctionComponent = () => {
  return (
    <div
      id="technologies"
      className="relative w-full lg:max-w-7xl lg:mx-auto px-5 md:px-10 py-16 md:py-20"
    >
      <h1 className="capitalize text-4xl lg:text-6xl text-left font-bold pb-5">
        Technologies
      </h1>
      <div className="space-y-3">
        <p className="w-full lg:w-1/2">
          I have worked with a range of technologies in the web developmet world
          from Backend to Design
        </p>

        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-5">
          {technologies &&
            technologies.map((technology, index) => (
              <Card key={index} data={technology} />
            ))}
        </div>
      </div>

      <h1 className="capitalize text-4xl lg:text-6xl text-center font-bold pb-5 pt-10 md:pt-20">
        Skills
      </h1>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
        {skills &&
          skills.map((skill, index) => <Bar key={index} skill={skill} />)}
      </div>
    </div>
  );
};

export default Technologies;
