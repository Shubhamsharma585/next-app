import React from "react";
import { useRouter } from "next/router";

function Blog2() {
  const router = useRouter();

  return (
    <div>
      blog2
      <h2 onClick={() => router.push("/")}>Home</h2>
    </div>
  );
}

export default Blog2;
