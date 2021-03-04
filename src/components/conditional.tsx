import React from "react";

interface ConditionalProps {
  condition: boolean;
  children: React.ReactNode;
}

const Conditional = (props: ConditionalProps) => {
  const { condition, children } = props;
  if (condition) {
    return <>{children}</>;
  }
  return null;
};

export default Conditional;
