import type { ReactNode } from "react";
import styled from "styled-components";

interface GroupProps {
  gap?: number;
  justify?: string;
  align?: string;
  wrap?: string;
  full?: boolean;
  children: ReactNode;
}

export const Group = (props: GroupProps) => {
  let justify = props.justify ?? "flex-start";
  let align = props.align ?? "end";
  let gap = props.gap ?? 5;
  let wrap = props.wrap ?? "wrap";
  let full = props.full ?? false;

  return (
    <StyledGroup $full={full} $gap={gap} $justify={justify} $align={align} wrap={wrap}>
      {props.children}
    </StyledGroup>
  );
};

const StyledGroup = styled.div<{ $full: boolean; $justify: string; $gap: number; $align: string; wrap: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  gap: ${(props) => `${props.$gap}px`};
  flex-wrap: ${(props) => props.wrap};
  ${(props) => (props.$full ? "width: 100%" : "")}
`;
