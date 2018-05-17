import {
  TabNavigator,
  StackNavigator,
  TabBarBottom,
  createStackNavigator,
} from 'react-navigation';


import ParkNow from '../screens/ParkNow';
import Panel from '../screens/Panel';
import ParkLater from '../screens/ParkLater';

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

export const TabNav = TabNavigator({
  ParkNow: { screen: ParkNow },
  Panel: PanelTab,
  ParkLater: { screen: ParkLater },
}, {
  tabBarOptions: {
  	labelStyle: {
  	  fontWeight: '600',
  	  marginBottom: 5,
  	},
    activeTintColor: 'red'
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
});


export const RootStack = createStackNavigator(
  {
    Welcome: Welcome,
    SignUp: SignUp,
    SignIn: SignIn,
    Dashboard: TabNav
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default RootStack;
