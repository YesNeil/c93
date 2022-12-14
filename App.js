import React from 'react';
import { View, Text, StyleSheet, Button, StatusBar  } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from "./screens/LoginScreen"
import DrinkScreen from './screens/DrinkScreen'



const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen"   screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="DrinkScreen" component={DrinkScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}