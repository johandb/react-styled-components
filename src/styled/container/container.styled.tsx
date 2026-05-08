import styled from "styled-components";

interface ContainerProps {
  gap?: number;
  direction?: "row" | "column";
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  let gap = props.gap ?? 0;
  let direction = props.direction ?? "row";
  return (
    <StyledContainer $direction={direction} $gap={gap}>
      {props.children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $gap: number; $direction: string }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  align-items: start;
  align-content: start;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${(props) => `${props.$gap}px`};
  background-color: inherit;
  box-sizing: border-box;
`;
