import { ApolloServer } from "apollo-server-micro";
// import  {  typeDefs  }  from  "../../../data/typedefs.js";
//  import  {  resolvers  }  from  "../../../data/resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { gql } from "apollo-server-micro";
import { axios } from "axios";
import User from "../../../databse/user.model";
import Connection from "../../../databse/index";
Connection();
// const users = [{ name: "a" }, { name: "a" }, { name: "a" }];
const typeDefs = gql`
  type User {
    username: String
    password: String
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
  }

  type Mutation {
    addUser(userinput: userInput): [User]
  }
`;

const resolvers = {
  Query: {
    getUsers: async () => {
      let user = await User.find();
      console.log("user", user);
      return user;
    },
    getUser: async (_,{ user: { password } },context,info) => {
      try {
        let output = await User.findOne({password:password});
        return output;
      } catch (err) {}
    },
  },
  Mutation: {
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
