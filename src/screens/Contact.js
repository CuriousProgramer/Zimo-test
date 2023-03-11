import { View, Text,Image, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Divider from '../components/Divider'

export default function Contact() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Header/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})