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
  const AuthScreenStack = createStackNavigator();
  const HomeScreenStack = createStackNavigator();
  const SignUpStack = createStackNavigator();
  // Handle user state changes
  function changeAuth(user) {
    store.userStore.setUser(user);
    if (initializing) { setInitializing(false) };
  }

  function AuthScreen() {
    return (
      <AuthScreenStack.Navigator>
        <AuthScreenStack.Screen name="Sign In" component={SignIn} options={{ headerShown: false }}/>
        <AuthScreenStack.Screen name="Sign Up Flow" component={ConsumerSignUpFlow} options={{ headerShown: false }}/>
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
      <SignUpStack.Navigator>
        <SignUpStack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }}/>
        <SignUpStack.Screen name="SignUpVendor" component={SignUpVendorForm} />
        <SignUpStack.Screen name="SignUpConsumer" component={SignUpConsumerForm}/>
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
      { (store.userStore.user != null) ? <HomeScreen/> :  <AuthScreen/>}
       </NavigationContainer>
       </View>
    </StoreContext.Provider>
  );
}