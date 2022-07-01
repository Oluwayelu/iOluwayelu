import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

type Props = {
  id: string;
  label?: string | ReactNode;
  onClick: MouseEventHandler;
};

const Switch: FunctionComponent<Props> = ({ id, label, onClick }) => {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer relative">
      <input
        onClick={onClick}
        type="checkbox"
        role="switch"
        id={id}
        className="sr-only"
      />
      <div className="flex toggle-bg bg-white border-2 border-gray-200 h-6 w-11 rounded-full" />
      {label && <div className="ml-1">{label}</div>}
    </label>
  );
};

export default Switch;
