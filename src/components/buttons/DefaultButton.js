import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';


export default class DefaultButton extends Component {

  render() {
  	const {
      text,
      route,
      navigation
    } = this.props;
  	// const backgroundColor = background || 'transparent';
  	// const color = textColor || colors.black;
    // const fontSize = textSize || 16;
    // const fontWeight = textWeight || '600';
    // const alignPosition = textAlign || 'center';
    // const iconLocation = iconPosition || 'left';
    // const border = borderColor || colors.white;
    // const opacityStyle = disabled || loading ? 0.5 : 1;
    // const textOpacity = loading ? 0 : 1;

    // const navigate = () => {
    //   debugger
    //   console.log('route', {route});
    //   this.props.navigation.navigate(route);
    // }

    return (
      <TouchableHighlight style={styles.button}  onPress={() => navigation.navigate(route) }>
        <Text>{text}</Text>
      </TouchableHighlight>
    );
  }
}

// RoundedButton.propTypes = {
//   text: PropTypes.string.isRequired,
//   textColor: PropTypes.string,
//   textSize: PropTypes.string,
//   textWeight: PropTypes.string,
//   textAlign: PropTypes.string,
//   background: PropTypes.string,
//   borderColor: PropTypes.string,
//   icon: PropTypes.object,
//   iconPosition: PropTypes.string,
//   handleOnPress: PropTypes.func.isRequired,
//   disabled: PropTypes.bool.isRequired,
//   loading: PropTypes.bool.isRequired,
// };

const styles = StyleSheet.create({
   button: {
    display: 'flex',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#DDDDDD',
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 15,
    marginTop: 55,
    alignItems: 'center',
  }
});
