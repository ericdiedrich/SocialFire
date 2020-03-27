import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import HomeScreen from './screens/HomeScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDg1q_qO5wIJoo2M7EgdcTtvBNaPMAzsRc",
  authDomain: "socialfire-21bf6.firebaseapp.com",
  databaseURL: "https://socialfire-21bf6.firebaseio.com",
  projectId: "socialfire-21bf6",
  storageBucket: "socialfire-21bf6.appspot.com",
  messagingSenderId: "490621969920",
  appId: "1:490621969920:web:b1dc40b2406cd39bd45ae5"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator ({
  Home: HomeScreen
});

const AuthStack = createStackNavigator ({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Loading'
  })
);