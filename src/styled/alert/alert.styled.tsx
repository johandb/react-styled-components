import styled from "styled-components";
import { Box } from "../box/box";
import { Text } from "../text/styled.text";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import type { DefaultProps } from "../types/default.props";
import { themeColors } from "../utils/styled.utils";

interface AlertProps extends DefaultProps {
  title?: string;
  icon?: React.ReactNode;
  color?: Color;
}

export const Alert = (props: AlertProps) => {
  let bg = themeColors[props.color as keyof typeof themeColors]?.value ?? theme.colors.black;

  return (
    <Box w={props.w} m={props.m} mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml}>
      <StyledAlertWrapper $bg={bg}>
        <StyledAlertBody>
          {props.title && <Text color={theme.colors.white} label={props.title} mb={15} fw="bold" />}
          <StyledAlert>{props.children}</StyledAlert>
        </StyledAlertBody>
      </StyledAlertWrapper>
    </Box>
  );
};

const StyledAlertWrapper = styled.div<{ $bg: string }>`
  /* display: block; */
  background-color: ${(props) => props.$bg};
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  /* width: auto; */
`;

const StyledAlertBody = styled.div<{ color?: string }>`
  color: white;
  font-size: 14px;
`;

const StyledAlert = styled.div``;
