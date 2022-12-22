// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/prisma";

type Data = {
  name: string;
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { searchString } = req.query;
  const resultGroceryLists = await prisma.groceryList.findMany({
    include: {
      meals: {
        include: {
          ingredients: true,
        },
      },
    },
  });
  res.json(resultGroceryLists);
}
