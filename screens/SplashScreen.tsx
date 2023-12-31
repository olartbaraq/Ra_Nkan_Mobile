import { useNavigation } from '@react-navigation/native';
import { FC, useEffect } from 'react';
import { Image, View } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, ReduceMotion} from 'react-native-reanimated';
import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
// import EncryptedStorage from 'react-native-encrypted-storage';

const duration = 2000;


const SplashScreen : FC = () : React.JSX.Element => {

  // EncryptedStorage.clear();

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const defaultAnim = useSharedValue(0);

  const animatedDefault = useAnimatedStyle(() => ({
      transform: [{ scale: defaultAnim.value + 0.3},
        {translateY: defaultAnim.value + 150},
        // {translateX: defaultAnim.value - 1},
      
      ]
  }));

  useEffect(() => {
    defaultAnim.value = withTiming(defaultAnim.value + 0.5, {
      duration,
      easing: Easing.inOut(Easing.ease),
      reduceMotion: ReduceMotion.System,
  }),

  setTimeout(() => navigation.navigate("Onboarding"), 3000);
  }, [])
  


  return (
    <View className='items-center justify-center'>
      <Animated.View className="items-center w-full" style={animatedDefault}>
        <Image 
          source={require('../assets/images/RaNkan_logo.png')}
          className='size-10 self-center'/>
      </Animated.View>

    </View>
  )
}


// const styles = StyleSheet.create({

// });

export default SplashScreen;