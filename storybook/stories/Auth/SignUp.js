


import React from 'react';
import {View, Text} from 'react-native';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import GenericBtn from '../Button/GenericBtn';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();
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
        <GenericSplashView subtitle="Sign Up" style={styles.children}>
             <View alignItems="center" paddingBottom={35}>
                <Text style={{color: 'white'}}>
                    Select an option below
                </Text>
             </View>
             <View style={{paddingBottom: 35, alignItems: 'center'}}>
            <GenericBtn width={341} height={59} borderRadius={10} paddingTop={18} color="#B84343" fontWeight={'bold'} onPress={() => navigation.navigate('SignUpConsumer')}>
                Are you a foodie?
            </GenericBtn>
             </View>
             <View style={styles.button}>
             <GenericBtn width={341} height={59} borderRadius={10} paddingTop={18} color="#092A53" fontWeight={'bold'} onPress={() => navigation.navigate('SignUpVendor')}>
                Are you a food truck?
            </GenericBtn>
             </View>
        </GenericSplashView>
    );
}