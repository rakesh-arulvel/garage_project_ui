import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import DefaultButton from '../components/buttons/DefaultButton.js';
import { ListItem } from 'react-native-elements';

const list  = 
  [
  {
    title: 'My Bookings',
    route: 'Bookings',
      icon: 'av-timer'
  },
  {
    title: 'Rent a new Space',
    route: 'Rentals',
    icon: 'av-timer'
  },
  {
    title: 'My Spaces',
    route: 'Spaces',
    icon: 'av-timer'
  }
  ];
export default class Panel extends Component {
  static navigationOptions = { header: null }
  render() {
    return (
      <View style={styles.container}>
        
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              onPress={() => this.props.navigation.navigate(item.route)}
              badge={{ value: (Math.random()*10).toFixed(), textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
            />
          ))
        }
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
