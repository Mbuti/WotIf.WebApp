import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Login from "./components/Login";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
    	<Route path="/" component={Layout}>
    		<Route path="login" name="login" component={Login}></Route>
    	</Route>
  	</Router>, app);