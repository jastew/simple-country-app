import React from "react";
import { Country, Region } from "../../common/models";
import Slider from "../../components/slider";
import Card from "../../components/card";
import { ListContainer, RegionHeading } from "./styles";

interface ListProps {
  countries: Country[];
  onSelect: (country: Country) => void;
}

const List = (props: ListProps) => {
  const { countries, onSelect } = props;

  const regions = countries.reduce((combined, country) => {
    const key = country.region || "Unknown";

    if (!combined[key]) {
      combined[key] = [];
    }
    combined[key].push(country);
    return combined;
  }, {} as Region);

  return (
    <ListContainer>
      {Object.entries(regions)
        .sort(([a], [b]) => (a < b ? -1 : 1))
        .map(([region, list], regionIdx) => (
          <div key={`region-${regionIdx}`}>
            <RegionHeading>{region}</RegionHeading>
            <Slider>
              {list.map((country, idx) => (
                <Card
                  onSelect={onSelect}
                  key={`country-${idx}`}
                  country={country}
                />
              ))}
            </Slider>
          </div>
        ))}
    </ListContainer>
  );
};

export default List;
