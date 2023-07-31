import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {msg, logFxn, SharedUIComponent, getAPI,UserInfo} from 'shared';

type Props = {};

const App = (props: Props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAPI('https://jsonplaceholder.typicode.com/users', setData, console.log);
  }, []);
  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.heading}>From React Native</Text>
      <Text style={styles.heading}>{msg}</Text>
      <Text onPress={logFxn} style={styles.heading}>
        Press me and see log
      </Text>
      <SharedUIComponent
        onPress={() => {
          console.log('Called from mobile');
        }}
      />

      {data?.map((item, index) => (
        <UserInfo data={item} />
      ))}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#489327',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#bbb213',
  },
});
