import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import { Text } from "../text/styled.text";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
}

export const TextInput = (props: InputProps) => {
  return (
    <StyledTextInputContainer>
      {props.label && <Text label={props.label} />}
      <StyledTextInput
        value={props.value}
        disabled={props.disabled ?? false}
        placeholder={props.placeholder ?? ""}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </StyledTextInputContainer>
  );
};

const StyledTextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5px 5px 0px;
`;

const StyledTextInput = styled.input.attrs<{ placeholder: string }>({
  type: "text",
})`
  border: 1px solid ${theme.colors.defaultBorderColor};
  border-radius: 5px;
  padding: 5px;
  width: auto;
  &:disabled {
    color: ${theme.colors.defaultDisabledColor};
  }
  &::placeholder {
    ${(props) => props.placeholder}
  }
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 3px;
    outline: none;
    border: 1px solid ${theme.colors.green};
  }
`;
