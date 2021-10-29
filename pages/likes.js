import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { gql } from "apollo-server-micro";
import router, { useRouter } from "next/router";
import { GraphQLUpload } from "graphql-upload";
// import apolloClient from "../apolloclient";

function Likes(props) {
  const [file, setfile] = useState(null);
  const [state, setstate] = useState({ username: "", password: "" });

  const FILE_UPLOAD = gql`
    mutation fileupload($file: GraphQLUpload) {
      uploadfile(file: {
        file:$file
      }) {
        url
      }
    }
  `;

  // const FILE_UPLOAD= gql`
  // `

  const GET_USERS = gql`
    {
      getUsers {
        username
        password
      }
    }
  `;
  const GET_STATES = gql`
    {
      getStates {
        name
        id
      }
    }
  `;

  const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!) {
      addUser(userinput: { username: $username, password: $password }) {
        username
        password
      }
    }
  `;
  const getstates = useQuery(GET_STATES);
  console.log(getstates.data);
  const [adduser, { loading }] = useMutation(ADD_USER, {
    update(proxy, result) {
      const x = result.data.addUser[result.data.addUser.length - 1];
      console.log(x);
      console.log(result);
    },
    variables: {
      username: state.username,
      password: state.password,
    },
  });

  const [addfile] = useMutation(FILE_UPLOAD, {
    update(proxy, result) {
      console.log(result);
    },
    variables: { file },
  });
  const handleLikes = async () => {
    router.push("/posts");
    //  adduser()

    // setstate(data);
  };
  const handlefilechange = async (event) => {
    console.log(event.target.files[0])
     setfile(event.target.file[0]);
  };
  const handlefilesubmit = () => {
    if (file) {
      console.log(file);
      addfile();
    }
  };
  return (
    <>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={(e) => setstate({ ...state, username: e.target.value })}
      />
      <input
        type="text"
        name="password"
        value={state.password}
        onChange={(e) => setstate({ ...state, password: e.target.value })}
      />
      <button onClick={handleLikes}>fetch here</button>

      <div>
        <h2>here</h2>
        <input type="file" name="file" onChange={(event)=>handlefilechange(event)} accept=".jpeg"/>
        <button onClick={handlefilesubmit}>submit</button>
      </div>
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
