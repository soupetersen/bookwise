import { MostRatedsBooks } from "@/pages/api/books/most-rateds";
import { PopularCardContainer, StarsContainer } from "./styles";
import Image from "next/image";
import ReactStars from "react-stars";

interface PopularCardProps {
  book: MostRatedsBooks;
}

export default function PopularCard({ book }: PopularCardProps) {
  return (
    <PopularCardContainer>
      <Image src={book.cover_url} width={64} height={94} alt={book.name} />
      <div>
        <h3>{book.name}</h3>
        <p>{book.author}</p>
        <StarsContainer>
          <ReactStars
            count={5}
            value={book.rate}
            size={22}
            edit={false}
            color1="transparent"
            color2="#8381D9"
          />
        </StarsContainer>
      </div>
    </PopularCardContainer>
  );
}
