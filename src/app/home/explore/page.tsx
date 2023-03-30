"use client";

import { useEffect, useRef, useState } from "react";
import { GiBinoculars } from "react-icons/gi";
import { PageContainer, PageHeader } from "../styles";
import { SearchInput } from "@/components/SearchInput";
import { ExplorerContent, FilterContent, FilteredBooks } from "./styles";
import { FilterButton } from "@/components/FilterButton";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/fetch";
import FilterCard from "../components/FilterCard";
import { IFilteredBooks } from "@/pages/api/books/filter-category";
import { Category } from "@prisma/client";
import { Book } from "../book";

export default function Explore() {
  const [filter, setFilter] = useState<string | undefined>("Todos");
  const [books, setBooks] = useState<IFilteredBooks[] | undefined>();
  const [openedBook, setOpenedBook] = useState<IFilteredBooks | undefined>();

  const { data: booksCategories } = useQuery(
    ["books-list-categories"],
    async () => {
      const response = await fetch(`${api}/books/categories`, {
        cache: "no-store",
      });
      const data = await response.json();
      return data as Category[];
    },
    {},
  );

  const { data } = useQuery(
    ["books-filter-category", filter],
    async () => {
      console.log("Fetching books...");
      const response = await fetch(
        `${api}/books/filter-category?filter=${filter}`,
        {
          cache: "no-store",
        },
      );
      const data = await response.json();
      setBooks(data);
      return data as IFilteredBooks[];
    },
    {},
  );

  function handleFilterChange(category: string) {
    setFilter(category);
  }

  function serchBooks(value: string) {
    if (value === "") return setBooks(data);

    const result = books?.filter(({ name }) =>
      name.toLocaleLowerCase().includes(value),
    );

    setBooks(result);
  }

  return (
    <>
      {openedBook && (
        <Book close={() => setOpenedBook(undefined)} book={openedBook} />
      )}
      <PageContainer>
        <PageHeader>
          <div>
            <GiBinoculars size={26} color="$green100" className="begin-icon" />
            <h1>Explorar</h1>
          </div>
          <SearchInput onSearch={serchBooks} />
        </PageHeader>
        <ExplorerContent>
          <FilterContent>
            <FilterButton
              key={"todos"}
              filter={filter}
              category={"Todos"}
              onClick={(value) => handleFilterChange(value)}
            />
            {booksCategories?.map((category) => (
              <FilterButton
                key={category.id}
                filter={filter}
                category={category.name}
                onClick={(value) => handleFilterChange(value)}
              />
            ))}
          </FilterContent>
          <FilteredBooks>
            {books?.map((book) => (
              <FilterCard
                key={book.id}
                book={book}
                onClick={(value) => setOpenedBook(value)}
              />
            ))}
          </FilteredBooks>
        </ExplorerContent>
      </PageContainer>
    </>
  );
}
