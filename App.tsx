/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <View>
        <Text>{text}</Text>
        <TextInput
          style={styles.text}
          value={text}
          onChangeText={v => setText(v)}
          placeholder="fuclk sd as da sd"
        />
        <TextInput
          style={styles.text}
          value={text}
          onChangeText={v => setText(v)}
          placeholder="fuclk sd as da sd"
          secureTextEntry
        />
        <Button title="clea all" onPress={() => setText('')} />
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    color: 'red',
    margin: 10,
  },
});
