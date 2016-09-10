import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Login from "./components/Login";
import Survey from "./components/Survey";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
    	<Route path="/" component={Layout}>
    		<IndexRoute component={Survey}></IndexRoute>
    		<Route path="login" name="login" component={Login}></Route>
    	</Route>
  	</Router>, app);