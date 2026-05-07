import styled from "styled-components";

interface ContainerProps {
  gap?: number;
}

export const Container = (props: ContainerProps) => {
  let gap = props.gap ?? 0;
  return <StyledContainer $gap={gap}></StyledContainer>;
};

const StyledContainer = styled.div<{ $gap: number }>`
  display: flex;
  gap: ${(props) => `${props.$gap}px`};
`;
