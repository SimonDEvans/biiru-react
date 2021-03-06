import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import BeerItem from './components/BeerItem/BeerItem';
import NotFound from './components/NotFound/NotFound';
import './css/App.css';

const Container = (props) => <div>
  <Header></Header>
  {props.children}
</div>

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='BeerItem' component={BeerItem} />
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
