import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import CreateSurvey from "./pages/CreateSurvey";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Survey from "./pages/Survey";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
    	<Route path="/" component={Layout}>
    		<IndexRoute component={Home}></IndexRoute>
    		<Route path="login" name="login" component={Login}></Route>
    		<Route path="createsurvey" name="createsurvey" component={CreateSurvey}></Route>
    		<Route path="completesurvey" name="completesurvey" component={Survey}></Route>
    	</Route>
  	</Router>, app);