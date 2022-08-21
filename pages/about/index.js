import React from "react";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();

  return (
    <div>
      about
      <h2 onClick={() => router.push("/")}>Home</h2>
    </div>
  );
}

export default About;
