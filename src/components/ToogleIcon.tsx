import { ChevronDown, ChevronRight } from "lucide-react";

type ToggleIconProps = {
  expand?: boolean;
  onClick: () => void;
};

function ToggleIcon({ expand, onClick }: ToggleIconProps) {
  const Icon = expand ? ChevronDown : ChevronRight;
  return (
    <span className="cursor-pointer" onClick={onClick}>
      <Icon width={15} height={15} />
    </span>
  );
}

export default ToggleIcon;
