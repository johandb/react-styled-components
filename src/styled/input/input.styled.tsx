import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import type { Size } from "../../components/types/size";
import useInput from "../../hooks/use-input";
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

  let input = useInput(size);

  return (
    <StyledTextInputContainer>
      <StyledInputWrapper>
        {props.label && <Text label={props.label} size={props.size} />}
        {props.required && <Text label="*" color="red" size={props.size} />}
      </StyledInputWrapper>
      <StyledInputWrapper>
        <StyledInputIcon $p={props.leftIcon ? input.pt : 5}>{props.leftIcon}</StyledInputIcon>
        <StyledInput
          $type={props.type}
          value={props.value}
          $pr={props.leftIcon ? input.pr : 5}
          $fs={input.fs}
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

const StyledInputIcon = styled.span<{ $p: number }>`
  position: absolute;
  padding: ${(props) => `${props.$p}px`};
  text-align: left;
`;

const StyledInput = styled.input.attrs<{ $type: string; placeholder: string; $pr: number; $fs: number }>((props) => ({
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
