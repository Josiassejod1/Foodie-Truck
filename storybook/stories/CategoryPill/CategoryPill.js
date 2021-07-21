import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { useFonts, Poppins } from 'expo-font';



export default function CategoryPill(props) {
    let [fontsLoaded] = useFonts({
        "Poppins": require('../../../fonts/Poppins.ttf'),
    });

    return (
        <TouchableOpacity
            style={(props.selected) ? [style.buttonContainer, { backgroundColor: '#0A3364' }] : style.buttonContainer}
            onPress={() => null}>
            <Text style={style.buttonText}>{props.title}</Text>
        </TouchableOpacity >
    )
}

const style = {
    buttonContainer: {
        backgroundColor: '#206FCE',
        width: 70,
        height: 43,
        borderRadius: 8,
        marginRight: 8,
        marginLeft: 8,
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 10,
        flex: 1, 
        flexWrap: 'wrap',
        flexShrink: 1
    }
}