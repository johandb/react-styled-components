import { useState } from "react";
import styled from "styled-components";
import { Text } from "../text/styled.text";

interface SwitchProps {
  disabled?: boolean;
  position?: "left" | "right";
}

export const Switch = (props: SwitchProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledSwitchContainer onClick={() => setToggle(!toggle)}>
      <StyledSwitch toggle={toggle} />
      <Text label="Click me" ml={2} mr={2} />
    </StyledSwitchContainer>
  );
};

const StyledSwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 0;
  background-color: inherit;
`;

const StyledSwitch = styled.div<{ toggle: boolean }>`
  width: 40px;
  height: 20px;
  outline: none;
  border-radius: 15px;
  ${(props) => (props.toggle ? "border: 1px solid black" : "border: 1px solid gray;")};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(props) => `${props.toggle ? 1.0 : 0.1}rem`};
    transform: translate(0, -50%);
    box-sizing: border-box;
    width: 0.9em;
    height: 0.9em;
    margin: 0 0.2em;
    ${(props) => (props.toggle ? "border 1pxsolid; opacity: 1.0;" : "border: none; opacity: 0.4;")}
    /* border: 1px solid; */
    border-radius: 50%;
    background: ${(props) => (props.toggle ? "black" : "gray")};
  }
  &:hover {
    cursor: pointer;
  }
`;
