import { useOption } from "../../hooks/useOptions";
import Parent from "./Parent";

function OptionsComponent() {
  const { options } = useOption();
  return (
    <div className="flex flex-col">
      {options.map((option) => {
        return <Parent key={option.parentId} parent={option} />;
      })}
    </div>
  );
}

export default OptionsComponent;
