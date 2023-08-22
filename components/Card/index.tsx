import Project from "./Project";
import Technologies from "./Technologies";

import type { FunctionComponent } from "react";

type Props = {
  type?: "project" | "technologies";
  data: any;
  show?: number;
  setShow?: Function;
};

const Card: FunctionComponent<Props> = ({ type, data, show, setShow }) => {
  if (type === "project") {
    return <Project show={show} setShow={setShow} project={data} />;
  } else {
    return <Technologies technology={data} />;
  }
};

export default Card;
