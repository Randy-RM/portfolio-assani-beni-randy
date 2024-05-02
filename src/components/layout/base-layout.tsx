import React from "react";
import { useThemeStore } from "../../store";
import "../../styles/sass/main.scss";
import FrontOfficeLayout from "./frontoffice-layout";

type BaseLayoutProps = {
  children: JSX.Element;
};

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => {
  // "select" the needed state and action
  const themeState = useThemeStore((state) => state.themeState);
  return (
    <div className={`theme--${themeState}`}>
      <FrontOfficeLayout>{children}</FrontOfficeLayout>
    </div>
  );
};

export default BaseLayout;
