import type { ReactNode } from "react";

export type Section = {
  heading: string;
  content: ReactNode | string;
  code?: string;
  method?: string;
  endpoint?: string;
  requestBody?: string;
  response?: string;
  headers?: string;
  flowchart?: string;
  [key: string]: any;
};

export type Page = {
  title: string;
  description?: string;
  sections: Section[];
};

export type ContentRecord = Record<string, Page>;
