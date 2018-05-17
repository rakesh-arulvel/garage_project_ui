import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DefaultButton from '../components/buttons/DefaultButton.js';

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Sign In</Text>
        <TextInput style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
        placeholder= "Mobile Number" placeholderTextColotr= "#ffffff" />

        <TextInput style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
        placeholder= "Password" secureTextEntry= {true} placeholderTextColotr= "#ffffff" />

        <DefaultButton text='Sign In'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    color:'blue',
    fontSize: 30,
  },

  inputBox: {
  width: 250,
  height: 40,
  marginBottom: 30,
  marginTop: 5,
  backgroundColor: 'rgba(128,128,128,0.3)',
  borderRadius: 25,
  paddingHorizontal: 16,
  fontSize: 16,
  color: '#ffffff',


}

});
