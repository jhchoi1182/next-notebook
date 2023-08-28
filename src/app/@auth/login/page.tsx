"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <div className="w-60 h-60 border border-red-600">
      <div>로그인</div>
      <button onClick={() => router.back()}>Close modal</button>
    </div>
  );
};

export default Login;
