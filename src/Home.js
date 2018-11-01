import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import Country from "./Country";
const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return <span>loading</span>;
      if (error) return <span>something wrong</span>;
      return data.countries.map(country => (
        <Country
          name={country.name}
          alpha3Code={country.alpha3Code}
          flag={country.flag}
          key={country.alpha3Code}
        />
      ));
    }}
  </Query>
);

export default Home;
