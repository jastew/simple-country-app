import styled from "styled-components";

interface CardImageProps {
  image: string;
}

export const CardContainer = styled.div``;

export const CardTitle = styled.h2`
  display: block;
  overflow: hidden;
  margin: 0;
  font-size: 1.125rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardSummary = styled.small`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  opacity: 0.6;
`;

export const CardImage = styled.div<CardImageProps>`
  display: block;
  margin-bottom: 0.5rem;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  border-radius: 1rem;

  &:before {
    display: block;
    padding-bottom: 66.6667%;
    content: "";
  }
`;
