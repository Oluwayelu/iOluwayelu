import { FunctionComponent, ReactNode } from "react";

type Props = {
  message: string;
  children: ReactNode;
};

const Tooltip: FunctionComponent<Props> = ({ message, children }) => {
  return (
    <div className="relative w-full flex flex-col group cursor-pointer">
      {children}
      <div className="absolute bottom-1 lg:top-2 items-start hidden group-hover:flex z-20">
        <span className="relativ lg:w-60 p-3 text-sm leading-none text-dark bg-white shadow-lg rounded">
          {message}
        </span>
      </div>
    </div>
  );
};

export default Tooltip;
