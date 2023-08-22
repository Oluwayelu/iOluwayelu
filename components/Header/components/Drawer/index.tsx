import { motion } from "framer-motion";

import { Logo } from "components";
import routes, { social } from "routes";
import { items, stagger } from "utils/motion";

import { Item } from "./Item";

import type { FunctionComponent } from "react";

type Props = {
  open: boolean;
  toggle: Function;
};

const Drawer: FunctionComponent<Props> = ({ open, toggle }) => (
  <motion.aside
    initial={{ width: 0 }}
    animate={{ width: 200 }}
    exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
    className={`${
      open ? "block" : "hidden"
    } absolute px-5 pt-3 h-screen top-0 left-0 bottom-0 z-20 bg-primary`}
  >
    <motion.ul initial="hidden" animate="show" exit="hidden" variants={stagger}>
      <Logo dark />

      <div className="h-[90vh] py-5 flex flex-col justify-between">
        <div className="space-y-2">
          {routes.map((route, index) => (
            <Item key={index} route={route} toggle={toggle} />
          ))}
        </div>

        <div className="w-full flex justify-around items-center self-end">
          {social.map(({ link, Icon }, index) => (
            <motion.li
              variants={items}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={index}
            >
              <a href={link} target="_blank" rel="noreferrer">
                <Icon className=" hover:text-primary-100 w-7 h-7" />
              </a>
            </motion.li>
          ))}
        </div>
      </div>
    </motion.ul>
  </motion.aside>
);

const itemIds = [0, 1, 2, 3, 4];

export default Drawer;
