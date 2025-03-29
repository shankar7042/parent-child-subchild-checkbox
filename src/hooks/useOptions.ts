import { useContext } from "react";
import { OptionContext } from "../context/options.context";

export function useOption() {
  const context = useContext(OptionContext);
  if (!context) {
    throw new Error("Context should be child of OptionProvider");
  }
  return context;
}
