import type { ReactNode } from "react";
import styled from "styled-components";

interface GroupProps {
  gap?: number;
  justify?: string;
  align?: string;
  wrap?: string;
  children: ReactNode;
}

export const Group = (props: GroupProps) => {
  let justify = props.justify ?? "flex-start";
  let align = props.align ?? "start";
  let gap = props.gap ?? 5;
  let wrap = props.wrap ?? "wrap";

  return (
    <StyledGroup $gap={gap} $justify={justify} $align={align} wrap={wrap}>
      {props.children}
    </StyledGroup>
  );
};

const StyledGroup = styled.div<{ $justify: string; $gap: number; $align: string; wrap: string }>`
  display: inline-flex;
  justify-content: ${(props) => props.$justify};
  align-content: ${(props) => props.$align};
  gap: ${(props) => `${props.$gap}px`};
  flex-wrap: ${(props) => props.wrap};
`;
