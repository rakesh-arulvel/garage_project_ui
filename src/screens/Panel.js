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
    title: 'Become a host :)',
    route: 'Spaces',
    icon: 'av-timer'
  },
  {
    title: 'My Spaces',
    route: 'Rentals',
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
              rightIcon={{ name: 'arrow-right', type: 'font-awesome', style: { marginRight: 10, fontSize: 15 } }}
              onPress={() => this.props.navigation.navigate(item.route)}
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
