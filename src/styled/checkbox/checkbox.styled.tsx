import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import { type Color } from "../../components/types/color";
import { type Size } from "../../components/types/size";
import useCheckbox from "../../hooks/use-checkbox";

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
  gap: 7px;
  align-items: center;
  margin: 0px 5px 5px 0px;
`;

export const Checkbox = (props: CheckboxProps) => {
  let size = props.size ?? "md";

  let cb = useCheckbox(size);

  return (
    <StyledCheckboxContainer disabled={props.disabled ?? false}>
      <StyledCheckbox width={cb.w} height={cb.h} $margin={cb.m}>
        <StyledCheckboxIcon
          onClick={() => (props.disabled ? {} : props.onChange("test"))}
          disabled={props.disabled ?? false}
          checked={props.checked}
          $margin={cb.m}
          height={cb.mh}
          width={cb.mw}
          color={props.color}
        />
      </StyledCheckbox>
      <StyledCheckboxLabel disabled={props.disabled ?? false} fontSize={cb.fs}>
        {props.label}
      </StyledCheckboxLabel>
    </StyledCheckboxContainer>
  );
};
