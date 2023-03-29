"use client";
import ReactStars from "react-stars";
import { Book } from "@prisma/client";
import { BookCardContainer } from "./styles";
import Image from "next/image";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const { name, cover_url, author, created_at, id, summary, total_pages } =
    book;

  function ratingChanged(newRating: number) {
    console.log(newRating);
  }

  return (
    <BookCardContainer>
      <Image src={cover_url} width={108} height={152} alt={book.name} />
      <p>{book.name}</p>
      <ReactStars count={5} onChange={ratingChanged} size={24} />
    </BookCardContainer>
  );
}
