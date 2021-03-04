import styled from "styled-components";
import { MdSearch } from "react-icons/md";

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 3rem;
  padding-left: 2rem;
  font-size: 1.125rem;
  background: #fff;
  border: none;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #000;
  outline: none;
`;

export const SearchIcon = styled(MdSearch)`
  position: absolute;
  z-index: 2;
  left: 0.5rem;
  top: 50%;
  font-size: 1.25rem;
  line-height: 0.8;
  opacity: 0.9;
  color: #000000;
  transform: translateY(-50%);
`;

export const SearchClear = styled.button`
  transform: translateY(-50%);
  position: absolute;
  right: 0;
  top: 50%;
  width: 3rem;
  height: 3rem;
  font-weight: bold;
  font-family: monospace;
  font-size: 1.5rem;
  line-height: 1;
  background: none;
  border: none;
  border-radius: 50%;
  color: #000;
  opacity: 0.5;
`;
