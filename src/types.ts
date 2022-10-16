import {CSSProperties} from "react";

export interface Extendable<T = any> {
  className?: string;
  style?: CSSProperties;
  children?: T;
}