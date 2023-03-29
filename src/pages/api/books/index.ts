import prisma from "@/lib/servers/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const books = await prisma.book.findMany();

  return res.status(200).json({ books });
}
