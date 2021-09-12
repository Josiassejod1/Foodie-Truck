import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import SignIn from './storybook/stories/Auth/SignIn';
import SignUp from './storybook/stories/Auth/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
  const AuthScreenStack = createStackNavigator();
  const HomeScreenStack = createStackNavigator();
  const SignUpStack = createStackNavigator();
  const [authenticated, setAuth] = useState(false);  

  const style = {
    headerStyle: {
      backgroundColor: "#206FCE",
    },
    headerTintColor: 'white',
  }
  // Handle user state changes
  function changeAuth(user) {
    store.userStore.setUser(user);
    setAuth( user != null);
    if (initializing) { setInitializing(false) };
  }

  function AuthScreen() {
    return (
      <AuthScreenStack.Navigator screenOptions={{headerStyle: style.headerStyle, headerTintColor: style.headerTintColor}}>
        <AuthScreenStack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }}/>
        <SignUpStack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }}/>
        <SignUpStack.Screen name="Sign Up Flow" component={ConsumerSignUpFlow} options={{ headerShown: false }}/>
      </AuthScreenStack.Navigator>
    );
  }


  function HomeScreen() {
    return (
      <HomeScreenStack.Navigator>
        <HomeScreenStack.Screen name="HomeScreen" component={Navbar} options={{ headerShown: false }}/>
      </HomeScreenStack.Navigator>
    );
  }

  function ConsumerSignUpFlow() {
    return(
      <SignUpStack.Navigator  screenOptions={{headerStyle: style.headerStyle, headerTintColor: style.headerTintColor}}>
        <SignUpStack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }}/>
        <SignUpStack.Screen name="Vendor" component={SignUpVendorForm} options={{ title: "" }}/>
        <SignUpStack.Screen name="Consumer" component={SignUpConsumerForm} options={{ title: "" }}/>
    </SignUpStack.Navigator>
    );
  }

  

  useEffect(() => {
    SplashScreen.hide();
    console.log("auth changed");
    const authUser = auth().onAuthStateChanged(changeAuth);
    store.sessionStore.setAuthUser(authUser);
    return authUser; // unsubscribe on unmount
  }, []);

    if (initializing) return null;
  return(
    <StoreContext.Provider value={store}>
       <View style={{flex: 1}}>
       <NavigationContainer>
      { authenticated ? <HomeScreen/> :  <AuthScreen/>}
       </NavigationContainer>
       </View>
    </StoreContext.Provider>
  );
}