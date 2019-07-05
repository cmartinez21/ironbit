
import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
export class Move extends Component{

    constructor(props){
        super(props);
        this.state = {
          loading: false,
          dataSource:[],
          url: this.props.navigation.getParam('prueba', 'NO-ID')
        }
      }

      componentDidMount() {
          alert(this.props.navigation.getParam('prueba', 'NO-ID'))
      }

      render() {
        if(this.state.loading){
          return (
            <View style={styles.container}>
              <ActivityIndicator />
            </View>
          );
        }
        return (
          <View style = {styles.container}>
              {
                //console.log(this.state.dataSource)
                <FlatList
                data = {this.state.dataSource} 
                renderItem = {
                  ({item}) => 
                  <TouchableOpacity onPress={() =>this.onSubmit(item.move.url)}>
                  <Text style = {styles.items}>{item.move.name}</Text>
                  </TouchableOpacity>
                }
              />}
          </View>
        );
      }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingTop:50,
      
      alignSelf:'stretch'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    items:{
      color: '#1136A4',
      fontSize:18,
      paddingTop:10,
      textAlign:'center',
      
    }
  });
export default Move;