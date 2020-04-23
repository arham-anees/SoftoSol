import * as React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./views/Home/Home";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

import "./custom.scss";
import BlogsCollection from "./components/BlogCollection/BlogCollection";
import BlogDetail from "./views/BlogDetail/BlogDetail";

export default () => (
  <Layout>
    <Route exact path="/">
      {Home()}
    </Route>
    <Route path="/counter" component={Counter} />
    <Route exact path="/blogs" component={BlogsCollection} />
    <Route path="/blogs/blog" component={BlogDetail} />
    <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
  </Layout>
);
