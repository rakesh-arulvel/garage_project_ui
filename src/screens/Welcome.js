import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultButton from '../components/buttons/DefaultButton.js';
import { createStackNavigator } from 'react-navigation';
import { Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUp extends React.Component {
static navigationOptions = { header: null }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.heading} h1>ParkIt</Text>
        
        <Button raised style={styles.buttons}
          title='Sign Up'  backgroundColor='#462066'
          containerStyle={{ marginTop: 20 }}
        icon={
          <Icon
            name='arrow-right'
            size={15}
            color='white'
          />
        }
          onPress={() => this.props.navigation.navigate('SignUp')}
        />

        {/* <DefaultButton text='Sign Up'  /> */}
        <Button raised style={styles.buttons} title='Sign In' 
          icon={
            <Icon
              name='arrow-right'
              size={15}
              color='white'
            />
          }
        onPress={() => this.props.navigation.navigate('SignIn')} backgroundColor='#462066'
          containerStyle={{ marginTop: 20 }}
        />
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
    textAlign:"center",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    marginTop:100,
    margin:20,
    marginBottom:250,
    color: "#4266b2"
  },
  buttons:{
    marginBottom: 50,
    paddingBottom: 50,
    paddingVertical: 50 
  }

});
