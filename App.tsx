import React, {useState} from 'react';
import {View, Button, Linking, Text} from 'react-native';

const App = () => {
  const [result, SetResult] = useState('');
  const [error, seterror] = useState('');
  const LinkOpen = async payApp => {
    let url = '';
    switch (payApp) {
      case 'PAYTM':
        url = 'paytmmp://';
        break;
      case 'GPAY':
        url = 'tez://upi/';
        break;
      case 'PHONEPE':
        url = 'phonepe://';
        break;
    }
    url =
      url + 'pay?pa=9518008087@paytm&pn=Anshu&am=1000&cu=INR&tn=Test%20payment';
    try {
      const res = await Linking.openURL(url);
      console.warn(res);
      SetResult(res);
    } catch (error) {
      seterror(error);
      console.warn(error);
    }
  };
  return (
    <View className="flex-1 justify-evenly items-center">
      <Button onPress={()=>LinkOpen("PAYTM")} title="OPen PAYTM Apps" />
      <Button onPress={()=>LinkOpen("PHONEPE")} title="OPen PHONEPE Apps" />
      <Button onPress={()=>LinkOpen("GPAY")} title="OPen GPAY Apps" />
      {result && (
        <Text className="text-red-600">Result : {JSON.stringify(result)}</Text>
      )}
      {error && (
        <Text className="text-red-600">Error : {JSON.stringify(error)}</Text>
      )}
    </View>
  );
};

export default App;
