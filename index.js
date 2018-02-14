import { AppRegistry } from 'react-native';
import App from './App';
import Map from './src/pages/Map';

import {
    StackNavigator,
  } from 'react-navigation';
  const NavigationStack = StackNavigator({
    HomeScreen: {screen: App, navigationOptions: {
        title: 'Home',
      } },
  
    MapScreen: { screen: Map, navigationOptions: {
        title: 'Map',
      } }
  });

AppRegistry.registerComponent('PlaceLocator', () => NavigationStack);
