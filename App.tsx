/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

let users = [
  {
    name: 'anshu',
    data: ['bca', 'mca'],
  },
  {
    name: 'sharma',
    data: ['bba', 'ccca'],
  },
];
const App = () => {
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
      <SectionList
        sections={users}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text>{name} : anmshu </Text>
        )}
      />
      <Button title="pressme" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    margin: 10,
    fontSize: 30,
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
