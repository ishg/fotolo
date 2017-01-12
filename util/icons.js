import React, { Component } from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyIcon extends Component {
  constructor(props){
    super(props);
    this.state = props;
  }
  render(){
    let name = this.state.name;
    let outline = this.state.outline;
    let size = this.state.size;
    let color = this.state.color;
    
    let iconName = Platform.OS === 'android' ? `md-${this.state.name}` : `ios-${this.state.name}`;
    if (Platform.OS === 'ios' && this.state.outline) {
      iconName = `${iconName}-outline`;
    }
    return(
      <Icon name={iconName} size={this.state.size} color={this.state.color} />
    )
  }
}