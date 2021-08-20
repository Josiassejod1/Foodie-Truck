import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import HamburgerMenuSVG from '../../../src/assets/images/nav_icons/hamburger_menu.svg'
import LogoAlternateSVG from '../../../src/assets/images/nav_icons/logo_dark.svg'
import { useNavigation } from '@react-navigation/native';

export default function Header({screen}){
  const navigation = useNavigation();
   return(
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <HamburgerMenuSVG/>
        </TouchableOpacity>
        <View>
            <LogoAlternateSVG />
        </View>
    </View>
   ) 
}

const styles = {
    container:{
        width:'100%',
        height:100,
        flexDirection:'row',
        paddingHorizontal:20,
        paddingTop: 30,
        alignItems:'center',
        justifyContent:'space-evenly'
    }
}