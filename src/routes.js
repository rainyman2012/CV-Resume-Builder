import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import HomepageLayout from "./containers/Home";
import Page from "./containers/Page";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={HomepageLayout} />
    <Route exact path="/:page" component={Page} />
  </Hoc>
);

export default BaseRouter;
