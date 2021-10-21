import { useRouter } from "next/dist/client/router";
import Link from "next/link"

const First = ({posts}) => {
  
  const router =  useRouter()
  return (
    <div>
      <h2> im first </h2>
      <a onClick={()=>router.back()}>hjdfhfh</a>
     
      {posts?.map((post,index)=><Link href={`/posts/${post.id}`} passHref key={post.id}><div style={{display:"flex"}}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          </div></Link>)}
    </div>
  );
};
export default First;



export async function getStaticProps(){
  
    const response=await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    const data=await response.json()

    return {
        props:{
            posts:data
        }
    }

}