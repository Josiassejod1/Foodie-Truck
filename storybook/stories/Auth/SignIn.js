


import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import GenericBtn from '../Button/GenericBtn';
import SignUp from './SignUp';

export default function SignIn(props, {navigation}) {
    const styles = {
		container: {
			backgroundColor: "#206FCE",
			width: '100%',
			height: '100%',
			position: 'relative',
			flex: 1
		},
		donut: {
			transform: [{
				scaleX: -1,
			}],
			position: 'absolute',
			top: 350,
		},
		headerTitle: {
			position: 'absolute',
			top: 50,
			padding: 30,
			zIndex: 100
		},
		subtitle: {
			marginTop: 8,
			maxWidth: 200
		},
		logo: {
			marginBottom: 8
		},
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
                 <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                 <View flexDirection="row" alignItems="center"  justifyContent="center">
                     <Text style={{color: 'white', fontFamily: 'Encode-Sans',fontWeight: 'bold'}}>Don't Have An Account ?</Text>
                     <Text style={{color: '#092A53', fontFamily: 'Encode-Sans', fontWeight: 'bold'}}>Sign Up</Text>
                 </View>
                 </TouchableOpacity>
             </View>
        </GenericSplashView>
    );  
}