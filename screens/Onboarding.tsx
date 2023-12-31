import React, { FC, useEffect, useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, StatusBar } from 'react-native'
import {hp, wp} from '../utils/globalvariables';
import LinearGradient from 'react-native-linear-gradient';
import { CustomText } from '../components';
import Icons from '../utils/Iconsexport';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import EncryptedStorage from 'react-native-encrypted-storage';


const Onboarding : FC = () : React.JSX.Element => {

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {

    const checkIfFirstTime = async () => {

      try {
        // Check if the 'firstTime' flag is set in AsyncStorage
        const isFirstTime = await EncryptedStorage.getItem('firstTime');

        if (isFirstTime === null) {
          // If it's the first time, set the flag and navigate to onboarding
          await EncryptedStorage.setItem('firstTime', 'false');
          setTimeout(() => {
            navigation.navigate('Onboarding All');
          }, 3000);
        } else {
          // If not the first time, navigate to login
          setTimeout(() => {
            navigation.navigate('LetUIn');
          }, 3000);
        }
      } catch (error) {
        // Handle error
        console.error('Error checking first time:', error);
      }
    };

    checkIfFirstTime();
  
  }, [navigation])
  
  return (
    <View style={styles.body}>
      <StatusBar
          backgroundColor="#C3C3C3"
          barStyle={'dark-content'}
        />
      <ImageBackground
        source={require("../assets/images/image_handsome_african_man_suitable_for_onboardi-removebg-preview.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <LinearGradient
          colors={['#414141', 'transparent']}
          useAngle={true} angle={30} angleCenter={{x:0.1,y:0.1}}
        >
          <View style={styles.imageText}>
            <View style={styles.waveBody}>
              <CustomText fontSize={hp(5)} fontWeight='500' marginRight={wp(2)} color='#000' fontFamily='Inter-Regular' text='Welcome to'/>
              <Icons name={"wave"} size={hp(5)} color={"#FFC992"} style={""}/>
            </View>
            <CustomText fontSize={hp(7)} fontWeight='bold' marginLeft={0} color='#FFC992' fontFamily='Inter-Regular' text="Ra'Nkan"/>
            <CustomText fontSize={hp(2)} fontWeight='500' marginLeft={0} color='#fff' fontFamily='Inter-Regular' text='The best e-commerce app of the century for yout daily needs'/>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  body : {
    backgroundColor: '#C3C3C3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: "100%",
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: wp(0),
  },

  imageText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: hp(5),
    paddingHorizontal: wp(10),
    width: "100%"
  },

  waveBody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  }
});

export default Onboarding