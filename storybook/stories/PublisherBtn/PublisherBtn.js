import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { useFonts, Poppins } from 'expo-font';



export default function PubliserBtn(props) {
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
        height: 48,
        width: 324,
        borderRadius: 10,
        paddingTop: 12,
        backgroundColor: '#C90000'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 18
    }
}