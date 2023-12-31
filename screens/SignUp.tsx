import { Alert, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform, Pressable, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { Header } from '../components'
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Controller, FormProvider, SubmitErrorHandler, SubmitHandler, useForm,
} from 'react-hook-form';
import { TextInput } from '../components/CustomTextInput';
import { SignUpFormSchema, signUpFormSchema } from '../utils/signup_form_schema';
import { getReadableValidationErrorMessage } from '../utils/myzod';
import Icons from '../utils/Iconsexport';
import { hp, wp } from '../utils/globalvariables';



const SignUp : FC = () : React.JSX.Element => {

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [eyeopen, setEyeOpen] = React.useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setEyeOpen(prevValue => !prevValue);
  };

  const GotoSignIn = () => {
    navigation.navigate("SignIn");
}

  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      password: "",
    },
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<SignUpFormSchema> = (data) => {
    console.log(JSON.stringify(data));
  };

  const onError: SubmitErrorHandler<SignUpFormSchema> = (
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
                name="lastname"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => {
                  return (
                    <View className='w-full relative'>
                      <TextInput
                        label="LastName"
                        className='outline-none bg-gray-100 rounded-xl px-12 mb-5 text-xl '
                        onBlur={onBlur}
                        placeholder='Abolade'
                        value={value}
                        onChangeText={onChange}
                        errorMessage={error?.message}
                      />
                      <Icons name={"edit-name"} size={hp(3)} color={"#FF8000"} 
                        style={{position: "absolute", top: hp(4.5), left: wp(2)}}
                      />
                    </View>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name="firstname"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => {
                  return (
                    <View className='w-full relative'>
                      <TextInput
                        label="FirstName"
                        className='outline-none bg-gray-100 rounded-xl px-12 mb-5 text-xl'
                        onBlur={onBlur}
                        placeholder='Emeka'
                        value={value}
                        onChangeText={onChange}
                        errorMessage={error?.message}
                      />
                      <Icons name={"edit-name"} size={hp(3)} color={"#FF8000"} 
                        style={{position: "absolute", top: hp(4.5), left: wp(2)}}
                      />
                    </View>
                  );
                }}
              />

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

              <Controller
                control={methods.control}
                name="address"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => {
                  return (
                    <View className='w-full relative'>
                      <TextInput
                        label="Address"
                        className='outline-none bg-gray-100 rounded-xl px-12 mb-5 text-xl'
                        onBlur={onBlur}
                        placeholder='No 2, example street, netherealm state.'
                        multiline={true}
                        numberOfLines={2}
                        value={value}
                        onChangeText={onChange}
                        errorMessage={error?.message}
                      />
                      <Icons name={"address"} size={hp(3)} color={"#FF8000"} 
                        style={{position: "absolute", top: hp(6), left: wp(2)}}
                      />
                    </View>
                  );
                }}
              />

              <Controller
                control={methods.control}
                name="phone"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error },
                }) => {
                  return (
                    <View className='w-full relative'>
                      <TextInput
                        label="Phone Number"
                        className='outline-none bg-gray-100 rounded-xl px-12 mb-5 text-xl'
                        onBlur={onBlur}
                        placeholder='08012345678'
                        keyboardType="decimal-pad"
                        value={value}
                        onChangeText={(val) => onChange(val.toString())}
                        errorMessage={error?.message}
                      />
                      <Icons name={"phone"} size={hp(3)} color={"#FF8000"} 
                        style={{position: "absolute", top: hp(4.5), left: wp(2)}}
                      />
                    </View>
                  );
                }}
              />

              <TouchableOpacity
                onPress={methods.handleSubmit(onSubmit, onError)}
                className='bg-orange-600 mt-5 h-14 w-full border-none rounded-3xl justify-center items-center'
                >
                  <Text className='text-white text-xl'>Sign up</Text>
              </TouchableOpacity>
            </FormProvider>
          </View>

          {/* Already have an account  */}
          <View className='flex mb-28 flex-row items-center space-x-2'>
            <Text className='text-lg text-gray-500 font-normal'>Already have an account?</Text>
            <Pressable
              onPress={GotoSignIn}
            >
              <Text className='text-orange-600 text-medium text-xl'>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUp