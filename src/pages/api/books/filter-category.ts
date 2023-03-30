import prisma from "@/lib/servers/prisma";
import { Book, Category, Rating, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface IFilteredBooks extends Book {
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
  //Find books by filter

  const filter = req.query.filter as string;

  if (filter === "Todos" || !filter) {
    const books = await prisma.book.findMany({
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
    return res.status(200).json(books);
  }

  console.log("search filter", filter);

  const books = await prisma.book.findMany({
    include: {
      ratings: true,
      categories: true,
    },
    where: {
      categories: {
        some: {
          category: {
            name: filter,
          },
        },
      },
    },
  });

  console.log("books", books);

  return res.status(200).json(books);
}
