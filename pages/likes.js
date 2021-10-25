import { useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "apollo-server-micro";
import apolloclient from "../apolloclient";

function Likes(props) {
  //   console.log(props.query);
  const [state, setstate] = useState({
    error: {},
  });

  const GET_USERS = gql`
    {
      getUsers {
        username
        password
      }
    }
  `;
  //   const { data, loading } = useQuery(GET_USERS);
  //   if (loading) {
  //     return "loading";
  //   }

  console.log(props?.data);
  const handleLikes = async () => {
    const res = await fetch("/api/likes");
    const data = await res.json();
    // if(data.error){
    //
    //     const user={
    //         user:{
    //             name:"unauth"
    //         }
    //     }
    //     setstate(user)
    // }
    //
    setstate(data);
  };
  return (
    <>
      <button onClick={handleLikes}>fetch</button>
      {!state.error && state && <h2>{state?.user.user.name} </h2>}
      {}
    </>
  );
}

export default Likes;

export async function getStaticProps() {
  const GETUSERS = gql`
    query {
      getUsers {
        username
        password
      }
    }
  `;

const { data } = await apolloclient.query({
    query: GETUSERS
  })
//   const { data } = await client.query({
//     query: gql`
//       query getusers {
//         getUsers {
//           username
//           password
//         }
//       }
//     `,
//   });

  return {
    props: {
      data: data,
    },
  };
}
