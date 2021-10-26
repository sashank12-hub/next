import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { gql } from "apollo-server-micro";
import router, {useRouter}from "next/router";
// import apolloClient from "../apolloclient";

function Likes(props) {

  //   console.log(props.query);
  const [state, setstate] = useState({username:"",password:""});

  const GET_USERS = gql`
    {
      getUsers {
        username
        password
      }
    }
  `;
 
  const ADD_USER = gql`
    mutation addUser(
      $username:String!
      $password:String!
    ){
      addUser(userinput:{
        username:$username
        password:$password
      }){
        username
        password

      }
    }`;
  const [adduser, { loading }] = useMutation(ADD_USER, {
    update(proxy, result) {
   const x=   result.data.addUser[result.data.addUser.length -1]
   console.log(x)
      console.log(result);
    },
    variables:{
      username:state.username,
      password:state.password
    }})
 
  
  const handleLikes = async () => {
    router.push('/posts')
  //  adduser()
   
    // setstate(data);
  };
  return (
    <>
    <input type="text" name="username" value={state.username} onChange={(e)=>setstate({...state,username:e.target.value})}/>
    <input type="text" name="password" value={state.password} onChange={(e)=>setstate({...state,password:e.target.value})}/>
      <button onClick={handleLikes}>fetch here</button>
     
      {}
    </>
  );
}

export default Likes;

// export async function getStaticProps() {
//   const GETUSERS = gql`
//     query {
//       getUsers {
//         username
//         password
//       }
//     }
//   `;

//   const { data } = await client.query({
//     query: GETUSERS,
//   });
//   //   const { data } = await client.query({
//   //     query: gql`
//   //       query getusers {
//   //         getUsers {
//   //           username
//   //           password
//   //         }
//   //       }
//   //     `,
//   //   });

//   return {
//     props: {
//       data: data,
//     },
//   };
// }
