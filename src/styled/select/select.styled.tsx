import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import { Stack } from "../stack/stack.styled";
import { Text } from "../text/styled.text";

interface SelectProps {
  label?: string;
  value?: string;
  placeholder?: string;
  data: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export const Select = (props: SelectProps) => {
  return (
    <Stack>
      {props.label && <Text label={props.label} />}
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
