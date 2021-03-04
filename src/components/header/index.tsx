import React from "react";
import { HeaderContainer, HeaderTitle } from "./styles";
import Search from "../search";

interface HeaderProps {
  search: string;
  onChangeSearch: (value: string) => void;
}

const Header = (props: HeaderProps) => {
  const { search, onChangeSearch } = props;

  return (
    <HeaderContainer>
      <HeaderTitle>Countries App</HeaderTitle>
      <Search value={search} updateValue={onChangeSearch} />
    </HeaderContainer>
  );
};

export default Header;
