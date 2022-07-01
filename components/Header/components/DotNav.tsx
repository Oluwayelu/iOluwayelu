import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import routes from "routes";

const DotNav: FunctionComponent = () => {
  const { asPath } = useRouter();

  return (
    <div className="absolute h-screen top-0 right-5 md:right-10 ">
      <div className="h-full flex flex-col items-center justify-center space-y-3">
        {routes.map((route, index) => (
          <Link key={index} href={route.path}>
            <a
              className={`${
                asPath === route.path ? "bg-primary" : "bg-white"
              } w-3 h-3 rounded-full`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DotNav;
