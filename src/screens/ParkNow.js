import React, { Component } from 'react';
//import DefaultButton from '../components/buttons/DefaultButton.js';
import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ParkNow extends React.Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = { count: 30 }
  }

  onPressIncrease = () => {
    this.setState({
      count: this.state.count+30
    })
  }

  onPressDecrease = () => {
    this.setState({
      count: (this.state.count == 30) ? 30 :this.state.count-30
    })
  }

 render() {
    return (

      <View style={styles.container}>
      <View style={[styles.countContainer]}>
      <Text h5> Book for the next </Text>
        <Text style={[styles.countText]} h4> 
          { this.state.count !== 0 ? this.state.count: null}
        </Text><Text h5> minutes</Text>
      </View>
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPressDecrease}
        >
         <Text> - </Text>
        </TouchableHighlight>
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPressIncrease}
        >
         <Text> + </Text>
        </TouchableHighlight>


        <Button icon={
          <Icon
            name='arrow-right'
            size={15}
            color='white'
          />
        } title='View Nearby Slots' onPress={() => this.props.navigation.navigate('MapView')}  route='MapView'/>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 100,
    backgroundColor: '#fff'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#BEBEBE',
    padding: 10,
    marginBottom: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#4266b2',
    fontSize: 40,
  }
})
