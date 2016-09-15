import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import BusinessIntelligence from "./pages/BusinessIntelligence";
import CreateSurvey from "./pages/CreateSurvey";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Survey from "./pages/Survey";

const app = document.getElementById('app');

// https://github.com/ReactTraining/react-router/blob/efac1a8ff4c26d6b7379adf2ab903f1892276362/examples/auth-flow/app.js#L122
function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

ReactDOM.render(
	<Router history={hashHistory}>
    	<Route path="/" component={Layout}>
    		<IndexRoute component={Home}></IndexRoute>
    		<Route path="login" name="login" component={Login}></Route>
    		<Route path="createsurvey" name="createsurvey" component={CreateSurvey}></Route>
    		<Route path="completesurvey" name="completesurvey" component={Survey}></Route>
    		<Route path="businessintelligence" name="businessintelligence" component={BusinessIntelligence}></Route>
    	</Route>
  	</Router>, app);