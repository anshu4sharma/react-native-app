import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const App = () => {
  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll={true}
      extraScrollHeight={100}
      scrollEnabled={true}
      enableOnAndroid={true}>
      <ScrollView>
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            margin: 20,
            padding: 10,
          }}
          autoFocus={true}
        />
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            margin: 20,
            padding: 10,
            marginVertical: 10,
          }}
        />
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            margin: 20,
            marginVertical: 10,
            padding: 10,
          }}
        />
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginVertical: 10,
            margin: 20,
            padding: 10,
          }}
        />
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            margin: 20,
            marginVertical: 10,
            padding: 10,
          }}
        />
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginVertical: 10,
            margin: 20,
            padding: 10,
          }}
        />
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginVertical: 10,
            margin: 20,
            padding: 10,
          }}
        />
        <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginVertical: 10,
            margin: 20,
            padding: 10,
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            margin: 20,
            alignItems: 'center',
            marginVertical: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default App;
