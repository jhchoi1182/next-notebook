import path from "path";
import { promises as fs } from "fs";

export const revalidate = 3;

export type Food = {
  id: string;
  name: string;
  price: number;
};

export async function getFoods(): Promise<Food[]> {
  const filePath = path.join(process.cwd(), "data", "food.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getFood(id: string): Promise<Food | undefined> {
  const foods = await getFoods();
  return foods.find((food) => food.id === id);
}
