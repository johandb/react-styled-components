import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import type { Size } from "../../components/types/size";
import { Text } from "../text/styled.text";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  size?: Size;
}

export const TextArea = (props: InputProps) => {
  return (
    <StyledTextAreaContainer>
      {props.label && <Text label={props.label} size={props.size} />}
      <StyledTextArea
        value={props.value}
        disabled={props.disabled ?? false}
        placeholder={props.placeholder ?? ""}
        onChange={(e) => props.onChange(e.target.value)}
        rows={props.rows ?? 5}
        cols={props.cols ?? 40}
      />
    </StyledTextAreaContainer>
  );
};

const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5px 5px 0px;
`;

const StyledTextArea = styled.textarea<{ placeholder: string }>`
  border: 1px solid ${theme.colors.defaultBorderColor};
  border-radius: 5px;
  padding: 5px;
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
