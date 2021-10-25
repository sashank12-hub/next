import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// export const client = new ApolloClient({
//     uri: "http://localhost:3000/api/graphql",
//     cache: new InMemoryCache(),
// });



const apolloClient = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
});

export default apolloClient