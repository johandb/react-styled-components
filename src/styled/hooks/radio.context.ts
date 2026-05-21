import { createContext, useContext } from "react";

export interface RadioGroupType {
  value: string | null;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const RadioContext = createContext<RadioGroupType | null>(null);

export const useRadioContext = () => {
  const container = useContext(RadioContext);
  if (container === null || container === undefined) {
    throw new Error("useRadioContext must be used with a valid RadioGroupType");
  }
  return container;
};
