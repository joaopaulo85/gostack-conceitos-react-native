import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },
})

export default App;