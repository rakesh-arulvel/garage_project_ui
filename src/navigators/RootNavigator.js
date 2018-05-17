import {
  TabNavigator,
  StackNavigator,
  TabBarBottom,
  createStackNavigator,
} from 'react-navigation';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ParkNow from '../screens/ParkNow';
import Panel from '../screens/Panel';
import ParkLater from '../screens/ParkLater';
import MapView from '../screens/MapView'; 
import MapViewEx from '../screens/MapViewEx'; 
import Bookings from '../screens/Bookings';


import SignUp from '../screens/SignUp.js';
import SignIn from '../screens/SignIn.js';
import Welcome from '../screens/Welcome.js';


const PanelTab = StackNavigator({
  Panel: { screen: Panel },
  Bookings: { screen: Bookings },
  // Profile: { screen: Profile },
  // Spaces: { screen: Spaces },
  // CreateList: { screen: CreateList },
},
{
  mode: 'modal',
});

export const TabNav = TabNavigator(
  {
    Now: { screen: ParkNow },
    Home: PanelTab,
    Later: { screen: ParkLater },
  }, 
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Now') {
          iconName = `md-flash`;
        } else if (routeName === 'Home') {
          iconName = `md-home`;
        }
        else if (routeName === 'Later') {
          iconName = `md-clock`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),

  tabBarOptions: {
    activeTintColor: '#4266b2',
    inactiveTintColor: 'gray',
  },
    initialRouteName: 'Home',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
});


export const RootStack = createStackNavigator(
  {
    Welcome: Welcome,
    SignUp: SignUp,
    SignIn: SignIn,
    Dashboard: TabNav,
    MapView: MapView,
    MapViewEx: MapViewEx
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default RootStack;
