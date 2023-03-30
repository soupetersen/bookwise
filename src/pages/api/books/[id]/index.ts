import prisma from "@/lib/servers/prisma";
import { Book, Category, Rating, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface IBook extends Book {
  ratings: (Rating & {
    user: User;
  })[];
  categories: {
    book_id: string;
    categoryId: string;
    category: Category;
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const bookId = String(req.query?.id);

  if (!bookId) {
    return res.status(400).json({ error: "Book id is required" });
  }

  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
    include: {
      ratings: {
        include: {
          user: true,
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
    },
  });

  return res.json(book);
}
