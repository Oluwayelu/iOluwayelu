import { createContext, useState, useContext } from "react";

import type { ReactNode, FunctionComponent } from "react";

type Props = {
  children: ReactNode;
};

const useValue = () => {
  const [show, setShow] = useState<boolean>(false);
  const [type, setType] = useState<"error" | "success" | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  return {
    show,
    setShow,
    type,
    setType,
    message,
    setMessage,
  };
};

const NotificationContext = createContext({} as ReturnType<typeof useValue>);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification should be used within the GameProvider");
  }
  return context;
};

export const NotificationProvider: FunctionComponent<Props> = ({
  children,
}) => {
  return (
    <NotificationContext.Provider value={useValue()}>
      {children}
    </NotificationContext.Provider>
  );
};
