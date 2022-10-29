import Image from "next/image";
import { diffDate } from "utils";
import { Details } from "components";
import { educations, experiences } from "utils/DATA";

import type { FunctionComponent } from "react";

const About: FunctionComponent = () => {
  return (
    <div
      id="about"
      className="relative w-full lg:max-w-7xl lg:mx-auto px-5 md:px-10 py-16 md:py-20"
    >
      <h1 className="capitalize text-4xl lg:text-6xl text-left font-bold pb-5">
        About Me
      </h1>

      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center space-y-3 lg:space-y-0 lg:space-x-3">
        <div className="w-full lg:w-1/3 inline-flex justify-center">
          <div className="relative w-40 h-40 lg:w-60 lg:h-60 rounded-full overflow-hidden">
            <Image
              src="/images/ifeoluwa.jpg"
              alt="Ifeoluwa"
              layout="fill"
              className="filter object-cover object-center"
            />
          </div>
        </div>

        <p className="w-full lg:w-2/3">
          My name is{" "}
          <span className="font-bold text-primary">
            Oluwayelu Ifeoluwa David
          </span>
          , and I am Software Engineer with a professional experience of{" "}
          {diffDate(new Date(2019, 5, 11), new Date())}+ years. I specialize in
          building (and occasionally designing) exceptional products with great
          user experience.
        </p>
      </div>

      <div className="w-full lg:max-w-5xl lg:mx-auto lg:px-10 mt-5 lg:mt-10 flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
        <div className="w-full flex flex-col lg:items-start space-y-5">
          <h2>Experience</h2>

          <div className="w-full flex lg:flex-col flex-shrink-0 items-start overflow-x-auto scroll-p-5 snap-x scroll-smooth cursor-pointer space-x-5 space-y-0 lg:space-x-0 lg:space-y-3">
            {experiences &&
              experiences.map((detail, index) => (
                <Details detail={detail} key={index} />
              ))}
          </div>
        </div>

        <div className="w-full flex flex-col lg:items-end space-y-5">
          <h2>Education</h2>

          <div className="w-full flex lg:flex-col flex-shrink-0 items-start overflow-x-auto scroll-p-5 snap-x scroll-smooth cursor-pointer space-x-5 space-y-0 lg:space-x-0 lg:space-y-3">
            {educations &&
              educations.map((detail, index) => (
                <Details detail={detail} align="end" key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
