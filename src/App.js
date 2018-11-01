import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:alpha3Code"} component={Detail} />
          </Switch>
        </Router>
        <div className="app" />
      </ApolloProvider>
    );
  }
}

export default App;
