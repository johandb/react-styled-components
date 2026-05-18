import styled from "styled-components";
import { Stack } from "../stack/stack.styled";
import { Text } from "../text/styled.text";
import { theme } from "../themes/themes";
import type { Size } from "../types/size";

interface SelectProps {
  label?: string;
  value?: string;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  size?: Size;

  data: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const Select = (props: SelectProps) => {
  return (
    <Stack mt={props.mt} mr={props.mr} mb={props.mb} ml={props.ml}>
      {props.label && <Text size={props.size} label={props.label} />}
      <StyledSelect onChange={(e) => props.onChange(e.target.value)} value={props.value}>
        {props.data.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </Stack>
  );
};

const StyledSelect = styled.select`
  width: fit-content;
  outline: none;
  border-radius: 5px;
  border: 1px lightgray solid;
  padding: 5px;
  font-size: 14px;
  font-family: ${theme.font.defaultFamily};
  &:focus {
    background-color: whitesmoke;
  }
`;
