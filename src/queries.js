import gql from "graphql-tag";

export const HOME_PAGE = gql`
  query {
    countries(type: "region", value: "europe") {
      name
      subregion
      alpha3Code
      flag
    }
  }
`;

export const DETAIL_PAGE = gql`
  query getCountryDetails($alpha3Code: String!) {
    country(alpha3Code: $alpha3Code) {
      name
      capital
      subregion
      alpha3Code
      population
      gini
      flag
    }
  }
`;
