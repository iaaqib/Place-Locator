/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableHighlight
  ,Dimensions, Button
} from 'react-native';
import MapView from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {isLoading: true}
  }


  onPressLocatePlaces(){
   
    this.props.navigation.navigate('MapScreen', {data: 'Coming From FirstScreen'})

   
  }


  render() {
   // const {navigate} = this.props.navigation;
   
    return (
     

     
      <View style={styles.container}>
     <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MapScreen', {data: 'Coming From FirstScreen'})}}>
     <Text> Locate Places </Text>
     </TouchableHighlight>
     <TouchableHighlight  onPress={() => {this.props.navigation.navigate('MapScreen', {data: 'Coming From FirstScreen'})}}>
     <Text> Show Directions </Text>
     </TouchableHighlight>
     </View>
    

    );
  }
 

  
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  bodyContainer: {
    flexDirection: 'column',
    width: '100%',
    height: Dimensions.get('window').height/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0',
    
     
  },
  buttons: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
