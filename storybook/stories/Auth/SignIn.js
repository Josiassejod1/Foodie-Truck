


import React, { useContext, useState } from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import GenericBtn from '../Button/GenericBtn';
import StoreContext from '../../../data/context/context';
import auth from '@react-native-firebase/auth';

export default function SignIn({navigation}) {
    const contextType = useContext(StoreContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const styles = {
        children: {
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

    function signIn() {
        console.log("initial sign up");
        console.warn(contextType.userStore.user);
        console.log(contextType.sessionStore.authUser);
       auth().signInWithEmailAndPassword(email, password)
       .then(() => {  
           console.log("success")
           console.log(contextType.userStore.user);
           console.log(contextType.sessionStore.auth);
           navigation.push("HomeScreen")
           setEmail('') 
           setPassword('') 
        })
       .catch((e) =>{  console.log(e) 
        Alert.alert(`Incorrect Email or Password:`)});
    }

    return(
        <GenericSplashView subtitle="Sign In" style={styles.children}>
             <View style={styles.button}>
                <StyledTextInput placeholder="Email" placeholderTextColor="#AFAFAF" keyboardType="email-address"  onChangeText={text => setEmail(text)} value={email} autoCapitalize = 'none'/>
             </View>
             <View style={styles.button}>
                <StyledTextInput placeholder="Password" placeholderTextColor="#AFAFAF" secureTextEntry={true} keyboardType="default" onChangeText={text => setPassword(text)} value={password} autoCapitalize = 'none' />
             </View>
             <View style={styles.button}>
             </View>
             <View flexDirection="row" justifyContent="flex-end" paddingRight={31}>
                <TouchableOpacity style={{
                    marginBottom: 40,
                    paddingBottom: 50
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontFamily: 'Encode-Sans'
                    }}>Forgot Password ?</Text>
                </TouchableOpacity>
             </View>
             <View style={{paddingBottom: 14, alignItems: 'center'}}>
             <GenericBtn key="one" width={341} height={59} borderRadius={10} paddingTop={18} color="#B84343" onPress={signIn}>
                Sign In
            </GenericBtn>
             </View>
             <View>
                 <TouchableOpacity onPress={() => navigation.navigate("Sign Up Flow")}>
                 <View flexDirection="row" alignItems="center"  justifyContent="center">
                     <Text style={{color: 'white', fontFamily: 'Encode-Sans',fontWeight: 'bold'}}>Don't Have An Account ? </Text>
                     <Text style={{color: '#092A53', fontFamily: 'Encode-Sans', fontWeight: 'bold'}}>Sign Up</Text>
                 </View>
                 </TouchableOpacity>
             </View>
        </GenericSplashView>
    );  
}