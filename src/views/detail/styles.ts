import styled, { keyframes } from "styled-components";

const onLoad = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const DetailContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, #223, #100);
  color: #fff;
  animation: ${onLoad} 0.5s ease-out;
  box-sizing: border-box;
`;

export const BackButton = styled.button`
  position: relative;
  z-index: 2;
  display: inline-block;
  padding: 1rem;
  margin: -1rem 0 0 -1rem;
  font-size: 1rem;
  font-weight: normal;
  background: none;
  border: none;
  color: inherit;

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;

export const Flag = styled.img`
  display: block;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;

export const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 2rem;
`;

export const RegionTitle = styled.h3`
  margin: 0;
  font-size: 0.85rem;
  text-transform: uppercase;
  font-weight: normal;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const InfoItem = styled.div`
  flex: 1 1 40%;
  padding-right: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
`;

export const InfoTitle = styled.small`
  display: block;
  font-size: 0.85rem;
  opacity: 0.5;
`;

export const InfoValue = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const BorderTitle = styled.h4`
  padding-bottom: 0.5rem;
  margin: 0 0 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid #333;
`;

export const BorderCountries = styled.div`
  margin-right: -1rem;
`;
