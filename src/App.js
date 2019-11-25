// import libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { MapView } from "./components/MapView";
import { UserAuth } from "./components/UserAuth";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavBar";
/*
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
*/

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} /> {/* Home */}
              <Route path="/mapview" component={MapView} /> {/* Map */}
              <Route path="/userauth" component={UserAuth} /> {/* Users */}
              <Route path="/logout" component={Home} /> {/* Logout */}
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
