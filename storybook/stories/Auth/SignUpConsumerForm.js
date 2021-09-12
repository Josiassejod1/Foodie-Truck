


import React, { useState } from 'react';
import {View,  Text} from 'react-native';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import GenericBtn from '../Button/GenericBtn';
import RadioButton from '../Button/RadioButton';

export default function SignUpConsumerForm() {
   const [email, setEmail] = useState('');
   const [firstN, setFirstN] = useState('')
   const [lastN, setLastN] = useState('')
   const [password, setPass] = useState('')
   const [confirm, setConfPass] = useState('') 
   const [terms, acceptedTerms] = useState(false)

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
           <View>
            <View style={styles.button}>
                <StyledTextInput placeholder="FirstName" placeholderTextColor="#AFAFAF" />
             </View>
             <View style={styles.button}>
                <StyledTextInput placeholder="LastName" placeholderTextColor="#AFAFAF" />
             </View>
             <View style={styles.button}>
                <StyledTextInput placeholder="Email" placeholderTextColor="#AFAFAF" keyboardType="email-address"/>
             </View>
             <View style={styles.button}>
                <StyledTextInput placeholder="Phone Number" placeholderTextColor="#AFAFAF" keyboardType="phone-pad"/>
             </View>
             <View style={styles.button}>
                <StyledTextInput placeholder="Password" placeholderTextColor="#AFAFAF" secureTextEntry={true} />
             </View>
             <View style={styles.button}>
                <StyledTextInput placeholder="Repeat Password" placeholderTextColor="#AFAFAF" secureTextEntry={true} />
             </View>
             <View  alignItems="center" style={{paddingBottom: 25}}>
                <RadioButton onPress={() => null } text="I agree to terms & conditions"/>
             </View>
             <View style={{alignItems: 'center', paddingBottom: 25}}>
             <GenericBtn width={341} height={59} borderRadius={10} paddingTop={18} color="#B84343">
                Sign Up
            </GenericBtn>
             </View>
             <View>
                 <View flexDirection="row" alignItems="center"  justifyContent="center" >
                     <Text style={{color: 'white', fontFamily: 'Poppins',fontWeight: '500'}}> Already Have An Account ? </Text>
                     <Text style={{color: '#092A53', fontFamily: 'Poppins', fontWeight: '500'}}>Sign In</Text>
                 </View>
             </View>
           </View>
        </GenericSplashView>
    );
}