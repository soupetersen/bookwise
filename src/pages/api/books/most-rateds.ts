import prisma from "@/lib/servers/prisma";
import { Book, Rating, User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface IMostRatedsBooks extends Book {
  rate: number;
  count: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //Find most rated books

  const limit = req.query.limit as string;

  const mostRateds = await prisma.rating.findMany({
    orderBy: {
      rate: "desc",
    },
    include: {
      book: true,
    },
  });

  const most = mostRateds.reduce((acc, curr) => {
    if (acc[curr.book_id]) {
      const count = acc[curr.book_id].count + 1;
      const rate = (acc[curr.book_id].rate + curr.rate) / count;
      acc[curr.book_id].rate = rate;
      acc[curr.book_id].count = count;
    } else {
      acc[curr.book_id] = {
        rate: curr.rate,
        count: 1,
      };
    }
    return acc;
  }, {} as Record<string, { rate: number; count: number }>);

  const orderBooksByRate = Object.entries(most).sort((a, b) => {
    return b[1].rate - a[1].rate;
  });

  const mostRatedsBooks: IMostRatedsBooks[] = [];

  for (const book of orderBooksByRate) {
    const bookId = book[0];
    const bookRate = book[1].rate;
    const bookCount = book[1].count;
    const bookMostRated = mostRateds.find(
      (mostRated) => mostRated.book_id === bookId,
    );

    if (!bookMostRated) {
      continue;
    }

    if (limit && orderBooksByRate.indexOf(book) >= Number(limit)) {
      break;
    }

    const value: IMostRatedsBooks = {
      rate: bookRate,
      count: bookCount,
      author: bookMostRated.book.author,
      cover_url: bookMostRated.book.cover_url,
      created_at: bookMostRated.book.created_at,
      id: bookMostRated.book.id,
      name: bookMostRated.book.name,
      summary: bookMostRated.book.summary,
      total_pages: bookMostRated.book.total_pages,
    };

    mostRatedsBooks.push(value);
  }

  return res.status(200).json(mostRatedsBooks);
}
