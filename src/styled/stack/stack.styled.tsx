import type { ReactNode } from "react";
import styled from "styled-components";

interface StackProps {
  children: ReactNode;
}

export const Stack = (props: StackProps) => {
  return <StyledStack>{props.children}</StyledStack>;
};

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
`;
