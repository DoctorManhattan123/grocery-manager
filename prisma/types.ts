export type GroceryList = {
  id: string;
  title: string;
  author: string;
  meals: Meal[];
  ingredients: Ingredient[];
};

export type Meal = {
  id: string;
  name: string;
  portions: number;
  ingredients: IngredientForMeal[];
};

export type IngredientForMeal = {
  id: string;
  name: string;
  amount: number;
  unit: string;
  mealId: string;
};

export type Ingredient = {
  id: string;
  name: string;
  amount: number;
  unit: string;
};
