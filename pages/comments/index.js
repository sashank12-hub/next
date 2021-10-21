import Link from "next/link";
import { signin, useSession, getSession } from "next-auth/client";
import { useState, useEffect } from "react";
function Comments(props) {
  
  // const [Loading, setLoading] = useState(true);
 

  // useEffect(() => {
  //   const securePage = async () => {
  //     const session = await getSession();
  //     if (!session) {
  //       signin();
  //     } else {
  //       setLoading(false);
  //     }
  //   };
  //   securePage()
  // }, []);
  // if (Loading) return <h1>...lOADING</h1>;

  return (
    <>
      <h3>hfhfhjgj</h3>
      {props?.comments?.map((item) => {
        return (
          <Link key={item.id} href={`/comments/${item.id}`} passHref>
            <a>
              <p>{item.body}</p>
              <p>{item.id}</p>
            </a>
          </Link>
        );
      })}
    </>
  );
}

export default Comments;
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (context) => {

  const session=await getSession(context)
  if(!session){
    return{
      redirect:{
        destination:`/api/auth/signin?callbackUrl=http://localhost:3000/comments`,
        permanent:false
      }
    }
  }
  
  const response = await fetch(
    "https://my-json-server.typicode.com/typicode/demo/comments"
  );
  const data = await response.json();

  return {
    props: {
      comments: data,
      session:session
    },

  };
};
