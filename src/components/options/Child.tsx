import { useOption } from "../../hooks/useOptions";
import { IChild } from "../../types";
import ToggleIcon from "../ToogleIcon";
import SubChild from "./SubChild";

type ChildProps = {
  child: IChild;
};

function Child({ child }: ChildProps) {
  const { toggleExpand, toggleCheck } = useOption();
  return (
    <div className="px-2 mt-2">
      <div className="flex items-center gap-2">
        <ToggleIcon
          expand={child.expand}
          onClick={() => toggleExpand(child.childId)}
        />
        <input
          type="checkbox"
          id={`${child.childId}-${child.childName}`}
          checked={child.checked}
          onChange={() => toggleCheck(child.childId, "child")}
        />
        <label htmlFor={`${child.childId}-${child.childName}`}>
          {child.childName}
        </label>
      </div>
      <div className="flex flex-col">
        {child.expand &&
          child.subChildren.map((subChild) => {
            return <SubChild key={subChild.subChildId} subChild={subChild} />;
          })}
      </div>
    </div>
  );
}

export default Child;
