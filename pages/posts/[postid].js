import { useRouter } from "next/dist/client/router";
import Link from "next/link"
function SinglePost({ post }) {
  const router = useRouter();
  
  if(router.isFallback) return <h1>...Loading</h1>

  return (
    <>
    <Link href="/posts">
    <a>posts</a>
    </Link>
      <h3> {post.id} </h3> <h3> {post.title} </h3>
    </>
  );
}

export default SinglePost;
export async function  getStaticPaths() {
    const response = await fetch(
        `https://my-json-server.typicode.com/typicode/demo/posts`
      );
      const data = await response.json();
      const paths=data.map(item=>({
          params:{
              postid:`${item.id}`
          }
      }))
  return {
    // paths: [
    //   {
    //     params: {
    //       postid: "1",
    //     },
    //   },
    //   {
    //     params: {
    //       postid: "2",
    //     },
    //   },
    // ]
    paths,
    fallback:true
  };
}

export async function getStaticProps(context) {
  
  const response = await fetch(
    `https://my-json-server.typicode.com/typicode/demo/posts/${context.params.postid}`
  );
  const data = await response.json();
  if(!data) return {
       
    notFound:true
}

  return {
    props: {
      post: data,
    },
  };
}
