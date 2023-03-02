import { Route, Switch } from "react-router-dom";
import "./App.css";
import Collectioncmp from "./components/Collectioncmp";
import Deliverycmp from "./components/Deliverycmp";
import Mangementcmp from "./components/Mangement";
import Servicecmp from "./components/Servicecmp";
import { Button } from "react-bootstrap";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Button variant="primary" size="lg" href="/">
        Welcome to Data Page
      </Button>
      <div className="App">
        <br></br>
        <Switch>
          <Route path="/" exact>
            <Mangementcmp />
          </Route>
          <Route path="/delivery" exact>
            <Deliverycmp />
          </Route>
          <Route path="/collection" exact>
            <Collectioncmp />
          </Route>
          <Route path="/service" exact>
            <Servicecmp />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
