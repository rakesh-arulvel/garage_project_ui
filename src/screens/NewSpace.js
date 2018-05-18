import React from 'react';
import { StyleSheet, View, TextInput, Picker } from 'react-native';
import DefaultButton from '../components/buttons/DefaultButton.js';
import { Button, Text } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
export default class NewSpace extends React.Component {
  static navigationOptions = { header: null }
  state = {
    slot_type: 'bike'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading} h1>Create A New Space</Text>
        <Input style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
      placeholder= "Full Name" placeholderTextColotr= "#ffffff" />

        <Input style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
      placeholder= "Name your space" placeholderTextColotr= "#ffffff" />

        <Input style={styles.inputBox} underlineColorAndroid= 'rgba(0,0,0,0)'
      placeholder= "How many slots" secureTextEntry= {true} placeholderTextColotr= "#ffffff" />

      <Picker
        selectedValue={this.state.slot_type}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({slot_type: itemValue})}>
        <Picker.Item label="Bike" value="bike" />
        <Picker.Item label="Car" value="car" />
      </Picker>


      <SearchBar lightTheme style={styles.searchBar}
  placeholder='Destination Here...'
                    onEndEditing={(text) => this.handleSearch(text)}
   />

        <Button icon={
          <Icon
            name='arrow-right'
            size={15}
            color='#4266b2'
          />
        } title='Confirm Booking' onPress={() => this.props.navigation.navigate('Dashboard')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

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
    color: '#ffffff',
    marginTop:10
  },
  button: {
    marginTop: 50
  }




});
