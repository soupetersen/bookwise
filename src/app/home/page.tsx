"use client";

import api from "@/lib/fetch";
import { useQuery } from "@tanstack/react-query";
import {
  HomeContainer,
  HomeContent,
  HomeHeader,
  BooksContainer,
  MostPopularContainer,
  FilterText,
  Books,
} from "./styles";
import { BsGraphUpArrow } from "react-icons/bs";
import { BookCardRating } from "./components/BookCardRating";
import { BookRatings } from "@/pages/api/books/get-ratings";
import PopularCard from "./components/PopularCard";
import { MostRatedsBooks } from "@/pages/api/books/most-rateds";
import { ShowAllButton } from "@/components/ShowAllButton";

export default function Home() {
  const { data: booksRatings } = useQuery(["books-get-ratings"], async () => {
    const response = await fetch(`${api}/books/get-ratings`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data as BookRatings[];
  });

  const { data: mostRateds } = useQuery(["books-most-rateds"], async () => {
    const response = await fetch(`${api}/books/most-rateds?limit=4`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data as MostRatedsBooks[];
  });

  function showAllRateds() {
    console.log("show rateds");
  }

  return (
    <HomeContainer>
      <HomeHeader>
        <BsGraphUpArrow size={22} color="$green100" className="begin-icon" />
        <p>Inicio</p>
      </HomeHeader>
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
              <PopularCard book={book} />
            ))}
          </Books>
        </MostPopularContainer>
      </HomeContent>
    </HomeContainer>
  );
}
