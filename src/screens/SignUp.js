import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import DefaultButton from '../components/buttons/DefaultButton.js';
import { Button, Text } from 'react-native-elements';
import { Input } from 'react-native-elements';

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading} h1>Sign Up</Text>
        <Input style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
      placeholder= "Full Name" placeholderTextColotr= "#ffffff" />

        <Input style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
      placeholder= "Mobile Number" placeholderTextColotr= "#ffffff" />

        <Input style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
      placeholder= "Password" secureTextEntry= {true} placeholderTextColotr= "#ffffff" />

        <Input style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
      placeholder= "Confirm Password" secureTextEntry= {true} placeholderTextColotr= "#ffffff" />

        <Button title='Sign Up'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  heading: {
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginTop: 100,
    margin: 20,
    marginBottom: 100,
    color: "#4266b2"
  },

  inputBox: {
    width: 250,
    color: '#ffffff'
  },
  button: {
    marginTop: 100
  }




});
