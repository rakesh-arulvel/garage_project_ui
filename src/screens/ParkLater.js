import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

export default class ParkLater extends React.Component {

  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPressIncrease = () => {
    this.setState({
      count: this.state.count+30
    })
  }

  onPressDecrease = () => {
    this.setState({
      count: (this.state.count == 0) ? 0 :this.state.count-30
    })
  }

 render() {
    return (

      <View style={styles.container}>
      <View style={[styles.countContainer]}>
      <Text> Next </Text>
        <Text style={[styles.countText]}>
          { this.state.count !== 0 ? this.state.count: null}
        </Text>
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

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 100
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: 'red',
    fontSize: 40,
  }
})
