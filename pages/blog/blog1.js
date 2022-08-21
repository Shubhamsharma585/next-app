import React from "react";
import { useRouter } from "next/router";

function Blog1() {
  const router = useRouter();

  return (
    <div>
      blog1
      <h2 onClick={() => router.push("/")}>Home</h2>
    </div>
  );
}

export default Blog1;
