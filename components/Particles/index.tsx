import Particle from "react-tsparticles";
import { FunctionComponent } from "react";

const Particles: FunctionComponent = () => {
  return (
    <Particle
      options={{
        fpsLimit: 60,
        // background: {
        //   color: "#CCC",
        // },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: { enable: true, mode: "repulse" },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: { enable: false, force: 2, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 0.3,
              opacity: 1,
              size: 4,
              // speed: 3,
            },
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: {
            value: ["#FFFFFF", "#007BAA"],
          },
          links: {
            color: "#fff",
            enable: true,
            distance: 50,
            opacity: 0.5,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: {
              default: "bounce",
            },
          },
          opacity: {
            random: true,
            value: 0.5,
          },
          size: {
            random: true,
            value: 5,
          },
        },
      }}
    />
  );
};

export default Particles;
