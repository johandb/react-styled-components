import styled from "styled-components";
import type { Color } from "../types/color";
import { themeColors } from "../utils/styled.utils";

interface ContainerProps {
  bg?: Color;
  children?: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  let bg = themeColors[props.bg as keyof typeof themeColors]?.value ?? props.bg ?? "inherit";

  return <StyledContainer $bg={bg}>{props.children}</StyledContainer>;
};

const StyledContainer = styled.div<{ $bg: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  align-content: start;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0px;
  background-color: ${(props) => props.$bg};

  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;
