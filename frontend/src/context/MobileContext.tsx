import React from "react";

interface MobileContextData {
  mobile: boolean;
  setMobile: (mobile: boolean) => void;
}

export const MobileContext = React.createContext<MobileContextData | null>(
  null,
);

export const useMobile = () => {
  const context = React.useContext(MobileContext);
  if (!context) {
    throw new Error("useMobile must be used within an MobileProvider");
  }
  return context;
};

const MobileProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [mobile, setMobile] = React.useState(false);

  return (
    <MobileContext.Provider value={{ mobile, setMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileProvider;
