/**
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from "react-navigation";

import styles from './App.component.style';

import Header from './app/components/Header/Header.component';
import Main from './app/components/Main/Main.component';

const AppNavigator = createStackNavigator(
  {
    Home: Main
  },
  { initialRouteName: 'Home' }
);
const AppContainer = createAppContainer(AppNavigator);

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.body}>
        <Header />
        <AppContainer />
      </View>
    );
  }
}