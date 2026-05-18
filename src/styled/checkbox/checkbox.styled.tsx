import { use, useState } from "react";
import styled from "styled-components";
import { CheckboxContext } from "../../hooks/checkbox.context";
import useCheckbox from "../../hooks/use-checkbox";
import { theme } from "../themes/themes";
import { type Color } from "../types/color";
import { type Size } from "../types/size";

interface CheckboxProps {
  size?: Size;
  color?: Color;
  label: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

interface CheckboxGroupProps {
  values: string[] | null;
  onChange?: (value: string[]) => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const [values, setValues] = useState<string[]>(props.values ?? []);

  //console.log("RadioGroup value :", value);

  const handleChange = (data: string) => {
    let newValues = [...values];
    if (newValues.includes(data)) {
      newValues = newValues.filter((item) => item != data);
    } else {
      newValues = [...newValues, data];
    }
    setValues(newValues);
    props.onChange?.(newValues);
    //console.log("handleChange CheckboxGroup :", data);
  };

  return (
    <CheckboxContext.Provider value={{ values: props.values ?? [], onChange: handleChange, disabled: props.disabled }}>
      {props.children}
    </CheckboxContext.Provider>
  );
};

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
  let ctx = use(CheckboxContext);
  let size = props.size ?? "md";

  let cb = useCheckbox(size);

  console.log("ctx value:", ctx?.values);
  let checked = ctx?.values.includes(props.value ?? "") ?? props.checked;

  const onChange = (value: boolean) => {
    props.onChange?.(value);
  };

  const handleCheckboxClick = (value: string) => {
    console.log("handleCheckboxClick:", value);
    props.value ? ctx?.onChange(props.value) : {};
    onChange?.(!checked);
  };

  return (
    <StyledCheckboxContainer disabled={props.disabled ?? false}>
      <StyledCheckbox width={cb.w} height={cb.h} $margin={cb.m}>
        <StyledCheckboxIcon
          onClick={() => (props.disabled ? {} : handleCheckboxClick(props.value ?? ""))}
          disabled={props.disabled ?? false}
          checked={checked ?? false}
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

Checkbox.Group = CheckboxGroup;
