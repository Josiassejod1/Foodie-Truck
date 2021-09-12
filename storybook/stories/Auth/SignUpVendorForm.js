


import React, { useState } from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import GenericBtn from '../Button/GenericBtn';
import RadioButton from '../Button/RadioButton';
import DropDownPicker from 'react-native-dropdown-picker';
import Cuisine from "../../../data/constants/Cuisine";



export default function SignUpVendorForm({navigation}) {
    const Map = []
    Cuisine.forEach((value) => Map.push({
        label: value, 
        value: value.toLowerCase() || "" 
    }));
    const [selectedCuisine, setSelectedCuisine] = useState(Map);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
  
   

    const styles = {
      children: {
          left: 0,
          flex: 1,
          top: 275,
          alignItems: 'center'
      },
      dropDown: {
        borderRadius: 10,
        width: 341,
        height: 59,
        borderStyle: "solid", 
        borderWidth: 1, 
        borderColor: "lightgray",
        fontSize: 16,
        paddingLeft: 31,
        fontWeight: "600",
        backgroundColor: "white"
    },
      button: {
          paddingBottom: 15,
          alignItems: 'center',
      }
  }
    return(
        <GenericSplashView subtitle="Sign Up" style={styles.children}>
           <View style={styles.button}>
                <StyledTextInput placeholder="Name" placeholderTextColor="#AFAFAF" />
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
             <View style={{borderRadius: 10, borderColor: '#bdc3c7', paddingBottom: 41}}>
             <DropDownPicker
                containerStyle={{height: 59, width: 341}}
                textStyle={{color: "#B84343", fontFamily: "Poppins"}}
                style={styles.dropDown}
                placeholder="Type of Cuisine"
                labelStyle={{color: "#AFAFAF", fontFamily: "Poppins"}}
                open={open}
                value={value}
                items={Map}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setSelectedCuisine}
            />
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
                 <TouchableOpacity onPress={() => navigation.popToTop()}>
                 <View flexDirection="row" alignItems="center"  justifyContent="center" >
                     <Text style={{color: 'white', fontFamily: 'Poppins',fontWeight: '800'}}> Already Have An Account ? </Text>
                     <Text style={{color: '#092A53', fontFamily: 'Poppins', fontWeight: '800'}}>Sign In</Text>
                 </View>
                 </TouchableOpacity>
           </View>
        </GenericSplashView>
    );
}