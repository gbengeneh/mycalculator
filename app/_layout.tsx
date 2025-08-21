import {  Pressable, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs, useRouter } from 'expo-router'

const RootLayout = () => {
  const router = useRouter()
  return (
   <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{ headerShown: false }}/>
   </Stack>
  )
}

export default RootLayout

