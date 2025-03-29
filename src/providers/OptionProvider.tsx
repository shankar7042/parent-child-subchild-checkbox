import { ReactNode, useCallback, useState } from "react";
import { Level, OptionContext } from "../context/options.context";
import hierarchyData from "../data.json";
import { transformedData } from "../utils";

function OptionProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState(() => transformedData(hierarchyData));

  /** Toggle expand state for parent/child */
  const toggleExpand = useCallback((id: number) => {
    setOptions((prevOptions) =>
      prevOptions.map((parent) => ({
        ...parent,
        expand: parent.parentId === id ? !parent.expand : parent.expand,
        children: parent.children.map((child) => ({
          ...child,
          expand: child.childId === id ? !child.expand : child.expand,
        })),
      }))
    );
  }, []);

  /** Generalized function to toggle checked state */
  const toggleCheck = useCallback((id: number, level: Level) => {
    setOptions((prevOptions) =>
      prevOptions.map((parent) => {
        // If it's a parent toggle
        if (level === "parent" && parent.parentId === id) {
          const newChecked = !parent.checked;
          return {
            ...parent,
            checked: newChecked,
            children: parent.children.map((child) => ({
              ...child,
              checked: newChecked,
              subChildren: child.subChildren.map((subChild) => ({
                ...subChild,
                checked: newChecked,
              })),
            })),
          };
        }

        // If it's a child toggle
        const updatedChildren = parent.children.map((child) => {
          if (level === "child" && child.childId === id) {
            const newChecked = !child.checked;
            return {
              ...child,
              checked: newChecked,
              subChildren: child.subChildren.map((subChild) => ({
                ...subChild,
                checked: newChecked,
              })),
            };
          }

          // If it's a sub-child toggle
          const updatedSubChildren = child.subChildren.map((subChild) =>
            level === "subChild" && subChild.subChildId === id
              ? { ...subChild, checked: !subChild.checked }
              : subChild
          );

          return {
            ...child,
            subChildren: updatedSubChildren,
            checked: updatedSubChildren.every((subChild) => subChild.checked),
          };
        });

        return {
          ...parent,
          children: updatedChildren,
          checked: updatedChildren.every((child) => child.checked),
        };
      })
    );
  }, []);

  return (
    <OptionContext.Provider value={{ options, toggleExpand, toggleCheck }}>
      {children}
    </OptionContext.Provider>
  );
}

export default OptionProvider;
