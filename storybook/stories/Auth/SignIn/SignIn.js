


import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import GenericSplashView from '../../GenericSplashView/GenericSplashView';
import StyledTextInput from '../../StyledTextInput/StyledTextInput';
import { FontAwesome } from '@expo/vector-icons';
import GenericBtn from '../../Button/GenericBtn';

export default function SignIn(props) {
    console.log(props)
    return(
        <GenericSplashView subtitle="Sign In" style={props.styles.children}>
             <View style={props.styles.button}>
                <StyledTextInput placeholder="Email" placeholderTextColor="#AFAFAF" keyboardType="email-address"/>
             </View>
             <View style={props.styles.button}>
                <StyledTextInput placeholder="Password" placeholderTextColor="#AFAFAF" secureTextEntry={true} keyboardType="default" />
             </View>
             <View style={props.styles.button}>
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
             <View style={props.styles.button}>
             <FontAwesome.Button name="google" backgroundColor="#092A53" width={341} height={59}>
                Continue With Google
            </FontAwesome.Button>
             </View>
             <View>
                 <View flexDirection="row" alignItems="center"  justifyContent="center">
                     <Text style={{color: 'white', fontFamily: 'Encode-Sans',fontWeight: 'bold'}}> Don't Have An Account ? </Text>
                     <Text style={{color: '#092A53', fontFamily: 'Encode-Sans', fontWeight: 'bold'}}>Sign Up</Text>
                 </View>
             </View>
        </GenericSplashView>
    );
}