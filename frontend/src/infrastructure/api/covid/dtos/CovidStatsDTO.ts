export interface CovidStatsDTO {
  links: Links;
  meta: Meta;
  data: Stats[];
}

export interface Links {
  self: string;
}

export interface Meta {
  build_time: string;
  license: string;
  version: string;
  field_definitions: FieldDefinition[];
}

export interface FieldDefinition {
  name: string;
  field?: string;
  deprecated: boolean;
  prior_names: string[];
}

export interface Stats {
  date: string;
  states: number;
  cases: Cases;
  testing: Testing;
  outcomes: Outcomes;
}

export interface Cases {
  total: Total;
}

export interface Total {
  value?: number;
  calculated: Calculated;
}

export interface Calculated {
  population_percent?: number;
  change_from_prior_day?: number;
  seven_day_change_percent?: number;
}

export interface Testing {
  total: Total2;
}

export interface Total2 {
  value: number;
  calculated: Calculated2;
}

export interface Calculated2 {
  population_percent: number;
  change_from_prior_day?: number;
  seven_day_change_percent?: number;
}

export interface Outcomes {
  hospitalized: Hospitalized;
  death: Death;
}

export interface Hospitalized {
  currently: Currently;
  in_icu: InIcu;
  on_ventilator: OnVentilator;
}

export interface Currently {
  value?: number;
  calculated: Calculated3;
}

export interface Calculated3 {
  population_percent?: number;
  change_from_prior_day?: number;
  seven_day_change_percent?: number;
  seven_day_average?: number;
}

export interface InIcu {
  currently: Currently2;
}

export interface Currently2 {
  value?: number;
  calculated: Calculated4;
}

export interface Calculated4 {
  population_percent?: number;
  change_from_prior_day?: number;
  seven_day_change_percent?: number;
  seven_day_average?: number;
}

export interface OnVentilator {
  currently: Currently3;
}

export interface Currently3 {
  value?: number;
  calculated: Calculated5;
}

export interface Calculated5 {
  population_percent?: number;
  change_from_prior_day?: number;
  seven_day_change_percent?: number;
  seven_day_average?: number;
}

export interface Death {
  total: Total3;
}

export interface Total3 {
  value?: number;
  calculated: Calculated6;
}

export interface Calculated6 {
  population_percent?: number;
  change_from_prior_day?: number;
  seven_day_change_percent?: number;
  seven_day_average?: number;
}
