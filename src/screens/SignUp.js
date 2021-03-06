import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import DefaultButton from '../components/buttons/DefaultButton.js';
import { Button, Text } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class SignUp extends React.Component {
  static navigationOptions = { header: null }
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

        <Button icon={
          <Icon
            name='arrow-right'
            size={15}
            color='white'
          />
        } title='Sign Up' onPress={() => this.props.navigation.navigate('Dashboard')}/>
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
