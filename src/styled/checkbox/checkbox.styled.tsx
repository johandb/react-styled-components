import { use, useState } from "react";
import styled from "styled-components";
import { CheckboxContext } from "../hooks/checkbox.context";
import useCheckbox from "../hooks/use-checkbox";
import { theme } from "../themes/themes";
import { type Color } from "../types/color";
import { type Size } from "../types/size";
import { themeColors } from "../utils/styled.utils";

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
  color: string;
  height: string;
  width: string;
  $margin: string;
  disabled: boolean;
}>`
  opacity: ${(props) => (props.checked ? 1 : 0)};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-bottom: 3px solid ${(props) => (props.disabled ? theme.colors.defaultDisabledColor : props.color)};
  border-right: 3px solid ${(props) => (props.disabled ? theme.colors.defaultDisabledColor : props.color)};
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
  let size = props.size ?? "xs";

  let cb = useCheckbox(size);

  //console.log("ctx value:", ctx?.values);
  let checked = ctx?.values.includes(props.value ?? "") ?? props.checked;
  let color = themeColors[props.color as keyof typeof themeColors]?.value ?? props.color ?? theme.colors.defaultCheckmark;

  const onChange = (value: boolean) => {
    props.onChange?.(value);
  };

  const handleCheckboxClick = (value: string) => {
    //console.log("handleCheckboxClick:", value);
    props.value ? ctx?.onChange(value) : {};
    onChange?.(!checked);
  };

  return (
    <StyledCheckboxContainer disabled={props.disabled ?? false}>
      <div>
        <svg width="42px" height="42px" viewBox="-2.1 -2.1 25.20 25.20" xmlns="http://www.w3.org/2000/svg">
          <g id="checkbox">
            <g fill="none" stroke="#8a8989" strokeLinecap="round" strokeLinejoin="round">
              <path
                d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
                strokeWidth="0.25"
              />
              {checked && <path d="m2.5 7.7 4 4 5-8" stroke={color} strokeWidth="2.0" />}
            </g>
          </g>
        </svg>
      </div>
      <StyledCheckboxLabel disabled={props.disabled ?? false} fontSize={cb.fs}>
        {props.label}
      </StyledCheckboxLabel>
    </StyledCheckboxContainer>
    // <StyledCheckboxContainer disabled={props.disabled ?? false}>
    //   <StyledCheckbox width={cb.w} height={cb.h} $margin={cb.m}>
    //     <StyledCheckboxIcon
    //       onClick={() => (props.disabled ? {} : handleCheckboxClick(props.value ?? ""))}
    //       disabled={props.disabled ?? false}
    //       checked={checked ?? false}
    //       $margin={cb.m}
    //       height={cb.mh}
    //       width={cb.mw}
    //       color={color}
    //     />
    //   </StyledCheckbox>
    // </StyledCheckboxContainer>
  );
};

Checkbox.Group = CheckboxGroup;
