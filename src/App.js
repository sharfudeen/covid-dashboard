import { React } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import SimpleCart from "./pages/simple-cart";
import CovidData from "./pages/covid-data";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <SimpleCart />
          </Route>
          <Route exact path="/covid">
            <CovidData />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default withRouter(App);
