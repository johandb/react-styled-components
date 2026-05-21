import styled from "styled-components";
import { Box } from "../box/box";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import type { DefaultProps } from "../types/default.props";
import { themeColors } from "../utils/styled.utils";

export interface CardProps extends DefaultProps {
  color?: Color;
}

export const Card = (props: CardProps) => {
  let color = themeColors[props.color as keyof typeof themeColors]?.value ?? theme.colors.white;
  return (
    <Box w={props.w} m={props.m} mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml}>
      <StyledCard color={color}>{props.children}</StyledCard>
    </Box>
  );
};

const StyledCard = styled.div<{ color: string }>`
  height: auto;
  background-color: ${(props) => props.color || theme.colors.white};
  border: 1px solid ${() => theme.colors.defaultBorderColor};
  border-radius: 5px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 10px;
`;
