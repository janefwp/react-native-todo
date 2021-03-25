import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import About from '../screens/about'


const Stack = createStackNavigator()

export default function AboutStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>            
        
    )
}

const styles = StyleSheet.create({})
