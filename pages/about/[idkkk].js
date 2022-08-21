import React from "react";
import { useRouter } from "next/router";

function Ideach() {
  const router = useRouter();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* <h1>this is page pathname {router.pathname}</h1> */}
      <h1>this is page and query {router.query.idkkk}</h1>
      <h2 onClick={() => router.push("/")}>Home</h2>
    </div>
  );
}

export default Ideach;
