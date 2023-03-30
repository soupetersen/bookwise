import prisma from "@/lib/servers/prisma";
import { Category } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export interface IBooksCategories {
  categories: Category[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //Find user books reviews

  const userId = String(req.body.userId);
  const testUserId = "383f783-6ce1-4f92-b1dd-7a7a693c4aef";

  const userReviews = await prisma.rating.findMany({
    where: {
      user_id: testUserId,
    },
    include: {
      book: true,
    },
  });

  return res.status(200).json(userReviews);
}
