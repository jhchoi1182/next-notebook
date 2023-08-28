import React from "react";
import Counter from "../components/Counter";
import Button from "@/components/Button";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/setting" style={{ display: "block" }}>
        세팅으로 이동
      </Link>
      <Link href="/login">로그인하기</Link>
      <Counter />
      <Button />
    </>
  );
};

export default Home;
