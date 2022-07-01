import { FunctionComponent } from "react";

type Props = {
  value: string;
  active: string;
  filterCategory: Function;
};

const Item: FunctionComponent<Props> = ({ value, active, filterCategory }) => {
  return (
    <div
      onClick={() => filterCategory(value)}
      className={`${
        active == value
          ? "text-white bg-primary"
          : "text-black bg-white hover:text-white hover:bg-primary"
      } px-3 py-1 rounded-lg font-medium capitalize text-sm cursor-pointer`}
    >
      {value}
    </div>
  );
};

export default Item;
