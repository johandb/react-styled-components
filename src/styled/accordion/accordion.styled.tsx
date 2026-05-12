import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../components/themes/themes";
import { AccordionContext, useAccordionContext } from "../../hooks/accordion.context";

interface AccordionProps {
  multiple?: boolean;
  value?: string;
  w?: number;
  m?: number;
  children: React.ReactNode;
}

export const Accordion = (props: AccordionProps) => {
  const [active, setActive] = useState(props.value ?? "");

  return (
    <AccordionContext.Provider value={{ active: active, multiple: props.multiple ?? false, setActive }}>
      <StyledAccordion $w={props.w ?? 100} $m={props.w ?? 5}>
        {props.children}
      </StyledAccordion>
    </AccordionContext.Provider>
  );
};

const StyledAccordion = styled.div<{ $w?: number; $m: number }>`
  box-sizing: border-box;
  width: ${(props) => `${props.$w}vw`};
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  margin: ${(props) => `${props.$m}px`};
  overflow: hidden;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
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
    <StyledAccordionItem>
      <StyledAccordionHeader onClick={handleClick}>
        <StyledAccordionTitle>
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

const StyledAccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2rem;
  font-family: ${theme.font.defaultFamily};
  font-weight: 400;
  padding: 5px 10px 5px 10px;
  line-height: 1.8;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f1f1f1;
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
  line-height: 1.5;
`;
