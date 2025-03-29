import { IData } from "../types";

export function transformedData(data: IData[]) {
  return data.map((parent) => ({
    ...parent,
    expand: false,
    checked: false,
    children: parent.children.map((child) => ({
      ...child,
      expand: false,
      checked: false,
      subChildren: child.subChildren.map((subChild) => ({
        ...subChild,
        checked: false,
      })),
    })),
  }));
}
