import { FunctionComponent } from "react";
import NavItem from "./item";

type Props = {
  active: string;
  filterCategory: Function;
};

const Navbar: FunctionComponent<Props> = ({ active, filterCategory }) => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-2">
      <NavItem value="html" filterCategory={filterCategory} active={active} />
      <NavItem value="react" filterCategory={filterCategory} active={active} />
      <NavItem value="next" filterCategory={filterCategory} active={active} />
      <NavItem value="node" filterCategory={filterCategory} active={active} />
      <NavItem
        value="mongodb"
        filterCategory={filterCategory}
        active={active}
      />
      <NavItem
        value="firebase"
        filterCategory={filterCategory}
        active={active}
      />
      <NavItem
        value="socket.io"
        filterCategory={filterCategory}
        active={active}
      />
      <NavItem
        value="tailwindcss"
        filterCategory={filterCategory}
        active={active}
      />
      <NavItem value="all" filterCategory={filterCategory} active={active} />
    </div>
  );
};

export default Navbar;
