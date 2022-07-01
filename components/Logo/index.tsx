import { FunctionComponent } from "react";
import Image from "next/image";

type Props = {
  icon?: boolean;
  dark?: boolean;
};

const LogoText: FunctionComponent<Props> = ({ icon, dark }) => {
  return (
    <div className="relative w-40 h-10">
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
