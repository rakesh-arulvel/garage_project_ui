import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  TouchableOpacity
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ParkLater extends React.Component {
  static navigationOptions = { header: null }
  state = {
    isDateTimePickerVisible: true,
  };

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

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

 render() {
    var today = new Date();
    return (

      <View style={styles.container}>
      <View style={[styles.countContainer]}>
      </View>

      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="datetime"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={today}
        maxDate="2018-06-21"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="datetime"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={today}
        maxDate="2018-06-21"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

        <Button icon={
          <Icon
            name='arrow-right'
            size={15}
            color='white'
          />
        } title='Continue' onPress={() => this.props.navigation.navigate('MapViewEx')} route='MapView' />
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
