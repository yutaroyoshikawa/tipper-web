import gql from "graphql-tag";

export const GET_PERFORMANCE = gql`
  query GetPerformance($performanceId: ID!) {
    performance(id: $performanceId) {
      id
      name
    }
  }
`;
