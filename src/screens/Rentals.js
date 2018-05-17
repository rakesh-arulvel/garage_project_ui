import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import DefaultButton from '../components/buttons/DefaultButton.js';

export default class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Rent a new space</Text>
        <GooglePlacesAutocomplete
            placeholder='Enter Location'
            minLength={2}
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            styles={{
              textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth:0
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              },
            }}
            currentLocation={false}
          />
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
  }

});
