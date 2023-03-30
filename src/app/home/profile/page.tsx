"use client";

import { SearchInput } from "@/components/SearchInput";
import { PageContainer, PageHeader } from "../styles";
import { BiUser } from "react-icons/bi";

export default function Profile() {
  function serchBooks(value: string) {}

  return (
    <PageContainer>
      <PageHeader>
        <div>
          <BiUser size={28} color="$green100" />
          <h1>Perfil</h1>
        </div>
        <SearchInput onSearch={serchBooks} />
      </PageHeader>
    </PageContainer>
  );
}
