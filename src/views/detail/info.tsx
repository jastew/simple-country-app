import React from "react";
import { InfoItem, InfoTitle, InfoValue } from "./styles";

interface InfoProps {
  title: string;
  value: string;
}

const Info = (props: InfoProps) => {
  const { title, value } = props;

  return (
    <InfoItem>
      <InfoTitle>{title}</InfoTitle>
      <InfoValue>{value}</InfoValue>
    </InfoItem>
  );
};

export default Info;
