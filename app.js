import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Home from './components/home/Home';
// import Login from './components/login/Login';

export default class fotolo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    // decide here whether to route to Login or Home
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('fotolo', () => fotolo);
