import React from 'react';
import {View, Image, TouchableOpacity, Text } from "react-native";
import StyledText from '../StyledText/StyledText';
import { useFonts } from 'expo-font';

 function CustomButton(props) {
    let [fontsLoaded] = useFonts({
        "Poppins": require('../../../fonts/Poppins.ttf'),
    });

    return (
        <TouchableOpacity
            style={style.buttonContainer}
            onPress={() => null}>
            <Text style={style.buttonText}>{props.title}</Text>
        </TouchableOpacity >
    )
}

const style = {
    buttonContainer: {
        height: 24,
        width: 85,
        borderRadius: 10,
        paddingTop: 5,
        backgroundColor: '#206FCE'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 10
    }
}


export default function SearchResult(props) {
    return(
    <View style={{flexDirection: 'row', background: '#F5F5F8',border: '2px solid rgba(10, 51, 100, 0.14)', borderRadius: 3}}>
        <View>
            <StyledText size="m">
                {props.title}
            </StyledText>
            <StyledText size="m">
                {props.category}
            </StyledText>
            <StyledText size="sm">
                {props.distance}
            </StyledText>
        </View>
        <View>
            <Image width={300} height={300} source={{ url: props.src }}/>
        </View>
        <View>
        <CustomButton title={'View Menu'}/>
        </View>
    </View>
    )

}