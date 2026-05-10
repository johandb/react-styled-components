import type { ReactNode } from "react";
import styled from "styled-components";

interface StackProps {
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  children: ReactNode;
}

export const Stack = (props: StackProps) => {
  let margins = `${props.mt ?? 0}px ${props.mr ?? 0}px ${props.mb ?? 0}px ${props.ml ?? 0}px`;

  return <StyledStack margins={margins}>{props.children}</StyledStack>;
};

const StyledStack = styled.div<{ margins: string }>`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  margin: ${(props) => props.margins};
`;
