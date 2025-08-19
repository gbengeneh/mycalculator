import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
   <Tabs
   screenOptions={{
    tabBarActiveTintColor: '#ff9500',
    headerShown: false,
    tabBarStyle: Platform.select({
        ios:{
            position: 'absolute',
        },
        default:{}
    }),
   }}
   >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Calculator',
        tabBarStyle:{ display: 'none' },
    }}
    />
   </Tabs>
  )
}

export default TabLayout