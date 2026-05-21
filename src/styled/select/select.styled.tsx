import styled from "styled-components";
import { Box } from "../box/box";
import { Stack } from "../stack/stack.styled";
import { Text } from "../text/styled.text";
import { theme } from "../themes/themes";
import type { DefaultProps } from "../types/default.props";
import type { Size } from "../types/size";

interface SelectProps extends DefaultProps {
  label?: string;
  value?: string;
  size?: Size;

  data: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const Select = (props: SelectProps) => {
  return (
    <Box w={props.w} m={props.m} mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml}>
      <Stack>
        {props.label && (
          <Text mb={2} size={props.size ?? "xs"}>
            {props.label}
          </Text>
        )}
        <StyledSelect $w={props.w} onChange={(e) => props.onChange(e.target.value)} value={props.value}>
          {props.data.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </Stack>
    </Box>
  );
};

const StyledSelect = styled.select<{ $w?: number }>`
  width: fit-content;
  outline: none;
  border-radius: 5px;
  border: 1px lightgray solid;
  padding: 5px;
  width: ${(props) => (props.$w ? `${props.$w}px` : "auto")};
  font-size: 14px;
  font-family: ${theme.font.defaultFamily};
  &:focus {
    background-color: whitesmoke;
  }
`;
