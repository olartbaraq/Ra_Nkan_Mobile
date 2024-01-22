import { Image, Pressable, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { FC } from 'react'
import Icons from '../utils/Iconsexport'
import { hp, wp } from '../utils/globalvariables'
import { Header } from '../components'
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';



const LetUIn : FC = () : React.JSX.Element => {

    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const FacebookLogin = () => {
        return;
    }
    const GoogleLogin = () => {
        return;
    }
    const AppleLogin = () => {
        return;
    }
    const PasswordSignIn = () => {
        navigation.navigate('SignIn');
    }
    const GotoSignUp = () => {
        navigation.navigate("SignUp");
    }

    return (
        <View>
            <StatusBar
                backgroundColor="#fff"
                barStyle={'dark-content'}
            />
            <ScrollView 
                //className='p-5 flex flex-col space-y-14 items-center'
                contentContainerStyle={styles.contentContainer}
                >
                <View className='space-y-5 items-center w-full'>

                    {/* Header Component */}
                    <Header />

                    {/* Illustration for signIn */}
                    <Image 
                        source={require("../assets/images/illustration_log_in-removebg-preview.png")}
                        className='h-40 w-40 items-center'
                    />
                    {/* Lets you In text */}
                    <Text className='text-5xl font-bold text-black'>Let's you in</Text>

                    {/* Continue with Oauth */}
                    <View className='space-y-6 w-full'>
                        <View className='border rounded-2xl border-gray-200 w-full h-14 px-12 justify-center'>
                            <Pressable 
                                onPress={FacebookLogin}
                                className='flex flex-row space-x-5 items-center'
                            >
                                <Icons name={"facebook"} size={hp(3.5)} color={"#1877F2"} style={""}/>
                                <Text className='text-black text-lg font-medium'>Continue with Facebook</Text>
                            </Pressable>
                        </View>
                        <View className='border rounded-2xl border-gray-200 w-full h-14 px-12 justify-center'>
                            <Pressable 
                                onPress={GoogleLogin}
                                className='flex flex-row space-x-5 items-center'
                            >
                                <Image 
                                    source={require("../assets/images/free-google-152-189813-removebg-preview.png")}
                                    className='h-8 w-8'
                                />
                                <Text className='text-black text-lg font-medium'>Continue with Google</Text>
                            </Pressable>
                        </View>
                        <View className='border rounded-2xl border-gray-200 w-full h-14 px-12 justify-center'>
                            <Pressable 
                                onPress={AppleLogin}
                                className='flex flex-row space-x-5 items-center'
                            >
                                <Icons name={"apple"} size={hp(4)} color={"#000"} style={""}/>
                                <Text className='text-black text-lg font-medium'>Continue with Apple</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                {/* The or Line */}
                <View className='relative w-full h-[2px] border-1 bg-slate-600'>
                    <View className='absolute -top-5 right-44 bg-slate-100 h-10 w-10 rounded-full items-center justify-center'>
                        <Text className='text-black text-lg font-medium'>or</Text>
                    </View>
                </View>

                {/* SignIn Button */}

                <Pressable
                    onPress={PasswordSignIn}
                    className='bg-orange-600 h-14 w-full border-none rounded-3xl justify-center items-center'
                >
                    <Text className='text-white text-xl'>Sign in with password</Text>
                </Pressable>

                {/* Sign Up Option */}
                <View className='flex flex-row items-center space-x-2'>
                    <Text className='text-lg text-gray-500 font-normal'>Don't have an account?</Text>
                    <Pressable
                        onPress={GotoSignUp}
                    >
                        <Text style={{fontFamily: 'FuturaPTMedium'}} className='text-orange-600 text-medium text-xl'>Sign Up</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}

export default LetUIn

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: hp(2),
        paddingHorizontal: wp(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    }
})