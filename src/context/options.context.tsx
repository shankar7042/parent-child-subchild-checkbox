import { createContext } from "react";
import { IData } from "../types";

export type Level = "parent" | "child" | "subChild";

interface OptionContextInterface {
  options: IData[];
  toggleExpand: (id: number) => void;
  toggleCheck: (id: number, level: Level) => void;
}

export const OptionContext = createContext<OptionContextInterface | null>(null);
