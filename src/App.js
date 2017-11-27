import React, { Component } from "react";
import "./App.css";
import { addListener, removeListener, isAuthorized } from "./AuthorizeApi";

import { Switch, Route, Redirect, Link } from "react-router-dom";

import Home from "./Home";
import Auth from "./Auth";
import Private from "./Private";
import Public from "./Public";

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  renderAuth = () => {
    const { isAuthorized } = this.state;
    if (!isAuthorized) {
      return <Route path="/auth" component={Auth} />;
    } else {
      return <Redirect from="/auth" to="/" />;
    }
  };
  renderAuthRoute = () => {
    const { isAuthorized } = this.state;
    if (isAuthorized) {
      return <Route path="/private" component={Private} />;
    } else {
      return <Redirect from="/private" to="/auth" />;
    }
  };

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/auth">Войти</Link>
            </li>
            <li>
              <Link to="/private">Секретная старница</Link>
            </li>
            <li>
              <Link to="/public">Публичная Страница</Link>
            </li>
            <li>
              <Link to="/">Галвная</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          {this.renderAuthRoute()}
          {this.renderAuth()}
          <Route path="/public" component={Public} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
