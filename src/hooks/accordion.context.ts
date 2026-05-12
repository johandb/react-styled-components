import { createContext, useContext } from "react";

export interface AccordionContextType {
  active: string;
  multiple: boolean;
  setActive: (item: string) => void;
}

export const AccordionContext = createContext<AccordionContextType | null>(null);

export const useAccordionContext = () => {
  const accordion = useContext(AccordionContext);
  if (accordion === null || accordion === undefined) {
    throw new Error("useAccordionContext must be used with a valid value");
  }
  return accordion;
};
