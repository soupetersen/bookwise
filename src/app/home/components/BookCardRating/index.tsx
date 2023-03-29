"use client";
import ReactStars from "react-stars";
import {
  BookCardRatingContainer,
  BookRatingContent,
  BookRatingHeader,
  RatingBookTitle,
  RatingBookSpan,
} from "./styles";
import Image from "next/image";
import { BookRatings } from "@/pages/api/books/get-ratings";
import dayjs from "dayjs";

interface BookRatingProps {
  rating: BookRatings;
}

export function BookCardRating({ rating }: BookRatingProps) {
  return (
    <BookCardRatingContainer>
      <BookRatingHeader>
        <div>
          <Image
            src={rating.user.avatar_url!}
            width={40}
            height={40}
            alt={rating.user.name}
          />
          <div>
            <RatingBookTitle>{rating.user.name}</RatingBookTitle>
            <RatingBookSpan>
              {dayjs(rating.created_at).format("DD/MM/YYYY")}
            </RatingBookSpan>
          </div>
        </div>
        <ReactStars
          count={5}
          value={rating.rate}
          size={22}
          edit={false}
          color1="transparent"
          color2="#8381D9"
        />
      </BookRatingHeader>
      <BookRatingContent>
        <Image
          src={rating.book.cover_url!}
          width={108}
          height={152}
          alt={rating.book.name}
        />
        <div>
          <RatingBookTitle>{rating.book.name}</RatingBookTitle>
          <RatingBookSpan>{rating.book.author}</RatingBookSpan>
          <RatingBookSpan color="dark">{rating.book.summary}</RatingBookSpan>
        </div>
      </BookRatingContent>
    </BookCardRatingContainer>
  );
}
