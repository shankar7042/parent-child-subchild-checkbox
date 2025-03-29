import { useOption } from "../../hooks/useOptions";
import { ISubChild } from "../../types";

type SubChildProps = {
  subChild: ISubChild;
};

function SubChild({ subChild }: SubChildProps) {
  const { toggleCheck } = useOption();

  return (
    <div className="mt-2">
      <div className="ml-8 flex items-center gap-2">
        <input
          type="checkbox"
          id={`${subChild.subChildId}-${subChild.subChildName}`}
          checked={subChild.checked}
          onChange={() => toggleCheck(subChild.subChildId, "subChild")}
        />
        <label htmlFor={`${subChild.subChildId}-${subChild.subChildName}`}>
          {subChild.subChildName}
        </label>
      </div>
    </div>
  );
}

export default SubChild;
