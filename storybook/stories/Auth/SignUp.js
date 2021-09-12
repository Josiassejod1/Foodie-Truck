


import React, { useState, useEffect} from 'react';
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
    };

    return(
        <GenericSplashView subtitle="Sign Up" style={styles.children}>
             <View alignItems="center" paddingBottom={35}>
                <Text style={{color: 'white'}}>
                    Select an option below
                </Text>
             </View>
             <View style={{paddingBottom: 35, alignItems: 'center'}}>
            <GenericBtn  key={"foodie-btn"} width={341} height={59} borderRadius={10} paddingTop={18} color="#B84343" fontWeight={'bold'} onPress={() => navigation.navigate("Consumer")}>
                Are you a foodie?
            </GenericBtn>
             </View>
             <View style={styles.button}>
             <GenericBtn key={"vendor-btn"}  width={341} height={59} borderRadius={10} paddingTop={18} color="#092A53" fontWeight={'bold'} onPress={() => navigation.navigate("Vendor")}>
                Are you a food truck?
            </GenericBtn>
             </View>
             <View>
                 <TouchableOpacity onPress={() => navigation.goBack()}>
                 <View flexDirection="row" alignItems="center"  justifyContent="center">
                     <Text style={{color: 'white', fontFamily: 'Poppins',fontWeight: '800'}}>Already Have An Account ? </Text>
                     <Text style={{color: '#092A53', fontFamily: 'Poppins', fontWeight: '800'}}>Sign In</Text>
                 </View>
                 </TouchableOpacity>
             </View>
        </GenericSplashView>
    );
}