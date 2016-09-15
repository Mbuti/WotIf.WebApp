import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <IndexLink to="/" class="navbar-brand">Wot-If?</IndexLink>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li>
              <Link to="createsurvey">Create a Survey</Link>
            </li>
            <li>
              <Link to="completesurvey">Complete a Survey</Link>
            </li>
            <li>
              <Link to="businessintelligence">Business Intelligence</Link>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>

        </div>
      </div>
    </div>
    );
  }
}
