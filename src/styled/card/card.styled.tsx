import styled from "styled-components";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import { colorValue } from "../utils/styled.utils";

export const Card = (props: { color?: Color; children: React.ReactNode }) => {
  let color = props.color ? colorValue(props.color) : theme.colors.white;
  return <StyledCard color={color}>{props.children}</StyledCard>;
};

const StyledCard = styled.div<{ color: string }>`
  margin: 0;
  width: auto;
  height: auto;
  background-color: ${(props) => props.color || theme.colors.white};
  border: 1px solid ${() => theme.colors.defaultBorderColor};
  border-radius: 3px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;
`;
