/* eslint-disable import/no-anonymous-default-export */
import { Route } from "react-router-dom";
import React from "react";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Translate from "../components/Translate/Translate";
import Jardin from "../components/Jardin/Jardin";


export default [
  <Route exact path="/contact" component={Contact} key="/contact" />,
  <Route exact path="/translate" component={Translate} key="/translate" />,
  <Route exact path="/jardin" component={Jardin} key="/jardin" />,

  <Route exact path="/" component={Home} key="/" />,
  // <Route
  //   exact
  //   path="/personalised/myinfo-form/:slug"
  //   component={WithoutInfoForm}
  //   key="/form/:slug"
  // />,

  // <Route
  //   key="/not-found"
  //   render={() => {
  //     window.location.href = "/";
  //   }}
  // />,
];
