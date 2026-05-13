import styled from "styled-components";
import type { Color } from "../../components/types/color";
import { Color2Value } from "../../components/utils/styled.utils";

interface ContainerProps {
  bg?: Color;
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  let bg = Color2Value(props.bg ?? "inherit");

  return <StyledContainer $bg={bg}>{props.children}</StyledContainer>;
};

const StyledContainer = styled.div<{ $bg: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  align-content: start;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0;
  background-color: ${(props) => props.$bg};
  overflow: hidden;
  width: 100%;
`;
