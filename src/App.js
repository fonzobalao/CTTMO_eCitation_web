// import libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
//import MapboxGLMap from "./components/MapView";
import MapView2 from "./components/MapView2";
//import { UserAuth } from "./components/UserAuth";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import { violationQuery } from "./components/violationQuery";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap-theme.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} /> {/* Home */}
              <Route path="/mapview" component={MapView2} /> {/* Map */}
              <Route path="/violations" component={violationQuery} />{" "}
              {/* Users */}
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
