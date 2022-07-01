import Link from "next/link";
import { useScroll } from "hooks";
import { FaArrowUp } from "react-icons/fa";
import type { FunctionComponent } from "react";

const Fab: FunctionComponent = () => {
  const { y } = useScroll();
  return (
    <Link href="/" passHref>
      <div
        className={`${
          y >= 1000 ? "flex" : "hidden"
        } fixed bottom-5 right-5 lg:bottom-20 lg:right-20 w-14 h-14 items-center justify-center bg-primary rounded-full cursor-pointer`}
      >
        <FaArrowUp className="w-5 h-5" />
      </div>
    </Link>
  );
};

export default Fab;
