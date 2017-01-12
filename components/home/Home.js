import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import Gallery from '../gallery/Gallery';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const routes = [
      {title: 'Gallery', component: Gallery},
      {title: 'Other', component: Gallery},
    ]
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={routes[0]}
        translucent={true}
        tintColor={'#2962FF'}
        titleTextColor={'#2962FF'}
        backgroundColor={'#2962FF'}
        navigationBarHidden={true}/>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});