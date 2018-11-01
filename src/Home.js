import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading</span>;
      if (error) return <span>something wrong</span>;
      return data.countries.map(country => (
        <h2 key={country.alpha3Code}>
          {country.name} ({country.alpha3Code})
        </h2>
      ));
    }}
  </Query>
);

export default Home;
