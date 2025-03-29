export interface IData {
  parentId: number;
  parentName: string;
  children: IChild[];
  expand?: boolean;
  checked?: boolean;
}

export interface IChild {
  childId: number;
  childName: string;
  subChildren: ISubChild[];
  expand?: boolean;
  checked?: boolean;
}

export interface ISubChild {
  subChildId: number;
  subChildName: string;
  checked?: boolean;
}
