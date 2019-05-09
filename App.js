/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './components/Home';
import About from './components/About';
import Clases from './components/Clases';


const RootStack = createStackNavigator({
  Clases: {screen: Clases},
  About: {screen: About},
});

const App = createAppContainer(RootStack);

export default App;