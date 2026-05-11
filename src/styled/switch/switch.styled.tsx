import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import type { Color } from "../../components/types/color";
import { Color2Value } from "../../components/utils/styled.utils";
import { Text } from "../text/styled.text";

interface SwitchProps {
  color?: Color;
  label?: string;
  position?: "left" | "right";
  onChange?: (toggle: boolean) => void;
}

export const Switch = (props: SwitchProps) => {
  const [toggle, setToggle] = useState(false);

  let color = Color2Value(props.color ?? theme.colors.primary);

  const handleToggle = () => {
    let newToggle = !toggle;
    setToggle(newToggle);
    props.onChange?.(newToggle);
  };

  return (
    <StyledSwitchContainer onClick={() => handleToggle()} $position={props.position ?? "left"}>
      <StyledSwitch $toggle={toggle} color={color} />
      <Text label={props.label ?? ""} ml={5} mr={5} color={toggle ? "black" : theme.colors.defaultDisabledColor} />
    </StyledSwitchContainer>
  );
};

const StyledSwitchContainer = styled.div<{ $position: string }>`
  display: flex;
  flex-direction: ${(props) => (props.$position === "left" ? "row" : "row-reverse")};
  width: fit-content;
  margin: 0;
  background-color: inherit;
`;

const StyledSwitch = styled.div<{ $toggle: boolean; color: string }>`
  width: 40px;
  height: 20px;
  outline: none;
  border-radius: 15px;
  background-color: ${(props) => (props.$toggle ? props.color : theme.colors.gray)};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(props) => `${props.$toggle ? 1.0 : 0.1}rem`};
    transform: translate(0, -50%);
    box-sizing: border-box;
    width: 0.9em;
    height: 0.9em;
    margin: 0 0.2em;
    border-radius: 50%;
    /* box-shadow: 0px 0px 0px 2px ${theme.colors.primary}; */
    background: white;
  }
  &:hover {
    cursor: pointer;
  }
`;
