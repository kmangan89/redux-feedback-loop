import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  componentDidMount() { 
    //this.getPizzas();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(App);