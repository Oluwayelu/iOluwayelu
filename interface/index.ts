import type { ChangeEventHandler } from "react";
import type { IconType } from "react-icons";

export type Category =
  | "all"
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "next"
  | "node"
  | "mongodb"
  | "firebase"
  | "tailwindcss"
  | "styled-component";

export interface IProject {
  id: number;
  name: string;
  image: string;
  link?: string;
  code?: string;
  description: string;
  category: Category[];
  tags: string[];
}

export interface ITechnologies {
  image?: string;
  title: string;
  description: string;
}

export interface IDetails {
  image?: string;
  organization: string;
  position: string;
  location?: string;
  description: string;
  startDate?: string;
  endDate?: string;
}

export interface ISkill {
  title: string;
  icon?: string;
  perct: number;
}

export interface Target extends Element {
  name: string;
  value: string;
}

export interface IForm {
  state?: "loading" | "error" | "success";
  message?: string;
}

// export interface IChangeEventHandler extends ChangeEventHandler<Target>
