import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { AccordionContext, useAccordionContext } from "../../hooks/accordion.context";
import { theme } from "../themes/themes";
import type { Color } from "../types/color";
import { colorValue } from "../utils/styled.utils";

interface AccordionProps {
  multiple?: boolean;
  value?: string;
  w?: number;
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  bg?: Color;
  fg?: Color;
  children: React.ReactNode;
}

export const Accordion = (props: AccordionProps) => {
  const [active, setActive] = useState(props.value ?? "");

  let margin = "0px";
  if (props.m) {
    margin = `${props.m}px`;
  } else {
    margin = props.mt ? `${props.mt}px` : margin;
    margin = `${margin} ${props.mr ? `${props.mr}px` : `0px`}`;
    margin = `${margin} ${props.mb ? `${props.mb}px` : `0px`}`;
    margin = `${margin} ${props.ml ? `${props.ml}px` : `0px`}`;
  }

  return (
    <AccordionContext.Provider
      value={{
        active: active,
        multiple: props.multiple ?? false,
        setActive,
        bg: props.bg ? colorValue(props.bg) : theme.colors.primary,
        fg: props.fg ? colorValue(props.fg) : theme.colors.white,
      }}
    >
      <StyledAccordion
        $w={props.w ? `${props.w}px` : "100vw"}
        $m={margin}
        $bg={props.bg ? colorValue(props.bg) : theme.colors.primary}
        $c={props.fg ? colorValue(props.fg) : theme.colors.white}
      >
        {props.children}
      </StyledAccordion>
    </AccordionContext.Provider>
  );
};

const StyledAccordion = styled.div<{ $w?: string; $m: string; $bg: string; $c: string }>`
  box-sizing: border-box;
  width: ${(props) => props.$w};
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  margin: ${(props) => props.$m};
  overflow: hidden;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.$bg};
  color: ${(props) => props.$c};
`;

const StyledAccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

interface AccordionHeaderProps {
  title: React.ReactNode;
  value: string;
  children: React.ReactNode;
}

export const AccordionHeader = (props: AccordionHeaderProps) => {
  const [open, setOpen] = useState(false);

  const { active, multiple, setActive, fg, bg } = useAccordionContext();

  useLayoutEffect(() => {
    if (!multiple) {
      setOpen(active === props.value);
    }
  }, [active]);

  const handleClick = () => {
    setActive(props.value);
    setOpen((prev) => !prev);
  };

  return (
    <StyledAccordionItem>
      <StyledAccordionHeader onClick={handleClick}>
        <StyledAccordionTitle $bg={bg} $fg={fg}>
          <span>{props.title}</span>
          <span>{open ? "-" : "+"}</span>
        </StyledAccordionTitle>
        {open && props.children}
      </StyledAccordionHeader>
    </StyledAccordionItem>
  );
};

const StyledAccordionHeader = styled.div`
  padding: 0px;
  font-size: 18px;
  cursor: pointer;
`;

const StyledAccordionTitle = styled.div<{ $bg: string; $fg: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2rem;
  font-family: ${theme.font.defaultFamily};
  font-weight: 400;
  padding: 5px 10px 5px 10px;
  line-height: 1.6;
  transition: background-color 0.3s ease;
  &:hover {
    /* background-color: #f1f1f1; */
    background-color: ${(props) => props.$fg};
    color: ${(props) => props.$bg};
  }
`;

interface AccordionPanelProps {
  children: React.ReactNode;
}

export const AccordionPanel = (props: AccordionPanelProps) => {
  return <StyledAccordionPanel>{props.children}</StyledAccordionPanel>;
};

const StyledAccordionPanel = styled.div`
  padding: 10px;
  display: block;
  font-size: 18px;
  line-height: 1.4;
  color: black;
  background-color: white;
`;

Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;
