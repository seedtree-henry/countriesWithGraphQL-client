import React from "react";
import { Query } from "react-apollo";
import { DETAIL_PAGE } from "./queries";

const Detail = ({
  match: {
    params: { alpha3Code }
  }
}) => {
  return (
    <Query query={DETAIL_PAGE} variables={{ alpha3Code }}>
      {({ loading, error, data }) => {
        if (loading) return "loading";
        if (error) return "error";
        return (
          <div>
            <h2>{data.country.name}</h2>
            <p>{data.country.capital}</p>
            <p>{data.country.subregion}</p>
            <p>{data.country.population} people</p>
            <p>{data.country.gini}</p>
            <img src={data.country.flag} alt="flag" />
          </div>
        );
      }}
    </Query>
  );
};

export default Detail;
