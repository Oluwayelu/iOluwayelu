import { IProject, ITechnologies } from "interface";
import { FunctionComponent } from "react";
import Project, { ProjectProps } from "./Project";
import Technologies, { TechnologiesProps } from "./Technologies";
type Props = {
  type?: "project" | "technologies";
  data: any;
};

const Card: FunctionComponent<Props> = ({ type, data }) => {
  if (type === "project") {
    return <Project project={data} />;
  } else {
    return <Technologies technology={data} />;
  }
};

export default Card;
