import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'

const HomeScreen = () => {
  return (
    //SafeAreaView creates a safearea to avoid components showing up in the absolute corners of the device.
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        color: 'white'
    }
})

export default HomeScreen