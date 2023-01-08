import React from "react";

function blogDetails({ posts }) {
  return (
    <div>
      <h2>
        {posts.id} {posts.title}
      </h2>
      <p>{posts.body}</p>
    </div>
  );
}

export default blogDetails;

export async function getStaticPaths() {
  //defining the paths for which html pages will generated as static generations.
  //we can also check in build folder, in pages there will be 100 html pages
  //for 100 defined paths. 
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        blogId: `${post.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

// Since dynamic routes ki limit fix nhi h so next js will through error for
//Error: getStaticPaths is required for dynamic SSG pages and is missing for '/blog/[blogId]'.
//and iske liye hme ek alg functions me paths define krne prte h.
export async function getStaticProps(context) {
  //context ki jagah kuch bhi likh k hm di structure kr skte h.
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
