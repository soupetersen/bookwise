"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  BookContainer,
  BookHeader,
  BookInfos,
  DialogClose,
  DialogOverlay,
  InfoContainer,
  RatingSection,
} from "./styles";
import { IFilteredBooks } from "@/pages/api/books/filter-category";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { BiBookOpen } from "react-icons/bi";
import ReactStars from "react-stars";
import { calculateBookRate } from "@/utils/book-rating";
import { Rating } from "../Rating";

interface BookProps {
  book: IFilteredBooks;
  close: () => void;
}

export function Book({ book, close }: BookProps) {
  const rate = calculateBookRate(book);

  console.log(book);

  return (
    <Dialog.Root>
      <Dialog.Portal forceMount>
        <DialogOverlay>
          <BookContainer>
            <DialogClose onClick={close}>
              <IoClose size={26} fill="blue" />
            </DialogClose>
            <section>
              <BookInfos>
                <BookHeader>
                  <Image
                    src={book.cover_url}
                    width={171}
                    height={242}
                    alt={book.name}
                  />
                  <div className="book-infos">
                    <div>
                      <h3>{book.name}</h3>
                      <p>{book.author}</p>
                    </div>
                    <div className="header-rate">
                      <ReactStars
                        count={5}
                        value={rate}
                        size={28}
                        edit={false}
                        color1="transparent"
                        color2="#8381D9"
                      />
                      <p>
                        {book.ratings.length <= 1
                          ? `${book.ratings.length} avaliação`
                          : `${book.ratings.length} avaliações`}
                      </p>
                    </div>
                  </div>
                </BookHeader>
                <InfoContainer>
                  <div className="book-descriptions">
                    <BsBookmark size={26} />
                    <div className="infos">
                      <h3>Categoria</h3>
                      <div>
                        {book.categories.map((category) => (
                          <h2 key={category.category.id}>
                            {category.category.name}
                          </h2>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="book-descriptions">
                    <BiBookOpen size={26} />
                    <div className="infos">
                      <h3>Páginas</h3>
                      <h2>{book.total_pages}</h2>
                    </div>
                  </div>
                </InfoContainer>
              </BookInfos>
              <RatingSection>
                <div className="rating-section-header">
                  <h3>Avaliações</h3>
                  <h2>Avaliar</h2>
                </div>
                {book.ratings.map((rating) => (
                  <Rating key={rating.id} rating={rating} />
                ))}
              </RatingSection>
            </section>
          </BookContainer>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
