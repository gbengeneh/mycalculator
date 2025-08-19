import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calculator from '@/components/Calculator'

const HomeScreen = () => {
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