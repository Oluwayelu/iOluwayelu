import Image from "next/image";

import type { FunctionComponent } from "react";

type Props = {
  icon?: boolean;
  dark?: boolean;
  size?: "sm" | "md" | "lg";
};

const LogoText: FunctionComponent<Props> = ({
  icon = false,
  size = "md",
  dark,
}) => {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "w-20 h-5";
      case "md":
        return "w-40 h-10";
      case "lg":
        return "w-80 h-20";

      default:
        return "w-40 h-10";
    }
  };

  return (
    <div className={`${getSize()} relative`}>
      {icon ? (
        dark ? (
          <Image
            priority
            src="/images/icon-dark.png"
            alt="logo"
            layout="fill"
            className="filter object-contain object-center"
          />
        ) : (
          <Image
            priority
            src="/images/icon.png"
            alt="logo"
            layout="fill"
            className="filter object-contain object-center"
          />
        )
      ) : dark ? (
        <Image
          priority
          src="/images/logo-dark.png"
          alt="logo"
          layout="fill"
          className="filter object-contain object-center"
        />
      ) : (
        <Image
          priority
          src="/images/logo.png"
          alt="logo"
          layout="fill"
          className="filter object-contain object-center"
        />
      )}
    </div>
  );
};

export default LogoText;
