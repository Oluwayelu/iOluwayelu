import { Logo } from "components";
import Link from "next/link";
import type { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="w-full bg-primary-400 text-center">
      <div className="w-full pt-10 pb-5 flex flex-col items-center space-y-3 border-b-2">
        <Logo />
        <div className="inline-flex">
          <Link href="/#about">
            <a className="px-3 border-r-2">About</a>
          </Link>

          <Link href="/#portfolio">
            <a className="px-3 border-r-2">Portfolio</a>
          </Link>

          <Link href="/#contact">
            <a className="px-3">Contact</a>
          </Link>
        </div>

        <p className="text-white">
          Lagos, Nigeria / +234 905 315 6229 / oluwayeluifeoluwa@gmail.om
        </p>
      </div>

      <div className="pt-5 pb-10">
        <p>copyright © 2022, iOluwayelu | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
