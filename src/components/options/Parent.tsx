import { useOption } from "../../hooks/useOptions";
import { IData } from "../../types";
import ToggleIcon from "../ToogleIcon";
import Child from "./Child";

type ParentProps = {
  parent: IData;
};

function Parent({ parent }: ParentProps) {
  const { toggleExpand, toggleCheck } = useOption();

  return (
    <div key={parent.parentId} className="px-2 mt-2">
      <div className="flex items-center gap-2">
        <ToggleIcon
          expand={parent.expand}
          onClick={() => toggleExpand(parent.parentId)}
        />
        <input
          type="checkbox"
          id={`${parent.parentId}-${parent.parentName}`}
          checked={parent.checked}
          onChange={() => toggleCheck(parent.parentId, "parent")}
        />
        <label htmlFor={`${parent.parentId}-${parent.parentName}`}>
          {parent.parentName}
        </label>
      </div>
      <div className="flex flex-col">
        {parent.expand &&
          parent.children.map((child) => {
            return <Child key={child.childId} child={child} />;
          })}
      </div>
    </div>
  );
}

export default Parent;
