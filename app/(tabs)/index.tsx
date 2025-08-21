import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calculator from '@/components/Calculator'
import { useRouter } from 'expo-router'

const HomeScreen = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Calculator />
     
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
})