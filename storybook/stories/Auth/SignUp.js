


import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import GenericBtn from '../Button/GenericBtn';



export default function SignUp({navigation}) {
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
            <GenericBtn  ref={foodie} width={341} height={59} borderRadius={10} paddingTop={18} color="#B84343" fontWeight={'bold'} onPress={() => navigation.push("SignUpConsumer")}>
                Are you a foodie?
            </GenericBtn>
             </View>
             <View style={styles.button}>
             <GenericBtn ref={vendor} width={341} height={59} borderRadius={10} paddingTop={18} color="#092A53" fontWeight={'bold'} onPress={() => navigation.push("SignUpVendor")}>
                Are you a food truck?
            </GenericBtn>
             </View>
             <View>
                 <TouchableOpacity onPress={() => navigation.goBack()}>
                 <View flexDirection="row" alignItems="center"  justifyContent="center">
                     <Text style={{color: 'white', fontFamily: 'Encode-Sans',fontWeight: 'bold'}}>Already Have An Account ? </Text>
                     <Text style={{color: '#092A53', fontFamily: 'Encode-Sans', fontWeight: 'bold'}}>Sign In</Text>
                 </View>
                 </TouchableOpacity>
             </View>
        </GenericSplashView>
    );
}