import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './src/navigators/RootNavigator.js';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'    
  }
});