import React from 'react';
import Icons from '../utils/Icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { wp, hp} from '../utils/globalVariables';
import { useTheme } from 'react-native-paper';
import { Homepage, Account, Customers, History } from '../../screens';


const Tab = createMaterialBottomTabNavigator();


function BottomTab() {

  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"

  return (
    <>
                <Tab.Navigator
                  screenOptions={({route}) => ({
                  headerShown: false,
                  tabBarIcon: ({focused}) => {
                    let iconName;

                    if (route.name === 'Homepage') {
                      iconName = focused ? 'home-circle-outline-red' : 'home-circle-outline-blue';
                    } else if (route.name === 'History') {
                      iconName = focused ? 'file-text-red' : 'file-text-blue';
                    } else if (route.name === 'Customers') {
                      iconName = focused ? 'customer-red' : 'customer-blue';
                    } else if (route.name === 'Account') {
                      iconName = focused ? 'account-circle-red' : 'account-circle-blue';
                    }
                    return <Icons name={iconName} />;
                  }
                  })}
                  initialRouteName='Homepage'
                  activeColor="#FB6A0F"
                  inactiveColor="#034273"
                  barStyle={{ 
                    backgroundColor: '#F3F3F3',
                    height: hp(8),
                    width: wp(100),
                  }}
                >

                  <Tab.Screen 
                name="Homepage" 
                component={Homepage} 
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                  }}
                  />

                <Tab.Screen 
                name="History" 
                component={History}
                options={{
                    headerShown: false,
                    tabBarLabel: 'History',
                  }}
                />
                <Tab.Screen 
                name="Customers" 
                component={Customers}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Customers'
                  }} 
                />
                <Tab.Screen 
                name="Account" 
                component={Account}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Account',
                  }} 
                />
                </Tab.Navigator>
    </>
  )
}

export default BottomTab;