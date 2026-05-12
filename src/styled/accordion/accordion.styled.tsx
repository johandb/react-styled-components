import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import { AccordionContext, useAccordionContext } from "../../hooks/accordion.context";

interface AccordionProps {
  multiple?: boolean;
  value?: string;
  w?: number;
  m?: number;
  p?: number;
  children: React.ReactNode;
}

export const Accordion = (props: AccordionProps) => {
  const [active, setActive] = useState(props.value ?? "");

  return (
    <AccordionContext.Provider value={{ active: active, multiple: props.multiple ?? false, setActive }}>
      <StyledAccordion width={props.w ?? 100} margin={props.m ?? 5}>
        {props.children}
      </StyledAccordion>
    </AccordionContext.Provider>
  );
};

const StyledAccordion = styled.div<{ width: number; margin: number }>`
  display: block;
  box-sizing: border-box;
  width: ${(props) => `${props.width}vw`};
  margin: ${(props) => `${props.margin}px`};
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;
`;

interface AccordionHeaderProps {
  title: React.ReactNode;
  value: string;
  children: React.ReactNode;
}

export const AccordionHeader = (props: AccordionHeaderProps) => {
  const [open, setOpen] = useState(false);

  const { active, multiple, setActive } = useAccordionContext();

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
    <StyledAccordionHeader onClick={handleClick}>
      <StyledAccordionTitle>
        <div>{props.title}</div>
        <div>{open ? "-" : "+"}</div>
      </StyledAccordionTitle>
      {open && props.children}
    </StyledAccordionHeader>
  );
};

const StyledAccordionHeader = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`;

const StyledAccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2rem;
  font-family: ${theme.font.defaultFamily};
  font-weight: 400;
  padding: 5px 10px 5px 10px;
  &:hover {
    cursor: pointer;
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
  font-family: ${theme.font.defaultFamily};
  font-size: 1rem;
`;
