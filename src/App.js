import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import MapView2 from "./components/MapView2";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";
import { ViolationQuery } from "./components/violationQuery";
import { AdminView } from "./components/adminView1";

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
              <Route path="/violations" component={ViolationQuery} />{" "}
              {/* Users */}
              <Route path="/logout" component={Home} /> {/* Logout */}
              <Route path="/adminview" component={AdminView} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
