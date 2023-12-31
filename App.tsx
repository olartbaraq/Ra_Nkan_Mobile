import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux'
import { Store } from './redux/store'
import RootStack from './navigations/RootStack';


// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

//  Section({children, title}: SectionProps): React.JSX.Element 
function App(): React.JSX.Element {
  return (
    <Provider store={Store}>
      <SafeAreaView className="flex-1">
        <StatusBar
          //backgroundColor="#fff"
          barStyle={'dark-content'}
        />
        <RootStack />
      </SafeAreaView>
    </Provider>
    
  );
}
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },

//   body: {
//     alignSelf: 'center',
//     alignItems: 'center'
//   }
// });



export default App;
