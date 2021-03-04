import React from "react";
import { MdClear as ClearIcon } from "react-icons/md";
import {
  SearchClear,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styles";
import Conditional from "../conditional";

interface SearchProps {
  value: string;
  updateValue: (value: string) => void;
}

const Search = (props: SearchProps) => {
  const { value, updateValue } = props;

  const clear = () => {
    updateValue("");
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        placeholder="Search"
        value={value}
        onChange={(e) => updateValue(e.currentTarget.value)}
      />
      <Conditional condition={!!value}>
        <SearchClear onClick={clear}>
          <ClearIcon />
        </SearchClear>
      </Conditional>
    </SearchContainer>
  );
};

export default Search;
