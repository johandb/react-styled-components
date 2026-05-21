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

const StyledCheckbox = styled.div<{ disabled: boolean }>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const StyledCheckboxLabel = styled.div<{
  $fs: string;
  disabled: boolean;
}>`
  color: ${(props) => (props.disabled ? theme.colors.defaultDisabledColor : "inherit")};
  font-size: ${(props) => props.$fs};
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 0px;
`;

export const Checkbox = (props: CheckboxProps) => {
  let ctx = use(CheckboxContext);
  let size = props.size ?? "sm";

  let cb = useCheckbox(size);

  //console.log("cb:", cb);
  let disabled = props.disabled ?? false;
  let checked = ctx?.values.includes(props.value ?? "") ?? props.checked;
  let color = themeColors[props.color as keyof typeof themeColors]?.value ?? props.color ?? theme.colors.defaultCheckmark;
  color = disabled ? theme.colors.defaultDisabledColor : color;
  let index = ["xs", "sm", "md", "lg", "xl"].indexOf(size);
  let w = index !== -1 ? 20 + index * 7 : size;

  //console.log("fs :", cb.fs);
  const onChange = (value: boolean) => {
    props.onChange?.(value);
  };

  const handleCheckboxClick = (value: string) => {
    //console.log("handleCheckboxClick:", value);
    props.value ? ctx?.onChange(value) : {};
    onChange?.(!checked);
  };

  return (
    <StyledCheckboxContainer>
      <StyledCheckbox disabled={disabled} onClick={() => (disabled ? {} : handleCheckboxClick(props.value ?? ""))}>
        <svg width={`${w}px`} height={`${w}px`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <g id="checkbox">
            <g fill="#ffffff" stroke="#8a8989" strokeLinecap="round" strokeLinejoin="round">
              <path
                d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
                strokeWidth="0.25"
                transform="translate(3 4)"
              />
              {checked && <path d="m5.7 11.7 4 4 5-8" stroke={color} strokeWidth="2.0" />}
            </g>
          </g>
        </svg>
      </StyledCheckbox>
      <StyledCheckboxLabel disabled={disabled} $fs={cb.fs}>
        {props.label}
      </StyledCheckboxLabel>
    </StyledCheckboxContainer>
  );
};

Checkbox.Group = CheckboxGroup;
