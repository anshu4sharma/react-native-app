import {
  View,
  Text,
  Button,
  FlatList,
  TouchableHighlight,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';

const App = () => {
  const [wifiList, setWifiList] = useState([]);

  useEffect(() => {
    requestCameraPermission();
    getCurrentWifiSSID();
    getAvailableWifiNetworks();
  }, []);

  const getAvailableWifiNetworks = () => {
    WifiManager.loadWifiList()
      .then(wifiList => {
        setWifiList(wifiList);
        console.log('Available WiFi networks:', wifiList);
      })
      .catch(() => {
        console.log('Error loading WiFi networks!');
      });
  };

  const getCurrentWifiSSID = () => {
    WifiManager.getCurrentSignalStrength().then(res => {
      console.log('res', res);
    });
    WifiManager.getFrequency().then(res => {
      console.log('frequency', res);
    });

    WifiManager.getIP().then(res => {
      console.log('Ip', res);
    });

    WifiManager.getCurrentWifiSSID()
      .then(ssid => {
        console.log('Your current connected wifi SSID is ' + ssid);
      })
      .catch(() => {
        console.log('Cannot get current SSID!');
      });
  };

  const requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission is required for WiFi connections',
        message:
          'This app needs location permission as this is required ' +
          'to scan for WiFi networks.',
        buttonNegative: 'DENY',
        buttonPositive: 'ALLOW',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      // You can now use react-native-wifi-reborn
    } else {
      console.log('Location permission denied');
      // Permission denied
    }
  };

  const connectToWifiDevice = ssid => {
    const password = 'anshu1234';
    const isWep = false;
    WifiManager.connectToProtectedSSID(ssid, password, isWep, false)
      .then(() => {
        console.log('Connected successfully to WiFi device:', ssid);
      })
      .catch(() => {
        console.log('Connection failed to WiFi device:', ssid);
      });
  };

  return (
    <View
      style={{
        backgroundColor: '#242B2E',
        height: '100%',
        width: '100%',
      }}>
      <StatusBar showHideTransition={"fade"} animated backgroundColor="#242B2E" barStyle="light-content" />
      <FlatList
        data={wifiList}
        renderItem={({item}) => (
          <TouchableHighlight
            key={item.SSID}
            style={{
              backgroundColor: '#0D0D0D',
              borderRadius: 10,
              padding: 20,
              margin: 10,
            }}
            onPress={() => connectToWifiDevice(item.SSID)}>
            <Text
              style={{
                color: 'white',
              }}>{`Connect to ${item.SSID}`}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default App;
