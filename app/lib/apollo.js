import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  //uri: "http://markzunino.flywheelsites.com/graphql",
  uri: "http://zunino.local/graphql",
  cache: new InMemoryCache(),
});
