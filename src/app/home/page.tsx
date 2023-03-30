"use client";

import api from "@/lib/fetch";
import { useQuery } from "@tanstack/react-query";
import {
  PageContainer,
  HomeContent,
  PageHeader,
  BooksContainer,
  MostPopularContainer,
  FilterText,
  Books,
} from "./styles";
import { BsGraphUpArrow } from "react-icons/bs";
import { BookCardRating } from "./components/BookCardRating";
import { IBookRatings } from "@/pages/api/books/get-ratings";
import PopularCard from "./components/PopularCard";
import { IMostRatedsBooks } from "@/pages/api/books/most-rateds";
import { ShowAllButton } from "@/components/ShowAllButton";
import { IBook } from "@/pages/api/books/[id]";
import { useState } from "react";
import { Book } from "./book";
import { useSession } from "next-auth/react";

export default function Home() {
  const [book, setBook] = useState<IBook | undefined>();

  const { data: booksRatings } = useQuery(["books-get-ratings"], async () => {
    const response = await fetch(`${api}/books/get-ratings`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data as IBookRatings[];
  });

  const { data: mostRateds } = useQuery(["books-most-rateds"], async () => {
    const response = await fetch(`${api}/books/most-rateds?limit=4`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data as IMostRatedsBooks[];
  });

  async function handleBookClick(book: IMostRatedsBooks) {
    const response = await fetch(`${api}/books/${book.id}`);
    const data = await response.json();
    console.log(data);
    setBook(data);
  }

  function showAllRateds() {
    console.log("show rateds");
  }

  return (
    <>
      {book && <Book book={book} close={() => setBook(undefined)} />}
      <PageContainer>
        <PageHeader>
          <div>
            <BsGraphUpArrow
              size={24}
              color="$green100"
              className="begin-icon"
            />
            <h1>Inicio</h1>
          </div>
        </PageHeader>
        <HomeContent>
          <BooksContainer>
            <FilterText>Avaliações mais recentes</FilterText>
            <Books>
              {booksRatings?.map((rating: any) => (
                <BookCardRating rating={rating} />
              ))}
            </Books>
          </BooksContainer>
          <MostPopularContainer>
            <FilterText>Livros populares</FilterText>
            <ShowAllButton onClick={showAllRateds} />
            <Books isMostPopular>
              {mostRateds?.map((book: any) => (
                <PopularCard
                  book={book}
                  onClick={(value) => handleBookClick(value)}
                />
              ))}
            </Books>
          </MostPopularContainer>
        </HomeContent>
      </PageContainer>
    </>
  );
}
