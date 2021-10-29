import { ApolloServer } from "apollo-server-micro";
import { graphql } from "graphql";
// import  {  typeDefs  }  from  "../../../data/typedefs.js";
//  import  {  resolvers  }  from  "../../../data/resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { gql } from "apollo-server-micro";
import { axios } from "axios";
import User from "../../../databse/user.model";
import Connection from "../../../databse/index";
import path from 'path'
const fs=require('fs')
import {GraphQLUpload} from 'graphql-upload'
Connection();
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
 
} = graphql;
const States = [
  { name: "ap", id: 1 },
  { name: "jk", id: 2 },
  { name: "kk", id: 3 },
];
const cities = [
  { name: "vskp", stateid: 1 },
  { name: "bza", stateid: 1 },
  { name: "avc", stateid: 2 },
];
// const users = [{ name: "a" }, { name: "a" }, { name: "a" }];
const typeDefs = gql`
  type State {
    name: String
    id: ID
    cities: [city]
  }
  type city {
    name: String
    stateid: String
  }
  type User {
    username: String
    password: String
  }
  type File {
    url: String!
    
  }
  input userInput {
    username: String
    password: String
  }
  input QueryInput {
    password: String
  }

  type Query {
    getUsers: [User]
    getUser(user: QueryInput): User
    getfiles: [File]
    getStates: [State]
    
  }

  type Mutation {
    addUser(userinput: userInput): [User]
    uploadfile(file:GraphQLUpload):File
  }
`;

const resolvers = {
  Query: {
    getUser: async (_, { user: { password } }, context, info) => {
      try {
        let output = await User.findOne({ password: password });
        return output;
      } catch (err) {}
    },
    getStates: async (_, args, context, info) => {
     
      return States;
    },
  },
  State:{
    cities:(parent)=>{
      console.log("parent",parent)
      const data=cities.filter(item=>item.stateid==parent.id)
      return data
    }
  },
  Query: {
    getUsers: async () => {
      let user = await User.find();
      console.log("user", user);
      return user;
    }},
  Mutation: {
    uploadfile:async(_,{file:{file}},context,info)=>{
const {createReadStream,filename,mimetype,encoding}=await file
const stream=createReadStream()
const pathName=path.join(__dirname,"..","..","..","public","images",`${filename}`)
await stream.pipe(fs.createWriteStream(pathName))
return{
  url:`http://localhost:3000/images/${filename}`
}
    },
    addUser: async (
      _,
      { userinput: { username, password } },
      context,
      info
    ) => {
      try {
        let user = new User({
          username: username,
          password: password,
        });
        let data = await user.save();
        let use = await User.find();
        console.log("user", use);
        return use;
      } catch (err) {}

      return users;
    },
  },
};
export const config = {
  api: {
    bodyParser: false,
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
// server.applyMiddleware({ app, cors: corsOptions });
const startServer = server.start();
export default async function handler(req, res) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}

//export  default  await apolloServer.createHandler({ path:  "/api/graphql"  });
