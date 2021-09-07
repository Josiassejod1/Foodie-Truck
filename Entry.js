import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import SignIn from './storybook/stories/Auth/SignIn';
import GenericSplashView from './storybook/stories/GenericSplashView/GenericSplashView';
import SignUp from './storybook/stories/Auth/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './storybook/stories/HomePage/HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './storybook/stories/NavBar/Navbar';

export default function Entry() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const Stack = createNativeStackNavigator();
  const styles = {
    children: {
        left: 0,
        flex: 1,
        top: 175,
        alignItems: 'center'
    },
    children2: {
        left: 0,
        flex: 1,
        top: 275,
        alignItems: 'center'
    },
    button: {
        paddingBottom: 15,
        alignItems: 'center',
    }
}

  // Handle user state changes
  function changeAuth(user) {
    setUser(user);
    if (initializing) { setInitializing(false) };
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(changeAuth);
    return subscriber; // unsubscribe on unmount
  }, []);

    if (initializing) return <GenericSplashView subtitle="Find the best food trucks around"></GenericSplashView>;
  return(
    <NavigationContainer>
       <Stack.Navigator>
       { user ? (
        <>
          <Stack.Screen name="Home" component={HomePage}   options={{ headerTitle: props =>  }}/>
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
    )}
       </Stack.Navigator>
    </NavigationContainer>
  )
}