import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, Onboarding, OnboardingAll, LetUIn, SignUp, SignIn } from '../../screens';

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

  return (
    <>
    <NavigationContainer theme={theme}>
        <Stack.Navigator
        initialRouteName='Splashscreen'
        screenOptions={{
            header: () => null
        }}
        >
          <Stack.Screen name='Splashscreen' component={SplashScreen}/>
          <Stack.Screen name='Onboarding' component={Onboarding}/>
          <Stack.Screen name='Onboarding All' component={OnboardingAll}/>
          <Stack.Screen name='LetUIn' component={LetUIn}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='SignIn' component={SignIn}/>

        </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default RootStack;