import { createContext, useContext } from "react";

export interface CheckboxGroupType {
  values: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const CheckboxContext = createContext<CheckboxGroupType | null>(null);

export const useCheckboxContext = () => {
  const container = useContext(CheckboxContext);
  if (container === null || container === undefined) {
    throw new Error("useCheckboxContext must be used with a valid CheckboxGroupType");
  }
  return container;
};
