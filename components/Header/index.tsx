import { FunctionComponent, useRef } from "react";
import Link from "next/link";
import { useDimensions, useScroll } from "hooks";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { Logo, Switch } from "components";
import { useTheme } from "next-themes";
import { DotNav } from "./components";
import { GiMoon, GiSun } from "react-icons/gi";
import Menu from "./components/Menu";
import Drawer from "./components/Drawer";
import routes, { social } from "routes";

const Header: FunctionComponent = () => {
  const { y } = useScroll();
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={"200px"}
      ref={containerRef}
      className={`${
        y >= 50 ? "bg-blue-300 dark:bg-dark-300" : "bg-transparent"
      }  fixed top-0 left-0 right-0 flex justify-center z-50`}
    >
      {/* <DotNav /> */}

      <div className="px-5 py-3 w-full md:max-w-4xl lg:max-w-6xl flex justify-between items-center">
        <Logo icon={false} />
        <ul className="hidden lg:inline-flex space-x-3">
          {routes.map((route, index) => (
            <li key={index} className="relative flex flex-col items-center">
              <Link href={route.path} scroll>
                <a className="capitalize peer hover:text-primary-100">
                  {route.name}
                </a>
              </Link>
              <div className="hidden absolute -top-1 peer-hover:block w-1 h-1 bg-primary-100 rounded-full" />
            </li>
          ))}
        </ul>

        <ul className="hidden lg:inline-flex space-x-3">
          {social.map(({ link, Icon }, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                <Icon className=" hover:text-primary-100 w-7 h-7" />
              </a>
            </li>
          ))}
        </ul>

        <Menu toggle={() => toggleOpen()} />
        <AnimatePresence>
          {isOpen && <Drawer open={isOpen} toggle={toggleOpen} />}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Header;
