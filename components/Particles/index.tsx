import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particle from "react-tsparticles";

import { options } from "./particles";

import type { FunctionComponent } from "react";
import type { Engine } from "tsparticles-engine";

const Particles: FunctionComponent = () => {
  const particleInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div id="particle-background" className="relative">
      <Particle
        width="100vw"
        height="100vh"
        id="tsparticles"
        options={options}
        init={particleInit}
      />
    </div>
  );
};

export default Particles;
