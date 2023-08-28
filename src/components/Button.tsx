"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  console.log(router);

  return <button onClick={() => router.push("/food")}>Button</button>;
};

export default Button;
