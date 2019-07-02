import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ActivityIndicator,TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon/'
    }
  }

  componentDidMount(){
    this.getPokemon();
  }
  onSubmit=(item) =>{    
    this.setState({
      isLoading: true,
    })    
    this.props.navigation.navigate('PantallaPrincipal',{
      prueba : item
    }
    );
  }

  getPokemon = () => {
    this.setState({loading: true})
    fetch(this.state.url)
    .then(res => res.json())
    .then(res => {

      this.setState({
        pokemon : res.results, 
        url: res.next,
        loading: false
      })
    })
   .catch((error) => {
    console.log(error)
   });

  };

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
          <FlatList
            data = {this.state.pokemon} 
            renderItem = {
              ({item}) => 
              <TouchableOpacity onPress={() =>this.onSubmit(item.url)}>
              <Text style = {styles.items}>{item.name}</Text>
              </TouchableOpacity>
            }
          />
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
