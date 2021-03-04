import styled from "styled-components";

interface SliderItemProps {
  align?: string;
}

export const SliderContainer = styled.ol`
  display: block;
  padding: 0;
  margin: 0 0 0 -1rem;
  list-style-type: none;
  white-space: nowrap;
  overflow: auto;
`;

export const SliderItem = styled.li<SliderItemProps>`
  display: inline-block;
  vertical-align: ${(props) => props.align || "top"};
  width: 60%;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  white-space: normal;
  box-sizing: border-box;
`;
