import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { useFonts, Poppins } from 'expo-font';



export default function GenericBtn(props) {
    let [fontsLoaded] = useFonts({
        "Poppins": require('../../../fonts/Poppins.ttf'),
    });

    const styles = {
        buttonText: {
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: props.fontSize ? props.fontSize : 18
        }
    }

    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.color,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                paddingTop: props.paddingTop
            }}
            onPress={() => null}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity >
    )
}