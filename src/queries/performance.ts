import gql from "graphql-tag";

export const GET_PERFORMANCE = gql`
  query GetPerformance($performanceId: ID!) {
    performance(id: $performanceId) {
      id
      name
      discription
      start
      finish
      thumbnail
      location {
        lat
        lng
      }
      address
      artist {
        id
        name
        imageIcon
      }
    }
  }
`;
