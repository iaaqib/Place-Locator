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
  View,
  Button
} from 'react-native';
import  MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



export default class Map extends Component {


  constructor(props){
    super(props)

    this.state = {isLoading: true}
  }

  render() {
    const {isLoading} = this.state;
    if (isLoading){
      return <View></View>
    }
    return (

 <MapView style={styles.container}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
 

    );
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      300
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      isLoading: false
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
