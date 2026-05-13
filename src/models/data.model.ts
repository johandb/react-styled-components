export interface Menu {
  id: number;
  title: string;
  route: string;
  name: string;
  class: string;
  position: number;
  items: MenuItem[];
  active: boolean;
  parameters: string;
}

export interface MenuItem {
  id: number;
  menu_id: number;
  route: string;
  title: string;
  parameters: string;
  active: boolean;
  position: number;
  role: number;
}

export interface Kerkdienst {
  id: string;
  datum: string;
  kerk: string;
  voorganger: string;
  soort_dienst: string;
  beamer: string;
  kinderneven: string;
  kyrie: string;
  lector: string;
  organist: string;
  kleur: string;
  collecte1: string;
  collecte2: string;
  collecte3: string;
  collecte4: string;
  opmerking: string;
}

export interface DienstOrde {
  mp3: string | null;
  orde: Orde[] | null;
}

export interface Orde {
  header: string;
  images?: OrdeImage[];
  inhoud?: string;
  tekst?: string;
}

export interface OrdeImage {
  data: string;
  deel: number;
}

export interface NewsItem {
  id: number;
  melding: string;
}

export interface VariaMessage {
  info: string;
  header: string;
}

export interface Weektext {
  tekst: string;
  weergave: string;
}

export interface Info {
  id: number;
  header?: string;
  info?: string;
}

export interface ActueelItem {
  id: number;
  datum: string;
  onderdeel: string;
  header: string;
  regels: ActueelRegel[];
}
export interface ActueelRegel {
  id: number;
  datum: string;
  header: string;
  omschrijving: string;
  onderdeel: string;
}

export interface AgendaItem {
  id: number;
  maand: string;
  regels: AgendaRegel[];
}

export interface AgendaRegel {
  id: number;
  maand: string;
  dag: number;
  dagnaam: string;
  datum: string;
  omschrijving: string;
  tijd: string;
}

export interface Contents {
  id: number;
  tag: string;
  header: string;
  inleiding: string;
  position: number;
  active: number;
  content_id: number;
  bloknummer: number;
  inhoud: string;
}

export interface Categorie {
  id: number;
  omschrijving: string;
  active: number;
  position: number;
  waarde: number;
  label: string;
  selected: boolean;
}

export interface TaakRooster {
  id: number;
  naam: string;
  email: string;
  datum: string;
  rooster_id: number;
  kleur: number;
  categorie_id: number;
  omschrijving: string;
  authorisaties: number;
  waarde: number;
}

export interface RoosterData {
  datum: string;
  kleur: number;
  rooster_id: number;
  index: number;
  cls: string;
  categorie: number;
  authorisaties: number;
}

export interface Rooster {
  id: number;
  naam: string;
  email: string;
  categorie_id: number;
  omschrijving: string;
  data: RoosterData[];
  header: boolean;
  waarde: number;
}

export interface BaseField {
  id?: number;
  name: string;
  type: FieldType;
  label?: string;
  input: FormFieldType;
}

export type FieldType = 'string' | 'number' | 'date' | 'boolean' | 'group';
export type FormFieldType =
  | 'text'
  | 'number'
  | 'password'
  | 'date'
  | 'datetime'
  | 'time'
  | 'email'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'none';

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
