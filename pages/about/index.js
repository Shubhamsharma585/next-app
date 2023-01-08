import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import User from "../../src/Compo/User";

function About({ users }) {
  const router = useRouter();
  const [ami, setAmi] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3005/api/peopledata")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setAmi(data);
  //     });
  //// }, []);

  return (
    <div>
      <h2 onClick={() => router.push("/")}>Home</h2>
      about
      {users?.map((itm, i) => (
        <>
          <div
            style={{ backgroundColor: "beige" }}
            onClick={() => router.push(`/about/${itm.id}`)}
            key={i}
          >
            <h4>{itm.id}</h4>
            {/* <p>{itm.name}</p>
            <p>{itm.username}</p>  */}
            <User name={itm.name} username={itm.username} />
          </div>
        </>
      ))}
    </div>
  );
}

export default About;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
