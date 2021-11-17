import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import Library from "../views/Library";
import Search from "../views/Search";
import ContentHeader from "./ContentHeader";

const Content = () => {
  return (
    <main className="content">
      <ContentHeader />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/library">
          <Library />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
