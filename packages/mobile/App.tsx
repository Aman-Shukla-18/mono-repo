import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {msg,logFxn,SharedUIComponent} from 'shared'

type Props = {}

const App = (props: Props) => {
  return (
    <View style = {styles.mainContainer}>
      <Text style = {styles.heading}>From React Native</Text>
      <Text style = {styles.heading}>{msg}</Text>
      <Text onPress = {logFxn} style = {styles.heading}>Press me and see log</Text>
      <SharedUIComponent onPress = {() => {
          console.log("Called from mobile")
        }} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#489327'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#bbb213'
  }
})