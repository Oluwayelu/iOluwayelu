import { Tooltip } from "components";

import type { IDetails } from "interface";
import type { FunctionComponent } from "react";

type Props = {
  detail: IDetails;
  align?: "start" | "end";
};

const Details: FunctionComponent<Props> = ({
  align,
  detail: { startDate, endDate, organization, position, location, description },
}) => {
  return (
    <div
      className={`${
        align === "end" && "lg:items-end"
      } py-1 lg:w-full flex flex-col flex-none snap-start whitespace-nowrap`}
    >
      <h3>{organization}</h3>
      <h4 className="text-primary-100">
        {startDate && <span>{startDate} - </span>}
        {endDate ? endDate : "Present"}
      </h4>
      <p className="text-sm lg:text-base">{position}</p>
      <span className="text-sm lg:text-base text-white">{location}</span>
    </div>
  );
};

export default Details;
