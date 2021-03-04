import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  padding: 1rem;

  &:after {
    position: absolute;
    top: 100%;
    left: -1rem;
    right: -1rem;
    height: 1rem;
    background: linear-gradient(to bottom, #100, transparent);
    opacity: 0.8;
    content: "";
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
