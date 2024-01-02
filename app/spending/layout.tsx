import React, { PropsWithChildren } from "react";

const SpendingLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="min-h-screen h-full flex justify-center">{children}</main>
  );
};

export default SpendingLayout;
