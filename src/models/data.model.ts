export interface BaseField {
  id?: number;
  name: string;
  type: FieldType;
  label?: string;
  input: FormFieldType;
}

export type FieldType = "string" | "number" | "date" | "boolean" | "group";
export type FormFieldType =
  | "text"
  | "number"
  | "password"
  | "date"
  | "datetime"
  | "time"
  | "email"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "none";

export interface FormField extends BaseField {
  placeholder?: string;
  valid: boolean;
  disabled?: boolean;
  touched?: boolean;
  options?: SelectOptions;
  group?: FormField[];
  validations?: ValidationCheck;
  callback?: string;
  hide?: boolean;
  minrow?: number;
  maxrow?: number;
  grid?: GridOptions;
  checked?: boolean;
}

export interface GridOptions {
  visible: boolean;
  width?: number;
  filter?: boolean;
  sortable?: boolean;
}

export interface FormConfig {
  title: string;
  languagePath?: string;
  script?: string;
  parameters?: {
    load: string;
    save: string;
    delete: string;
    update: string;
  };
  fields: FormField[];
}

export interface SelectOptions {
  serviceName?: string;
  optionValues?: SelectOption[];
}
export interface SelectOption {
  value: string;
  label: string;
}

export interface ValidationCheck {
  minLength?: number;
  maxLength?: number;
  /*
	  Not all browser support the RegularExpression below. For more
	  information please visit : https://caniuse.com/js-regexp-lookbehind
	 */
  pattern?: RegExp;
  required?: boolean;
  errorMessage?: string;
}

export interface ErrorMessage {
  language: string;
  errorMessage: string;
}

export interface ButtonAction {
  name: string;
  label: string;
  color: string;
  action: (value?: any) => void;
  disabled?: boolean;
  title?: string;
  icon?: any;
  onlyActiveOnSelection?: boolean;
}

export enum RecordStatus {
  UNKNOWN,
  FETCH,
  DELETE,
  CREATE,
  UPDATE,
  VIEW,
  CANCEL,
  EXECUTE,
}
