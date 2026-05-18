import { useState } from "react";
import styled from "styled-components";
import useSwitch from "../../hooks/use-switch";
import { Text } from "../text/styled.text";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import type { Size } from "../types/size";
import { colorValue } from "../utils/styled.utils";

interface SwitchProps {
  color?: Color;
  label?: string;
  position?: "left" | "right";
  size?: Size;
  onChange?: (toggle: boolean) => void;
}

export const Switch = (props: SwitchProps) => {
  const [toggle, setToggle] = useState(false);

  let sw = useSwitch(props.size ?? "sm");

  let color = colorValue(props.color ?? theme.colors.primary);

  const handleToggle = () => {
    let newToggle = !toggle;
    setToggle(newToggle);
    props.onChange?.(newToggle);
  };

  return (
    <StyledSwitchContainer onClick={() => handleToggle()} $position={props.position ?? "left"}>
      <StyledSwitch $w={sw.w} $h={sw.h} $cw={sw.cw} $ch={sw.ch} $left={sw.left} $toggle={toggle} color={color} />
      <Text
        label={props.label ?? ""}
        size={props.size}
        ml={5}
        mr={5}
        color={toggle ? "black" : theme.colors.defaultDisabledColor}
      />
    </StyledSwitchContainer>
  );
};

const StyledSwitchContainer = styled.div<{ $position: string }>`
  display: flex;
  flex-direction: ${(props) => (props.$position === "left" ? "row" : "row-reverse")};
  width: fit-content;
  align-items: center;
  margin: 0;
  background-color: inherit;
`;

const StyledSwitch = styled.div<{
  $w: number;
  $h: number;
  $cw: number;
  $ch: number;
  $left: number;
  $toggle: boolean;
  color: string;
}>`
  width: ${(props) => `${props.$w}px`};
  height: ${(props) => `${props.$h}px`};
  outline: none;
  border-radius: 15px;
  background-color: ${(props) => (props.$toggle ? props.color : theme.colors.gray)};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(props) => `${props.$toggle ? props.$left : 0.1}rem`};
    transform: translate(0, -50%);
    box-sizing: border-box;
    width: ${(props) => `${props.$cw}em`};
    height: ${(props) => `${props.$ch}em`};
    margin: 0 0.2em;
    border-radius: 50%;
    background: white;
  }
  &:hover {
    cursor: pointer;
  }
`;
