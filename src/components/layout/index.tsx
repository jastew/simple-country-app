import React from "react";
import { LayoutBody, LayoutContainer, LayoutHeader } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return <LayoutContainer>{children}</LayoutContainer>;
};

Layout.Header = LayoutHeader;
Layout.Body = LayoutBody;

export default Layout;
