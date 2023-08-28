import NotFound from "@/app/not-found";
import Button from "@/components/Button";
import { getFood, getFoods } from "@/service/foods";

type FoodProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;

export const generateMetadata = ({ params }: FoodProps) => {
  return {
    title: `음식 이름: ${params.slug}`,
  };
};

const Foods = async ({ params: { slug } }: FoodProps) => {
  const food = await getFood(slug);
  if (!food) NotFound();
  return (
    <div style={{ height: "200vh" }}>
      <div>{food?.name}</div>;
      <Button />
    </div>
  );
};

export default Foods;

export const generateStaticParams = async () => {
  const foods = await getFoods();
  return foods.map((food) => ({ slug: food.id }));
};
