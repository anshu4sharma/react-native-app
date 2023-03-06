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
      <ScrollView>
        <View style={styles.grid}>
          {[...Array(100)].map((_, index) => {
            return (
              <Text key={index} style={styles.div}>
                {index}
              </Text>
            );
          })}
        </View>
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
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 1,
    height: 100,
    width: 100,
    textAlignVertical: 'center',
    margin: 2,
    // padding: 4,
  },
  grid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
  },
});
