
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class Home extends Component {

     componentDidMount(){
          const prueba = this.props.navigation.getParam('prueba', 'NO-ID');
          
     }

  render() {
    return (
      <View>
        <Text>This is the Home screen</Text>
      </View>
    )
  }
};

export default Home;