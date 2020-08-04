import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/homepage";
import tos from "../Pages/treams";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tos" component={tos} />
    </Switch>
  );
}
