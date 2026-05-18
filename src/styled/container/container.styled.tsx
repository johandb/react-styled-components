import styled from "styled-components";
import type { Color } from "../types/color";
import { colorValue } from "../utils/styled.utils";

interface ContainerProps {
  bg?: Color;
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  w?: number;
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  let bg = colorValue(props.bg ?? "inherit");
  let w = props.w ? `${props.w}px` : "auto";
  let margin = "0px";
  if (props.m) {
    margin = `${props.m}px`;
  } else {
    margin = props.mt ? `${props.mt}px` : margin;
    margin = `${margin} ${props.mr ? `${props.mr}px` : `0px`}`;
    margin = `${margin} ${props.mb ? `${props.mb}px` : `0px`}`;
    margin = `${margin} ${props.ml ? `${props.ml}px` : `0px`}`;
  }

  console.log("margin:", margin);

  return (
    <StyledContainer $margin={margin} $w={w} $bg={bg}>
      {props.children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $bg: string; $margin: string; $w: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  align-content: start;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0;
  background-color: ${(props) => props.$bg};
  width: ${(props) => props.$w};
  margin: ${(props) => props.$margin};
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;
