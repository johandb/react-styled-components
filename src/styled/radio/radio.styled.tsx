import { use, useState, type ReactNode } from "react";
import styled from "styled-components";
import { RadioContext } from "../hooks/radio.context";
import useRadio from "../hooks/use-radio";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import type { Size } from "../types/size";
import { themeColors } from "../utils/styled.utils";

interface RadioProps {
  color?: Color;
  onChange?: (value: boolean | string) => void;
  checked?: boolean;
  size?: Size;
  disabled?: boolean;
  children: ReactNode;
  value: string;
  position?: "left" | "right";
}

interface RadioGroupProps {
  value: string | null;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const RadioGroup = (props: RadioGroupProps) => {
  const [value, setValue] = useState<string>(props.value ?? "");

  //console.log("RadioGroup value :", value);

  const handleChange = (data: string) => {
    //console.log("handleChange RadioGroup :", data);
    setValue(data);
    props.onChange?.(data);
  };

  return (
    <RadioContext.Provider value={{ value: value ?? "", onChange: handleChange, disabled: props.disabled }}>
      {props.children}
    </RadioContext.Provider>
  );
};

export const Radio = (props: RadioProps) => {
  let ctx = use(RadioContext);

  let size = props.size ?? "sm";
  let radio = useRadio(size);

  let disabled = props.disabled ?? false;
  const contextChecked = ctx?.value === props.value;
  let checked = ctx ? contextChecked : (props.checked ?? false);

  let index = ["xs", "sm", "md", "lg", "xl"].indexOf(size);
  let w = index !== -1 ? 18 + index * 6 : size;

  let color = themeColors[props.color as keyof typeof themeColors]?.value ?? theme.colors.defaultRadioButton;
  color = disabled ? theme.colors.defaultDisabledColor : color;

  let bg = disabled ? theme.colors.defaultDisabledColor : color;
  bg = checked ? color : theme.colors.white;

  const onChange = (checked: boolean | undefined) => {
    props.onChange ? props.onChange(checked ?? false) : {};
  };

  const handleRadioClick = () => {
    //console.log("handleRadio:", value);
    ctx?.onChange(props.value);
    onChange?.(checked);
  };

  //console.log("ctx :", ctx);
  //console.log("Radio styled checked :", checked);

  return (
    <StyledRadioContainer $position={props.position ?? "left"}>
      <StyledRadio disabled={disabled} onClick={() => (disabled ? {} : handleRadioClick())}>
        <svg
          width={`${w}px`}
          height={`${w}px`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke={color}
          strokeWidth="0.05"
        >
          <g id="radio">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              fill={color}
              transform="translate(-1 -1)"
            />
            {checked && <circle cx="11" cy="11" r="4.0" fill={color}></circle>}
          </g>
        </svg>
      </StyledRadio>
      <StyledRadioLabel $fs={radio.fs} disabled={disabled}>
        {props.children}
      </StyledRadioLabel>
    </StyledRadioContainer>
  );
};

const StyledRadioContainer = styled.div<{ $position: string }>`
  display: flex;
  gap: 3px;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.$position == "right" ? "row-reverse" : "row")};
`;

const StyledRadioLabel = styled.div<{ $fs: string; disabled: boolean }>`
  font-size: ${(props) => props.$fs};
  color: ${(props) => (props.disabled ? theme.colors.defaultDisabledColor : "inherit")};
`;

const StyledRadio = styled.div<{ disabled: boolean }>`
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

Radio.Group = RadioGroup;
