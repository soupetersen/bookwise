"use client";

import { FilterCardContainer, StarsContainer } from "./styles";
import Image from "next/image";
import ReactStars from "react-stars";
import { IFilteredBooks } from "@/pages/api/books/filter-category";
import { calculateBookRate } from "@/utils/book-rating";

interface PopularCardProps {
  book: IFilteredBooks;
  onClick: (book: IFilteredBooks) => void;
}

export default function FilterCard({ book, onClick }: PopularCardProps) {
  const rate = calculateBookRate(book);

  return (
    <FilterCardContainer onClick={() => onClick(book)}>
      <Image src={book.cover_url} width={94} height={140} alt={book.name} />
      <div>
        <h3>{book.name}</h3>
        <p>{book.author}</p>
        <StarsContainer>
          <ReactStars
            count={5}
            value={rate}
            size={22}
            edit={false}
            color1="transparent"
            color2="#8381D9"
          />
        </StarsContainer>
      </div>
    </FilterCardContainer>
  );
}
