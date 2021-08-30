


import React, { useState } from 'react';
import {View, Text } from 'react-native';
import GenericSplashView from '../GenericSplashView/GenericSplashView';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import GenericBtn from '../Button/GenericBtn';
import RadioButton from '../Button/RadioButton';
import {Picker} from '@react-native-picker/picker';
import Cuisine from "../../../data/constants/Cuisine";
import { TextInput } from 'react-native-gesture-handler';



export default function SignInVendorForm(props) {
    const [selectedCuisine, setSelectedCuisine] = useState();

    return(
        <GenericSplashView subtitle="Sign In" style={props.styles.children}>
           <View>
           <View style={props.styles.button}>
                <StyledTextInput placeholder="Name" placeholderTextColor="#AFAFAF" />
             </View>
             <View style={props.styles.button}>
                <StyledTextInput placeholder="Email" placeholderTextColor="#AFAFAF" keyboardType="email-address"/>
             </View>
             <View style={props.styles.button}>
                <StyledTextInput placeholder="Phone Number" placeholderTextColor="#AFAFAF" keyboardType="phone-pad"/>
             </View>
             <View style={props.styles.button}>
                <StyledTextInput placeholder="Password" placeholderTextColor="#AFAFAF" secureTextEntry={true} />
             </View>
             <View style={props.styles.button}>
                <StyledTextInput placeholder="Repeat Password" placeholderTextColor="#AFAFAF" secureTextEntry={true} />
             </View>
             <View style={props.styles.button}>
             </View>
             <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}>
                <TextInput placeholder="Type of Cuisine" placeholderTextColor="#AFAFAF" render={(props) => (<Picker
                style={{borderRadius: 10}}
                selectedValue={selectedCuisine}
                itemStyle={{ backgroundColor: "white", color: "#206FCE"}}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedCuisine(itemValue)
                }>{ Cuisine.map((data, index) => { return <Picker.Item label={data} value={data.toLowerCase()} />}) }</Picker>)}/>
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
                     <Text style={{color: 'white', fontFamily: 'Encode-Sans',fontWeight: 'bold'}}> Already Have An Account ? </Text>
                     <Text style={{color: '#092A53', fontFamily: 'Encode-Sans', fontWeight: 'bold'}}>Sign In</Text>
                 </View>
             </View>
           </View>
        </GenericSplashView>
    );
}