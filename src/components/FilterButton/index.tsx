import { ButtonFilter } from "./styles";

interface ButtonFilterProps {
  category: string;
  filter: string | undefined;
  onClick: (value: string) => void;
}

export function FilterButton({
  filter,
  category = "todos",
  onClick,
}: ButtonFilterProps) {
  const active = category === filter;

  return (
    <ButtonFilter onClick={() => onClick(category)} active={active}>
      {category}
    </ButtonFilter>
  );
}
