import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    countries(type: "region", value: "europe") {
      name
      subregion
      alpha3Code
    }
  }
`;
