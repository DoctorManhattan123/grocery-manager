import Head from "next/head";
import Image from "next/image";
import prisma from "../prisma/prisma";
import { GetStaticProps } from "next";
import { GroceryList } from "../prisma/types";

export default function Home(props: any) {
  console.debug(props);
  const groceryLists: Array<GroceryList> = props.resultGroceryLists;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content ml-40 flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Grocery lists</h1>
          {groceryLists.map((groceryList) => {
            return (
              <div>
                <p>{groceryList.author}</p>
                <p>{groceryList.title}</p>
                {groceryList.meals.map((meal) => {
                  return (
                    <>
                      <p>{meal.name}</p>
                      <p>Portions: {meal.portions}</p>
                      {meal.ingredients.map((ingredient) => {
                        return (
                          <>
                            <p>
                              {ingredient.name}, {ingredient.amount}{" "}
                              {ingredient.unit}
                            </p>
                          </>
                        );
                      })}
                    </>
                  )
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// index.tsx
export const getStaticProps: GetStaticProps = async () => {
  const resultGroceryLists = await prisma.groceryList.findMany({
    include: {
      meals: {
        include: {
          ingredients: true,
        },
      },
    },
  });
  return { props: { resultGroceryLists }, revalidate: 10 };
};
