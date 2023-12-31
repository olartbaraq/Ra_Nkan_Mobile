import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import BackgroundColor from 'react-native-background-color';
import { StaffAuth, CustomerDetails, OrderSummary, CustomerHistory, 
  PaymentHistory, BillsHistory, CustomerAccount, Payment, WebViewDisplay,
  Flutterwave, Error404, InitializeError } from '../screens'
import BottomTab from './BottomTab';

const Stack = createStackNavigator();


function RootStack() {

    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          border: "transparent",
          background: '#fff',
        }
    }

    useEffect(() => {
        BackgroundColor.setColor('#FFFFFF');
    }, []);

  return (
    <>
    <NavigationContainer theme={theme}>
        <Stack.Navigator
        initialRouteName='Staff Auth'
        screenOptions={{
            header: () => null
        }}
        >
          <Stack.Screen name='Staff Auth' component={StaffAuth}/>

          <Stack.Screen name='BottomTab' component={BottomTab}/>

          <Stack.Screen name='CustomerDetails' component={CustomerDetails}/>

          <Stack.Screen name='Order Summary' component={OrderSummary}/>

          <Stack.Screen name='Customer History' component={CustomerHistory}/>

          <Stack.Screen name='Payment History' component={PaymentHistory}/>

          <Stack.Screen name='Bill History' component={BillsHistory}/>

          <Stack.Screen name='Customer Account' component={CustomerAccount}/>

          <Stack.Screen name='Payment' component={Payment}/>

          <Stack.Screen name='Webview' component={WebViewDisplay}/>

          <Stack.Screen name='Flutterwave' component={Flutterwave}/>

          <Stack.Screen name='Error404' component={Error404}/>

          <Stack.Screen name='InitializeError' component={InitializeError}/>

        </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default RootStack;