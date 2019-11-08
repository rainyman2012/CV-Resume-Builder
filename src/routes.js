import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import HomepageLayout from "./containers/Home";
import Skill from "./containers/Skill";
import Experience from "./containers/Experience";
import Educations from "./containers/Education";
import Bubble from "./containers/bubble";
const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={HomepageLayout} />
    <Route exact path="/skill" component={Skill} />
    <Route exact path="/expriences" component={Experience} />
    <Route exact path="/educations" component={Educations} />
    <Route exact path="/bubble" component={Bubble} />
  </Hoc>
);

export default BaseRouter;
