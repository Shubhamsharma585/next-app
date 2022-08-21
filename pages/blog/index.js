import React from "react";
import { useRouter } from "next/router";

function Blog() {
  const router = useRouter();

  return (
    <div>
      blogfhd
      <h2 onClick={() => router.push("/")}>Home</h2>
    </div>
  );
}

export default Blog;
