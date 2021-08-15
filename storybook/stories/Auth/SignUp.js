


import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import { FontAwesome } from '@expo/vector-icons';
import GenericBtn from '../Button/GenericBtn';

export default function SignUp(props) {
    return(
        <GenericSplashView subtitle="Sign Up" style={props.styles.children2}>
             <View alignItems="center" paddingBottom={35}>
                <Text style={{color: 'white'}}>
                    Select an option below
                </Text>
             </View>
             <View style={{paddingBottom: 35, alignItems: 'center'}}>
            <GenericBtn width={341} height={59} borderRadius={10} paddingTop={18} color="#B84343" fontWeight={'bold'}>
                Are you a foodie?
            </GenericBtn>
             </View>
             <View style={props.styles.button}>
             <GenericBtn width={341} height={59} borderRadius={10} paddingTop={18} color="#092A53" fontWeight={'bold'}>
                Are you a food truck?
            </GenericBtn>
             </View>
        </GenericSplashView>
    );
}