import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Ideach() {
  const router = useRouter();
  const [mi, setMi] = useState({});

  // useEffect(() => {
  //   if (router.isReady) {
  //     fetch(`http://localhost:3005/api/peopledata/q=${router.query.idkkk}`)
  //       .then((response) => {
  //         console.log(response);
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setMi(data);
  //       });
  //   }
  // }, [router.query.idkkk]);

  console.log(mi);

  return (
    <>
      <h2
        style={{ backgroundColor: "pink", paddingLeft: "20px" }}
        onClick={() => router.push("/")}
      >
        Home
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2> {router.query.idkkk}</h2>
        <h2>{mi.first_name}</h2>
      </div>
    </>
  );
}

export default Ideach;
