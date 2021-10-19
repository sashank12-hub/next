import { useRouter } from "next/dist/client/router";
import Link from "next/link"
function comment(props){
  const router=  useRouter()
 
return (
    <>
<Link href={"/comments"}>
<a>comments</a></Link>
<h2>{props.comment.id}</h2>
<h2>{props.comment.body}</h2>
    </>
)
}
export default comment;
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (context) => {
   const{req,res,params,query}=context
   
    const response = await  fetch(`https://my-json-server.typicode.com/typicode/demo/comments/${context.params.id}`)
   const data=await response.json()
  
  
    return {
        props: {
            comment:data
        }
    }
}