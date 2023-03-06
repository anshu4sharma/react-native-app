import React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen asd</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen asd</Text>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
