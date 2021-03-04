import React from "react";
import { SliderContainer, SliderItem } from "./styles";

interface SliderProps {
  children: React.ReactNode;
  align?: "top" | "middle" | "bottom";
}

const Slider = (props: SliderProps) => {
  const { children, align } = props;
  return (
    <SliderContainer>
      {React.Children.map(children, (child, idx) => (
        <SliderItem align={align} key={idx}>
          {child}
        </SliderItem>
      ))}
    </SliderContainer>
  );
};

export default Slider;
