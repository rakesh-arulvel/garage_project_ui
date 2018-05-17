import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import DefaultButton from '../components/buttons/DefaultButton.js';

export default class Panel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {
              title: 'Booking One',
            },
            {
              title: 'Booking Two',
            },
            {
              title: 'Booking Three',
            }
          ]}
          renderItem={({item}) =>
            <Text>{item.title}</Text>
          }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
