import styled from "styled-components";
import type { Color } from "../../components/types/color";

interface FlexProps {
  gap?: number;
  bg?: Color;
  children: React.ReactNode;
}

interface FlexColProps {
  span?: number;
  bg?: Color;
  children: React.ReactNode;
}

export const FlexCol = (props: FlexColProps) => {
  return (
    <StyledFlexCol span={props.span} $bg={props.bg}>
      {props.children}
    </StyledFlexCol>
  );
};

export const Flex = (props: FlexProps) => {
  return (
    <StyledFlex $bg={props.bg} $gap={props.gap}>
      {props.children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div<{ $gap?: number; $bg?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${(props) => `${props.$gap ?? 0}px;`};
  background-color: ${(props) => props.$bg ?? "inherit"};
`;

const StyledFlexCol = styled.div<{ span?: number; $bg?: string }>`
  flex-grow: ${(props) => props.span ?? 12};
  background-color: ${(props) => props.$bg ?? "inherit"};
`;
