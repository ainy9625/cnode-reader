import React, { Component } from 'react';
import logo from './cnodejs_light.png';
import { BrowserRouter as Router, Route, Switch, Link , Redirect } from "react-router-dom";
import List from "./components/list/index";
import Details from './components/details/index';
import './App.css';


class App extends Component {
  render() {
    return (
     
      <Router>
        <div>
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="search" className="App-search"/>
          <ul className="App-nav">
            <li><Link to="../list" className="backIndex">首页</Link></li>
            <li><a>新手入门</a></li>
            <li><a>API</a></li>
            <li><a>关于</a></li>
            <li><a>注册</a></li>
            <li><a>登录</a></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/list/:type/:pageNumber/:pageSize*" component={List}></Route>
          <Route path="/details" component={Details}></Route>
      
          <Redirect from="/list" to="/list/ask/1" />
          <Redirect exact path="/" to="/list" />
        </Switch>
       
        </div>

        
      </Router>
    );
  }
}

export default App;
