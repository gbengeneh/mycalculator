import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'

const Calculator = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>

      </View>
       
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        
    },
    displayContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    diplayText: {
      fontSize: 60,
      color: Colors.text.primary,
      fontWeight: '200',
    },
    buttonsContainer: {
        flex: 5,
        padding: 10,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        height: 70,
        borderRadius: 35,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '400',
    },

})