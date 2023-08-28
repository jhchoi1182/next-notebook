import Link from "next/link";
import styles from "./layout.module.css";
// import "./globals.css";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "넥스트 연습",
  description: "넥스트 연습중.",
  icons: {
    icon: "/src/app/favicon.ico",
  },
};

type RootLayout = {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  auth: React.ReactNode;
};

export default function RootLayout({ children, analytics, team, auth }: RootLayout) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>헤더 연습</h1>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/food">Food</Link>
          </nav>
        </header>
        {children}
        {analytics}
        {team}
        {auth}
      </body>
    </html>
  );
}
