import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "http://localhost:3000/api/graphql", // e.g. https://www.myapi.com/api/v2
      headers: {
        "X-hasura-admin-secret": "<YOUR_HASURA_KEY>", // or any other values for the http request
        lang: "en",
      },
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
