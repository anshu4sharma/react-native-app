/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

let users = [
  {
    name: 'anshu',
  },
  {
    name: 'sharma',
  },
];
const App = () => {
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
      />
      <ScrollView style={styles.div}>
        {[...Array(100)].map((_, index) => {
          return <Text>{index}</Text>;
        })}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    margin: 10,
    fontSize: 40,
  },
  div: {
    display: 'flex',
    gap: 10,
    textAlign: 'center',
  },
});
