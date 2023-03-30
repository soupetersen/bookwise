import prisma from "@/lib/servers/prisma";
import { Category } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export interface IBooksCategories {
  categories: Category[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //Find books categories

  const booksCategories = await prisma.category.findMany();

  return res.status(200).json(booksCategories);
}
