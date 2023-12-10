import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(
  "http://localhost:8000/graphql",
  {
    headers: () => ({
      Authorisation: isClient
        ? `Bearer ${window.localStorage.getItem("__squad_token")}`
        : "",
    }),
  }
);
