import {Text, Animated, FlatList} from 'react-native';
import React, {useEffect} from 'react';

const App = () => {
  const opacityValue = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
      renderItem={({item}) => (
        <Animated.View
          style={{
            backgroundColor: 'red',
            borderRadius: 10,
            marginVertical: 4,
            padding: 10,
            marginHorizontal: 10,
            opacity: opacityValue,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
            }}>
            {item} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam
          </Text>
        </Animated.View>
      )}
    />
  );
};

export default App;
