import React from "react";
import { Country } from "../../common/models";
import { CardContainer, CardImage, CardTitle, CardSummary } from "./styles";
import { formatNumber } from "../../utils";

interface CardProps {
  country: Country;
  onSelect?: (country: Country) => void;
}

const Card = (props: CardProps) => {
  const { country, onSelect } = props;
  const { name, flag, population } = country;

  return (
    <CardContainer
      onClick={() => (onSelect ? onSelect(country) : () => undefined)}
    >
      <CardImage image={flag} />
      <CardTitle>{name}</CardTitle>
      <CardSummary>Population of {formatNumber(population)}</CardSummary>
    </CardContainer>
  );
};

export default Card;
