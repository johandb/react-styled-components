import styled from "styled-components";
import { Text } from "../text/styled.text";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import { colorValue } from "../utils/styled.utils";

interface AlertProps {
  title?: string;
  m?: number;
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: Color;
}

export const Alert = (props: AlertProps) => {
  let color = colorValue(props.color ?? theme.colors.blue);

  return (
    <StyledAlertWrapper color={color} $margin={props.m ?? 0}>
      <StyledAlertBody>
        {props.title && <Text color={theme.colors.white} label={props.title} mb={15} fw="bold" />}
        <StyledAlert>{props.children}</StyledAlert>
      </StyledAlertBody>
    </StyledAlertWrapper>
  );
};

const StyledAlertWrapper = styled.div<{ color: string; $margin: number }>`
  display: block;
  background-color: ${(props) => props.color};
  margin: ${(props) => `${props.$margin}px`};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  width: auto;
`;

const StyledAlertBody = styled.div<{ color?: string }>`
  color: white;
  font-size: 14px;
`;

const StyledAlert = styled.div``;
