import React from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Hoc from "./hoc/hoc";

import HomepageLayout from "./containers/Home";
import Skill from "./containers/Skill";
import Experience from "./containers/Experience";
import Educations from "./containers/Education";
import Album from "./containers/album/album";
import NotFoundPage from "./containers/NotFoundPage";
import ScrollToTopPage from "./hoc/ScrollToTop";

const BaseRouter = () => (
  <Hoc>
    <Switch>
      <Route exact path="/" component={ScrollToTopPage(HomepageLayout)} />
      <Route exact path="/skill" component={ScrollToTopPage(Skill)} />

      <Route
        exact
        path="/experiences"
        component={ScrollToTopPage(Experience)}
      />

      <Route exact path="/educations" component={ScrollToTopPage(Educations)} />
      <Route exact path="/album" component={ScrollToTopPage(Album)} />

      <Route path="*" component={ScrollToTopPage(NotFoundPage)} />
    </Switch>
  </Hoc>
);

export default BaseRouter;
