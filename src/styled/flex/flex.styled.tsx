import styled from "styled-components";
import type { Color } from "../../components/types/color";
import { Color2Value } from "../../components/utils/styled.utils";

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
  let bg = Color2Value(props.bg ?? "inherit");

  return (
    <StyledFlexCol span={props.span} $bg={bg}>
      {props.children}
    </StyledFlexCol>
  );
};

export const Flex = (props: FlexProps) => {
  let bg = Color2Value(props.bg ?? "inherit");

  return (
    <StyledFlex $bg={bg} $gap={props.gap}>
      {props.children}
    </StyledFlex>
  );
};

const StyledFlex = styled.div<{ $gap?: number; $bg: string }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: ${(props) => `${props.$gap ?? 0}px;`};
  background-color: ${(props) => props.$bg};
  width: 100%;
`;

const StyledFlexCol = styled.div<{ span?: number; $bg: string }>`
  flex-grow: ${(props) => props.span ?? 12};
  background-color: ${(props) => props.$bg};
`;
