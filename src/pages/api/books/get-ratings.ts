import prisma from "@/lib/servers/prisma";
import { Book, Rating, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface IBookRatings extends Rating {
  book: Book;
  user: User;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //Find latest books reviews

  const booksRatings = await prisma.rating.findMany({
    include: {
      book: true,
      user: true,
    },
    orderBy: {
      created_at: "desc",
    },
    take: 5,
  });

  return res.status(200).json(booksRatings);
}
