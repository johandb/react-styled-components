import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import { type Color } from "../../components/types/color";
import { type Size } from "../../components/types/size";

interface CheckboxStyledProps {
  height: string;
  width: string;
  markHeight: string;
  markWidth: string;
  fontSize: string;
  margin: string;
}

interface CheckboxProps {
  size?: Size;
  color?: Color;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | string) => void;
}

const StyledCheckbox = styled.div<{ width: string; height: string; $margin: string }>`
  margin: ${(props) => props.$margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid ${() => theme.colors.defaultBorderColor};
  border-radius: 3px;
`;

const StyledCheckboxIcon = styled.div<{
  checked: boolean;
  color?: Color | string;
  height: string;
  width: string;
  $margin: string;
  disabled: boolean;
}>`
  opacity: ${(props) => (props.checked ? 1 : 0)};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-bottom: 3px solid
    ${(props) => (props.disabled ? theme.colors.defaultDisabledColor : props.color || theme.colors.defaultCheckmark)};
  border-right: 3px solid
    ${(props) => (props.disabled ? theme.colors.defaultDisabledColor : props.color || theme.colors.defaultCheckmark)};
  transform: rotate(35deg);
  margin: ${(props) => props.$margin};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const StyledCheckboxLabel = styled.div<{
  fontSize: string;
  disabled: boolean;
}>`
  color: ${(props) => (props.disabled ? theme.colors.defaultDisabledColor : "inherit")};
  font-size: ${(props) => props.fontSize};
`;

const StyledCheckboxContainer = styled.div<{ disabled: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;
  margin: 0px 5px 5px 0px;
`;

export const Checkbox = (props: CheckboxProps) => {
  let size = props.size ?? "md";

  let checkboxStyle: CheckboxStyledProps = {
    fontSize: size === "sm" ? "14px" : size === "md" ? "18px" : size === "lg" ? "24px" : "20px",
    height: size === "sm" ? "14px" : size === "md" ? "18px" : size === "lg" ? "26px" : "22px",
    width: size === "sm" ? "14px" : size === "md" ? "18px" : size === "lg" ? "26px" : "22px",
    markHeight: size === "sm" ? "8px" : size === "md" ? "10px" : size === "lg" ? "20px" : "16px",
    markWidth: size === "sm" ? "3px" : size === "md" ? "5px" : size === "lg" ? "11px" : "8px",
    margin:
      size === "sm" ? "0px 0px 0px 4px" : size === "md" ? "1px 0px 0px 5px" : size === "lg" ? "0px 0px 4px 6px" : "0px 0px 0px 5px",
  };

  return (
    <StyledCheckboxContainer disabled={props.disabled ?? false}>
      <StyledCheckbox width={checkboxStyle.width} height={checkboxStyle.height} $margin={checkboxStyle.margin}>
        <StyledCheckboxIcon
          onClick={() => (props.disabled ? {} : props.onChange("test"))}
          disabled={props.disabled ?? false}
          checked={props.checked}
          $margin={checkboxStyle.margin}
          height={checkboxStyle.markHeight}
          width={checkboxStyle.markWidth}
          color={props.color}
        />
      </StyledCheckbox>
      <StyledCheckboxLabel disabled={props.disabled ?? false} fontSize={checkboxStyle.fontSize}>
        {props.label}
      </StyledCheckboxLabel>
    </StyledCheckboxContainer>
  );
};
