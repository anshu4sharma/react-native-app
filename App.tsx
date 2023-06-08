import React, { useRef, useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const App = () => {
  const inputRefs = [useRef(), useRef(), useRef()]; // Refs for each input field
  const [currentInputIndex, setCurrentInputIndex] = useState(0);

  const focusNextInput = () => {
    const nextIndex = currentInputIndex + 1;
    if (nextIndex < inputRefs.length) {
      inputRefs[nextIndex].current.focus();
      setCurrentInputIndex(nextIndex);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    focusNextInput();
  };

  return (
    <View>
      <TextInput
        ref={inputRefs[0]}
        placeholder="First input"
        onSubmitEditing={focusNextInput}
        returnKeyType="next"
      />
      <TextInput
        ref={inputRefs[1]}
        placeholder="Second input"
        onSubmitEditing={focusNextInput}
        returnKeyType="next"
      />
      <TextInput
        ref={inputRefs[2]}
        placeholder="Third input"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default App;
