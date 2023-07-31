import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    data: {
      email: string;
      name: string;
    }
}

export const UserInfo = (props: Props) => {
  return (
    <View style = {styles.mainContainer}>
      <Text>{props?.data?.email}</Text>
      <Text>{props?.data?.name}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'green',
        margin: 20,
        padding: 10,
        width: '80%'
    }
})