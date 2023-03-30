import { useState } from "react";
import { Input, TextInputContainer } from "./styles";
import { HiMagnifyingGlass } from "react-icons/hi2";

interface SearchInputProps {
  onSearch: (value: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const [value, setValue] = useState("");

  function handleKeyUp() {
    setTimeout(() => {
      onSearch(value);
    }, 1000);
  }

  return (
    <TextInputContainer>
      <Input
        type="text"
        placeholder="Buscar livro ou autor"
        value={value}
        onKeyUp={handleKeyUp}
        onChange={(event) => setValue(event.target.value)}
      />
      <HiMagnifyingGlass size={24} onClick={() => onSearch(value)} />
    </TextInputContainer>
  );
}
