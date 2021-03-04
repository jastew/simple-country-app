import React from "react";
import { MdKeyboardArrowLeft as BackIcon } from "react-icons/md";
import { Country } from "../../common/models";
import {
  BackButton,
  BorderCountries,
  BorderTitle,
  DetailContainer,
  Flag,
  InfoContainer,
  RegionTitle,
  Title,
} from "./styles";
import Info from "./info";
import { formatNumber } from "../../utils";
import Slider from "../../components/slider";
import Conditional from "../../components/conditional";
import Card from "../../components/card";

interface DetailProps {
  country: Country;
  borderCountries: Country[] | undefined;
  onClickBack: () => void;
}

const Detail = (props: DetailProps) => {
  const {
    country: { name, population, flag, capital, currencies, languages, region },
    borderCountries,
    onClickBack,
  } = props;
  return (
    <DetailContainer>
      <BackButton onClick={onClickBack}>
        <BackIcon /> Back
      </BackButton>
      <Flag src={flag} />
      <RegionTitle>{region}</RegionTitle>
      <Title>{name}</Title>
      <InfoContainer>
        <Info title="Capital" value={capital} />
        <Info title="Population" value={formatNumber(population)} />
        <Info
          title="Languages"
          value={languages.map((language) => language.name).join(", ")}
        />
        <Info
          title="Currency"
          value={currencies.map((currency) => currency.name).join(", ")}
        />
      </InfoContainer>

      <Conditional condition={!!borderCountries && borderCountries.length > 0}>
        <BorderTitle>Bordering Countries</BorderTitle>
        <BorderCountries>
          <Slider>
            {borderCountries?.map((country, idx) => (
              <Card key={idx} country={country} />
            ))}
          </Slider>
        </BorderCountries>
      </Conditional>
    </DetailContainer>
  );
};

export default Detail;
