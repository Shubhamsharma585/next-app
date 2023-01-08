import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Blog({ posts }) {
  const router = useRouter();

  return (
    <div>
      <h2 onClick={() => router.push("/")}>Home</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`blog/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
