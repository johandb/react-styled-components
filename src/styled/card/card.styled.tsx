import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import type { Color } from "../../components/types/color";
import { Color2Value } from "../../components/utils/styled.utils";

export const Card = (props: { color?: Color; children: React.ReactNode }) => {
  let color = props.color ? Color2Value(props.color) : theme.colors.white;
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
