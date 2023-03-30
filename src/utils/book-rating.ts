import { IFilteredBooks } from "@/pages/api/books/filter-category";

export function calculateBookRate(book: IFilteredBooks): number {
  const length = book.ratings.length;
  const totalRate = book.ratings
    .map((rating) => rating.rate)
    .reduce((a, b) => a + b);

  return totalRate / length;
}
