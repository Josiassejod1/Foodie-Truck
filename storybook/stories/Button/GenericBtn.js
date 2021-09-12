import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { useFonts, Poppins } from 'expo-font';
import uuid from 'react-native-uuid';



export default function GenericBtn(props) {
    console.log("wtf");
    let key = props.key || uuid;
    onPress = props.onPress;
    console.log("ha");
    let [fontsLoaded] = useFonts({
        "Poppins": require('../../../fonts/Poppins.ttf'),
    });

    const styles = {
        buttonText: {
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontWeight: props.fontWeight ? props.fontWeight : 'normal',
            fontSize: props.fontSize ? props.fontSize : 18
        }
    }

    return (
        <React.Fragment  key={key}>
            <TouchableOpacity
            style={{
                backgroundColor: props.color,
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                paddingTop: props.paddingTop
            }} onPress={onPress}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity >
        </React.Fragment>
    )
}