import Link from "next/link";
import styles from "./layout.module.css";
import { getFoods } from "@/service/foods";



export default async function FoodLayout({ children }: { children: React.ReactNode }) {
  const foods = await getFoods();
  return (
    <section>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {foods.map((food) => (
            <Link key={food.id} href={`/food/${food.id}`} scroll={false}>
              {food.name}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </section>
  );
}
