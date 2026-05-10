import styled from "styled-components";

interface ContainerProps {
  gap?: number;
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  let gap = props.gap ?? 0;
  return <StyledContainer $gap={gap}>{props.children}</StyledContainer>;
};

const StyledContainer = styled.div<{ $gap: number }>`
  display: flex;
  flex-direction: row;
  align-items: start;
  align-content: start;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${(props) => `${props.$gap}px`};
  background-color: inherit;
  box-sizing: border-box;
`;
