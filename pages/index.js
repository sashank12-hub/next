import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
import Connection from "./../databse/index";
import { signin, signout, useSession } from "../node_modules/next-auth/client";


const Home = (props) => {
const [form, setform] = useState({username:"",password:""})
 
  const fetchposts = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    const data = await response.json();
    return data;
  };
  const { data, error } = useSWR("posts", fetchposts);
const handleformsubmit=async()=>{
 
const res=await fetch("/api/database",{
  method:"POST",
  body:JSON.stringify({user:form}) ,
  headers:{
    "Content-Type": "application/json",
  },
})
// const res=await fetch("/api/database")
const data=await res.json();

}
const handleformvaluechange=(event)=>{

  setform({...form,[event.target.name]:event.target.value})
  
}
  return (
    <div>
      
      
        <input type="text" onChange={handleformvaluechange} value={form.username} name="username" />
        <input type="password" onChange={handleformvaluechange} value={form.password} name="password" />
       
        <button onClick={handleformsubmit}>Submit form</button>
      <h1> hello </h1>
      {/* <h2>{response.connection}</h2> */}
      <img alt="dog" src={"/2.jpg"} width={"280"} height={"420"} />
      <Image alt="dog" src={"/2.jpg"} width={"280"} height={"420"} />
      
    </div>
  );
};

export default Home;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// export const getStaticProps = async (ctx) => {
//   // const res = await Connection();
//   // 
//   // //const data=await res.json()
//   // return {
//   //   props: {
//   //     response: "hdhfhf",
//   //   },
//   // };
// };
