import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar JSON
  scalar ISODate

  type Data {
    id: ID
    created: ISODate
    data: JSON
  }

  type Query {
    census: [Data]
  }
`;
