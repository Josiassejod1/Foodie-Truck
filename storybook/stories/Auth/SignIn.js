


import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import GenericBtn from '../Button/GenericBtn';

export default function SignIn({navigation}) {
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

    return(
        <GenericSplashView subtitle="Sign In" style={styles.children}>
             <View style={styles.button}>
                <StyledTextInput placeholder="Email" placeholderTextColor="#AFAFAF" keyboardType="email-address"/>
             </View>
             <View style={styles.button}>
                <StyledTextInput placeholder="Password" placeholderTextColor="#AFAFAF" secureTextEntry={true} keyboardType="default" />
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
                    }}>Forgot Password?</Text>
                </TouchableOpacity>
             </View>
             <View style={{paddingBottom: 14, alignItems: 'center'}}>
             <GenericBtn width={341} height={59} borderRadius={10} paddingTop={18} color="#B84343">
                Sign Up
            </GenericBtn>
             </View>
             <View>
                 <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                 <View flexDirection="row" alignItems="center"  justifyContent="center">
                     <Text style={{color: 'white', fontFamily: 'Encode-Sans',fontWeight: 'bold'}}>Don't Have An Account ?</Text>
                     <Text style={{color: '#092A53', fontFamily: 'Encode-Sans', fontWeight: 'bold'}}>Sign Up</Text>
                 </View>
                 </TouchableOpacity>
             </View>
        </GenericSplashView>
    );  
}