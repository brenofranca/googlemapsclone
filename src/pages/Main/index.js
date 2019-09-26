import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <View style={styles.container}>
    <Text style={[styles.welcome]}>HOME</Text>
  </View>
);

export default Main;
