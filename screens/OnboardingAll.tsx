import React, { FC, useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper';
import {wp, hp } from '../utils/globalvariables';
import LinearGradient from 'react-native-linear-gradient';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';





const OnboardingAll : FC = () : React.JSX.Element => {
    
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    useEffect(() => {
        const autoRedirect = () => {
            setTimeout(() => {
                navigation.navigate('LetUIn');
            }, 7000);
        }
        
        autoRedirect()
    }, [])


  return (
    <>
        <Swiper
            //style={styles.wrapper} 
            autoplay={true}
            autoplayTimeout={2.5}
            removeClippedSubviews={false}
            dotStyle={{
                backgroundColor: '#000',
                width: wp(2),
                height: hp(1),
                borderRadius: 5,
            }}
            activeDotStyle={{
                width: wp(2),
                height: hp(1),
                borderRadius: 5,
                backgroundColor: '#FFC992'
            }}
            //paginationStyle={styles.pagination}
        >
            <ImageBackground
                source={require("../assets/images/illustration_pretty_black_girl_with_shopping_lis-removebg-preview.png")}
                style={styles.image}
                resizeMode="contain"
                // className='w-fit h-fit'
            >
                <LinearGradient
                    colors={['#979797', 'transparent', ]}
                    useAngle={true} angle={30} angleCenter={{x:0.1,y:0.1}}
                    className='h-60 items-center py-10'
                >
                    <View className='flex flex-col space-y-10 items-center'>
                        <Text className='text-black text-4xl font-semibold text-center px-5'>
                            Let's fulfill your daily needs with Ra'Nkan right now!
                        </Text>
                    </View>
                </LinearGradient>
            </ImageBackground>

            <ImageBackground
                source={require("../assets/images/illustration_pretty_black_dude_with_shopping_cer-removebg-preview.png")}
                style={styles.image}
                resizeMode="contain"
                // className='w-fit h-fit'
            >
                <LinearGradient
                    colors={['#979797', 'transparent', ]}
                    useAngle={true} angle={30} angleCenter={{x:0.1,y:0.1}}
                    className='h-60 items-center py-10'
                >
                    <View className='flex flex-col space-y-10 items-center'>
                        <Text className='text-black text-4xl px-5 font-semibold text-center'>
                            Your satisfaction is our number one priority
                        </Text>
                    </View>
                </LinearGradient>
            </ImageBackground>

            <ImageBackground
                source={require("../assets/images/illustration_pretty_black_girl_with_shopping_car-removebg-preview.png")}
                style={styles.image}
                resizeMode="contain"
                // className='w-fit h-fit'
            >
                <LinearGradient
                    colors={['#979797', 'transparent', ]}
                    useAngle={true} angle={30} angleCenter={{x:0.1,y:0.1}}
                    className='h-60 items-center py-10'
                >
                    <View className='flex flex-col space-y-10 items-center'>
                        <Text className='text-black text-4xl px-5 font-semibold text-center'>
                            We provide high quality products just for you
                        </Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </Swiper>
    </>
  )
}

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: "100%",
        alignSelf: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: wp(0),
    },

    pagination : {
    
    },
})

export default OnboardingAll