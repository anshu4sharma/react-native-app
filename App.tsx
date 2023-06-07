import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
interface WifiNetwork {
  BSSID: string;
  SSID: string;
  capabilities: string;
  frequency: number;
  level: number;
  timestamp: number;
}
const App = () => {
  const [wifiList, setWifiList] = useState<WifiNetwork[]>([]);
  const [isPasswordModalVisible, setPasswordModalVisible] = useState(false);
  const [selectedSSID, setSelectedSSID] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    requestLocationermission();
    // getCurrentWifiSSID();
    const interval = setInterval(() => {
      getAvailableWifiNetworks();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
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

  const requestLocationermission = async () => {
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

  const connectToWifiDevice = (ssid: string) => {
    setPasswordModalVisible(true);
    setSelectedSSID(ssid);

  };
  const checkPasswordRequired = (capabilities: string) => {
    if (capabilities.includes('[WEP]') || capabilities.includes('[WPA-')) {
      return true; // Password is required
    }
    return false; // No password required
  };

  return (
    <View
      style={{
        backgroundColor: '#242B2E',
        height: '100%',
        width: '100%',
      }}>
      <StatusBar
        showHideTransition={'fade'}
        animated
        backgroundColor="#242B2E"
        barStyle="light-content"
      />
      <FlatList
        data={wifiList}
        keyExtractor={item => item.SSID}
        renderItem={({item}) => (
          <TouchableHighlight
            key={item.SSID}
            style={{
              backgroundColor: '#242B2E',
              borderRadius: 10,
              padding: 20,
              margin: 10,
              borderWidth: 1,
              borderColor: 'white',
            }}
            onPress={() => connectToWifiDevice(item.SSID)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <MaterialIcons
                  name={
                    checkPasswordRequired(item.capabilities)
                      ? 'wifi-lock'
                      : 'network-wifi'
                  }
                  size={16}
                  color={'white'}
                />
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Connect to {item.SSID}
                </Text>
              </View>
              <Text
                style={{
                  color: 'white',
                }}>
                {item.level}
              </Text>
            </View>
          </TouchableHighlight>
        )}
      />
      <Modal onBackdropPress={()=>setPasswordModalVisible(false)} isVisible={isPasswordModalVisible}>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            padding: 20,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
            }}>
            Enter Password for {selectedSSID}
          </Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor="white"
            style={{
              color: 'white',
              borderBottomWidth: 0.5,
              borderColor: 'white',
            }}
            autoFocus
          />
        </View>
      </Modal>
    </View>
  );
};

export default App;
