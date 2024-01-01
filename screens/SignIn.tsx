import { Alert, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform, Pressable, TouchableOpacity, Image } from 'react-native'
import React, { FC, useState } from 'react'
import { Header } from '../components'
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Controller, FormProvider, SubmitErrorHandler, SubmitHandler, useForm,
} from 'react-hook-form';
import { TextInput } from '../components/CustomTextInput';
import { SignInFormSchema, signInFormSchema } from '../utils/signup_form_schema';
import { getReadableValidationErrorMessage } from '../utils/myzod';
import Icons from '../utils/Iconsexport';
import { hp, wp } from '../utils/globalvariables';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID } from '@env';
import axios from 'axios';


GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  webClientId: GOOGLE_WEB_CLIENT_ID,
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

type GoogleToken = {
  ID_token: string | null
}

const SignIn : FC = () : React.JSX.Element => {

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [eyeopen, setEyeOpen] = React.useState<boolean>(false);
  const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState({});

  const FacebookLogin = () => {
    return;
  }
  const GoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUsers(userInfo);
      console.log(userInfo);
      console.log(users);

      const body : GoogleToken = {
        ID_token: userInfo?.idToken
      }

      // if (userInfo?.idToken) {
      //   // Talk to Backend API endpoint
      //   const validateResponse = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${userInfo.idToken}`);
      //   console.log(validateResponse)
      // }
    } catch (error:any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }
  const AppleLogin = () => {
    
  }

  const togglePasswordVisibility = () => {
    setEyeOpen(prevValue => !prevValue);
  };

  const GotoSignUp = () => {
    navigation.navigate("SignUp");
  }

  const GotoForgotPassword = () => {
    navigation.navigate("LetUIn");
  }

  const methods = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SignInFormSchema> = (data) => {
    console.log(JSON.stringify(data));
  };

  const onError: SubmitErrorHandler<SignInFormSchema> = (
    errors  ) => {
    console.log(JSON.stringify(errors));
    Alert.alert('Warning', getReadableValidationErrorMessage(errors));
  };

  return (
    <View>
      <ScrollView className='p-5' contentContainerStyle={{alignItems: "center"}}>
        <View className='space-y-12 items-center w-full'>
            {/* Header Component */}
          <Header onPress={() => navigation.goBack()}/>

          {/* Create account test */}
          <Text className='text-5xl self-start text-black font-bold'>Create your Account</Text>

          {/* Email and Password and others input field */}
          <View className='flex flex-col space-y-10 items-center w-full'>
            <FormProvider {...methods}>
              <Controller
                control={methods.control}
                name="email"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => {
                  return (
                    <View className='w-full relative'>
                      <TextInput
                        label="Email"
                        className='outline-none bg-gray-100 rounded-xl px-12 mb-5 text-xl'
                        onBlur={onBlur}
                        placeholder='emeka@example.com'
                        value={value}
                        onChangeText={onChange}
                        errorMessage={error?.message}
                      />
                      <Icons name={"mail"} size={hp(3)} color={"#FF8000"} 
                        style={{position: "absolute", top: hp(4.5), left: wp(2)}}
                      />
                    </View>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name="password"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => {
                  return (
                    <View className='w-full relative'>
                      <TextInput
                        label="Password"
                        className='outline-none bg-gray-100 rounded-xl px-12 mb-5 text-xl'
                        onBlur={onBlur}
                        placeholder='***************'
                        secureTextEntry={eyeopen}
                        value={value}
                        onChangeText={onChange}
                        errorMessage={error?.message}
                      />
                      <Icons name={"password"} size={hp(3)} color={"#FF8000"} 
                        style={{position: "absolute", top: hp(4.5), left: wp(2)}}
                      />
                      <Pressable onPress={togglePasswordVisibility}
                      style={{position: "absolute", top: hp(4.5), left: wp(80)}}>
                        <Icons name={eyeopen ? "eye-off" : "eye"} size={hp(3)} color={"#FF8000"} style={""}/>
                      </Pressable>
                    </View>
                  );
                }}
              />
              <TouchableOpacity
                onPress={methods.handleSubmit(onSubmit, onError)}
                className='bg-orange-600 mt-5 h-14 w-full border-none rounded-3xl justify-center items-center'
                >
                  <Text className='text-white text-xl'>Sign In</Text>
              </TouchableOpacity>
            </FormProvider>
          </View>

          {/* forgot password link */}
          <Pressable
            onPress={GotoForgotPassword}
            className='w-full items-center justify-center'
          >
            <Text className='text-xl font-bold'>Forgot password?</Text>
          </Pressable>

          {/* The or Line */}
          <View className='relative w-full h-[2px] border-1 bg-slate-600'>
            <View className='absolute -top-7 right-24 bg-white h-12 w-48 px-4 rounded-full items-center justify-center'>
                <Text className='text-black text-lg font-medium'>or continue with</Text>
            </View>
          </View>

          {/* other options to login */}
          <View className='flex flex-row space-x-6 w-full justify-center items-center'>
            <View className='border rounded-2xl border-gray-200 w-20 h-14 justify-center items-center'>
              <Pressable 
                  onPress={FacebookLogin}
                  className='flex flex-row space-x-5 items-center'
              >
                  <Icons name={"facebook"} size={hp(3.5)} color={"#1877F2"} style={""}/>
              </Pressable>
            </View>
            <View className='border rounded-2xl border-gray-200 w-20 h-14 items-center justify-center'>
                <Pressable 
                    onPress={GoogleLogin}
                    className='flex flex-row space-x-5 items-center'
                >
                    <Image 
                        source={require("../assets/images/free-google-152-189813-removebg-preview.png")}
                        className='h-8 w-8'
                    />
                </Pressable>
            </View>
            <View className='border rounded-2xl border-gray-200 w-20 h-14 items-center justify-center'>
                <Pressable 
                    onPress={AppleLogin}
                    className='flex flex-row space-x-5 items-center'
                >
                    <Icons name={"apple"} size={hp(4)} color={"#000"} style={""}/>
                </Pressable>
            </View>
          </View>

          {/* Already have an account  */}
          <View className='flex mb-28 flex-row items-center space-x-2'>
            <Text className='text-lg text-gray-500 font-normal'>Don't have an account?</Text>
            <Pressable
              onPress={GotoSignUp}
            >
              <Text className='text-orange-600 text-medium text-xl'>Sign up</Text>
            </Pressable>
          </View>

        
        </View>
      </ScrollView>
    </View>
  )
}

export default SignIn;