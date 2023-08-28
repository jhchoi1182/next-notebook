import { getFoods } from "@/service/foods";
import { NextResponse } from "next/server";

export default async function GET(request: Request) {
  const foods = await getFoods();
  return NextResponse.json({ foods });
}