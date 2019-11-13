import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Hoc from "./hoc/hoc";

import HomepageLayout from "./containers/Home";
import Skill from "./containers/Skill";
import Experience from "./containers/Experience";
import Educations from "./containers/Education";
import Album from "./containers/album/album";
import NotFoundPage from "./containers/NotFoundPage";
const BaseRouter = () => (
  <Hoc>
    <Switch>
      <Route exact path="/" component={HomepageLayout} />
      <Route exact path="/skill" component={Skill} />
      <Route exact path="/experiences" component={Experience} />
      <Route exact path="/educations" component={Educations} />
      <Route exact path="/album" component={Album} />

      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Hoc>
);

export default BaseRouter;
