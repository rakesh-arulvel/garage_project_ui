import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DefaultButton from '../components/buttons/DefaultButton.js';
import { createStackNavigator } from 'react-navigation'

export default class SignUp extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome</Text>
        <DefaultButton text='Sign Up' navigation={this.props.navigation} route='SignUp' />
        <DefaultButton text='Sign in' navigation={this.props.navigation} route='SignIn' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  heading: {
    color:'blue',
    fontSize: 30

  }

});
