import { Logo } from "components";

import type { FunctionComponent } from "react";

const Loader: FunctionComponent = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-primary-300/70 space-y-5">
      <Logo icon size="lg" />
      <div className="flex">
        <p className="text-wave">i</p>
        <p className="text-wave">o</p>
        <p className="text-wave">l</p>
        <p className="text-wave">u</p>
        <p className="text-wave">w</p>
        <p className="text-wave">a</p>
        <p className="text-wave">y</p>
        <p className="text-wave">e</p>
        <p className="text-wave">l</p>
        <p className="text-wave">u</p>
      </div>
    </div>
  );
};

export default Loader;
