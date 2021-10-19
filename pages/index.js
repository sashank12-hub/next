import Link from "next/link"
import useSWR from "swr";

const Home = () => {

  const fetchposts=async()=>{
    const response=await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    const data=await response.json()
    return data
  }
  const {data,error}=useSWR('posts',fetchposts)
 
  return (
    <div>
      <h1> hello </h1>
      <Link href="/posts">

        <a>First</a>
      </Link>
      <Link href="/comments">

        <a>comments</a>
      </Link>
    </div>
  );
};

export default Home;
