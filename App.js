import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
 
import AddTodo from './src/Screens/AddTodo'
import Welcome from './src/Screens/Welcome'

const Stack = createStackNavigator()
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Welcome'
        component={Welcome}
      />
      <Stack.Screen
        name='AddTodo'
        component={AddTodo} />
     
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
