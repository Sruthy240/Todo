import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Splash from './src/Splash'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Splash from './src/Splash'
import Screens from './src/Screens'

const Stack = createStackNavigator()
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Splash'
        component={Splash}
      />
      <Stack.Screen
        name='Screens'
        component={Screens} />
     
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>

      <MyStack />

    </NavigationContainer>
  )
}

const Stack = createStackNavigator()
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Splash'
        component={Splash}
      />
      <Stack.Screen
        name='Screens'
        component={Screens} />
      <Stack.Screen
        name='Service'
        component={Service} />
      <Stack.Screen
        name='Companies'
        component={Companies} />
      <Stack.Screen
        name='Workers'
        component={Workers} />
      <Stack.Screen
        name='Profile'
        component={Profile} />
      <Stack.Screen
        name='Saved'
        component={Saved}
      />
      <Stack.Screen
        name='Contact'
        component={Contact}
      />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>

      <MyStack />

    </NavigationContainer>
  )
}



import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
import AddTodo from './src/Screens/AddTodo'
import Welcome from './src/Screens/Welcome'
export default class App extends Component{
  render(){
    return(
      <View style = {{flex:1}}>
        {/* <AddTodo/> */}
       
      </View>
    )
  }
}