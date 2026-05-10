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
  size?: Size;
  leftIcon?: React.ReactNode;
}

type StyledInputProps = InputProps & { type?: string };

const Input = (props: StyledInputProps) => {
  let size = props.size ?? "sm";
  let pr = size === "sm" ? "25" : size === "md" ? "30" : size === "xl" ? "35" : size === "lg" ? "40" : size;
  let pt = size === "sm" ? "5" : size === "md" ? "7" : size === "xl" ? "7" : size === "lg" ? "8" : size;
  let fs = size === "sm" ? 0.9 : size === "md" ? 1.2 : size === "xl" ? 1.5 : size === "lg" ? 1.8 : 0.9;

  return (
    <StyledTextInputContainer>
      <div>
        {props.label && <Text label={props.label} size={props.size} />}
        {props.required && <Text label="*" color="red" size={props.size} />}
      </div>
      <StyledInputWrapper>
        <StyledInputIcon $p={props.leftIcon ? pt : "5"}>{props.leftIcon}</StyledInputIcon>
        <StyledInput
          $type={props.type}
          value={props.value}
          $pr={props.leftIcon ? pr : "5"}
          $fs={fs}
          disabled={props.disabled ?? false}
          placeholder={props.placeholder ?? ""}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </StyledInputWrapper>
    </StyledTextInputContainer>
  );
};

const StyledTextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5px 5px 0px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInputIcon = styled.span<{ $p: string }>`
  position: absolute;
  padding: ${(props) => `${props.$p}px`};
  text-align: left;
`;

const StyledInput = styled.input.attrs<{ $type: string; placeholder: string; $pr: string; $fs: number }>((props) => ({
  type: props.$type || "text",
}))`
  border: 1px solid ${theme.colors.defaultBorderColor};
  border-radius: 5px;
  padding: ${(props) => `5px 5px 5px ${props.$pr}px`};
  width: auto;
  font-size: ${(props) => `${props.$fs}rem`};
  font-weight: normal;
  font-family: inherit;
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

/*
const StyledTextInput = styled.input.attrs<{ placeholder: string; $pr: string; $fs: number }>({
  type: "text",
})`
  border: 1px solid ${theme.colors.defaultBorderColor};
  border-radius: 5px;
  padding: ${(props) => `5px 5px 5px ${props.$pr}px`};
  width: auto;
  font-size: ${(props) => `${props.$fs}rem`};
  font-weight: normal;
  font-family: inherit;
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
*/

export const TextInput = (props: InputProps) => {
  return <Input {...props} />;
};

export const PasswordInput = (props: InputProps) => {
  let prop: StyledInputProps = { ...props, type: "password" };
  return <Input {...prop} />;
};

export const NumberInput = (props: InputProps) => {
  let prop: StyledInputProps = { ...props, type: "number" };
  return <Input {...prop} />;
};
