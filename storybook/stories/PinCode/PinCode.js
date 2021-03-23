import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { useFonts, Poppins } from 'expo-font';
import StyledText from '../StyledText/StyledText';
import GenericBtn from '../Button/GenericBtn';
import { TouchableOpacity } from 'react-native';


export default function pinCode(props) {
    const [code, setCode] = useState("");


    return (
        <View>
            <View style={{ maxWidth: 292, marginBottom: 40 }}>
                <StyledText size="header">
                    We sent you a verification code!
            </StyledText>
            </View>
            <View style={{
                marginBottom: 40,
                justifyContent: 'space-between',
                alignContent: 'center',
                paddingLeft: 10
            }}>
                <SmoothPinCodeInput
                    placeholder="0"
                    cellStyle={{
                        borderWidth: 2,
                        borderRadius: 1,
                        borderColor: '#EDEDED',
                        backgroundColor: 'white',
                    }}
                    cellStyleFocused={{
                        borderColor: 'lightseagreen',
                        backgroundColor: 'lightcyan',
                    }}
                    textStyle={{
                        fontSize: 25,
                        color: '#D8D8D8',
                        fontFamily: 'Poppins'
                    }}
                    textStyleFocused={{
                        color: '#206FCE'
                    }}
                    value={code}
                    onTextChange={code => setCode(code)}
                />
            </View>
            <View>
                <TouchableOpacity style={{
                    marginBottom: 40,
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: '#206FCE',
                        fontFamily: 'Poppins'
                    }}>Send code again</Text>
                </TouchableOpacity>
            </View>

            <GenericBtn color="#B84343" width={200} height={57} borderRadius={10} paddingTop={15}>
                Proceed
            </GenericBtn>
        </View>
    )

};