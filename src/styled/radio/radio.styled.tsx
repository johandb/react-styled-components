import { use, useState, type ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import type { Color } from "../../components/types/color";
import type { Size } from "../../components/types/size";
import { Color2Value } from "../../components/utils/styled.utils";
import { RadioContext } from "../../hooks/radio.context";
import useRadio from "../../hooks/use-radio";

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
    props.onChange!(data);
  };

  return (
    <RadioContext.Provider value={{ value: value ?? "", onChange: handleChange, disabled: props.disabled }}>
      {props.children}
    </RadioContext.Provider>
  );
};

export const Radio = (props: RadioProps) => {
  let ctx = use(RadioContext);

  let size = props.size ?? "md";
  let radio = useRadio(size);

  let color = props.color
    ? Color2Value(props.color)
    : props.disabled
      ? theme.colors.defaultDisabledColor
      : theme.colors.defaultRadioButton;
  //let checked = ctx?.value === props.value ? true : (props.checked ?? false);

  const contextChecked = ctx ? ctx.value === props.value : undefined;
  let checked = contextChecked ?? props.checked;

  const onChange = (checked: boolean | undefined) => {
    props.onChange ? props.onChange(checked ?? false) : {};
  };

  const handleRadioClick = (value: boolean | string) => {
    console.log("handleRadio:", value);
    ctx?.onChange(props.value);
    onChange?.(checked);
  };

  //console.log("ctx :", ctx);
  //console.log("Radio styled checked :", checked);

  return (
    <StyledRadioContainer $position={props.position ?? "left"}>
      <StyledRadio
        disabled={props.disabled ?? false}
        $h={radio.h}
        $w={radio.w}
        $b={radio.b}
        checked={checked ?? false}
        color={color}
        onClick={() => (props.disabled ? {} : handleRadioClick(ctx ? props.value : (checked ?? false)))}
      />
      <StyledRadioLabel $fs={radio.fs} $p={radio.p} disabled={props.disabled ?? false}>
        {props.children}
      </StyledRadioLabel>
    </StyledRadioContainer>
  );
};

const StyledRadioContainer = styled.div<{ $position: string }>`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${(props) => (props.$position == "right" ? "row-reverse" : "row")};
`;

const StyledRadioLabel = styled.div<{ $fs: string; $p: string; disabled: boolean }>`
  font-size: ${(props) => props.$fs};
  padding: ${(props) => props.$p};
  color: ${(props) => (props.disabled ? theme.colors.defaultDisabledColor : "inherit")};
`;

const StyledRadio = styled.div<{ color: string; checked: boolean; $b: string; $h: string; $w: string; disabled: boolean }>`
  background: ${(props) => (props.disabled ? theme.colors.defaultDisabledColor : props.checked ? props.color : theme.colors.white)};
  border-radius: 50%;
  border: ${(props) => props.$b} solid white;
  height: ${(props) => props.$h};
  width: ${(props) => props.$w};
  position: relative;
  box-shadow: ${(props) => `0 0 0 1px ${props.checked ? props.color : theme.colors.defaultBorderColor}`};
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
  margin: 5px;
`;

Radio.Group = RadioGroup;
