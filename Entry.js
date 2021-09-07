import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import SignIn from './storybook/stories/Auth/SignIn';
import SignUp from './storybook/stories/Auth/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './storybook/stories/NavBar/Navbar';
import store from "./data/store/rootStore";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import StoreContext from './data/context/context';
import SignUpConsumerForm from './storybook/stories/Auth/SignUpConsumerForm';
import SignUpVendorForm from './storybook/stories/Auth/SignUpVendorForm';


export default function Entry() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const Stack = createStackNavigator();

  // Handle user state changes
  function changeAuth(user) {
    store.userStore.setUser(user);
    if (initializing) { setInitializing(false) };
  }

  useEffect(() => {
    SplashScreen.hide();
    const authUser = auth().onAuthStateChanged(changeAuth);
    store.sessionStore.setAuthUser(authUser);
    return authUser; // unsubscribe on unmount
  }, []);

    if (initializing) return null;
  return(
    <StoreContext.Provider value={store}>
       <View style={{flex: 1}}>
       <NavigationContainer>
        <Stack.Navigator>
       { (store.userStore.user != null) ? (
        <Stack.Screen name="HomeScreen" component={Navbar}/>
      ) : (
       <>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SignUpConsumer" component={SignUpConsumerForm}/>
        <Stack.Screen name="SignUpVendor" component={SignUpVendorForm}/>
       </>
    )}
       </Stack.Navigator>
       </NavigationContainer>
       </View>
    </StoreContext.Provider>
  );
}