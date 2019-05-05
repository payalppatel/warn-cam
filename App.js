import React from 'react';
import { 
  createAppContainer, 
  createStackNavigator, 
  createSwitchNavigator 
} from 'react-navigation';


import HomeScreen from './src/Pages/HomeScreen';

import MagnetoHomeScreen from './src/Pages/MagnetoHomeScreen';

import InfraredHomeScreen from './src/Pages/InfraredHomeScreen';

import RFHomeScreen from './src/Pages/RFHomeScreen';

export default createAppContainer(createSwitchNavigator(
  {
    Home: HomeScreen, 
    MagnetoMeter: MagnetoHomeScreen, 
    InfraredSensor: InfraredHomeScreen, 
    RFSensor: RFHomeScreen
  },{
    initialRouteName: 'Home',
  }
));