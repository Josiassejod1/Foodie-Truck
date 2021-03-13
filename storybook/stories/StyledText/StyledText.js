import React from 'react';
import { Text } from "react-native";

import { useFonts, Poppins } from 'expo-font';
import { size } from 'lodash';

export default function StyledText(props) {
    var style = null;
    let [fontsLoaded] = useFonts({
        "Poppins": require('../../../fonts/Poppins.ttf'),
        "Poppins-Light": require('../../../fonts/Poppins-Light.ttf'),
        "Poppins-Regular": require('../../../fonts/Poppins-Regular.ttf'),
    });
    if (props.size == "xtra-sm") { style = styledText.small }
    if (props.size == "sm") { style = styledText.smallWarning }
    if (props.size == "xtra-m") { style = styledText.grayedText }
    if (props.size == "m") { style = styledText.medium }
    if (props.size == "l") { style = styledText.headerText }
    return <Text style={style}>{props.text}</Text>
}

const styledText = {
    small: {
        color: "black",
        fontSize: 12,
        fontFamily: 'Poppins-Light'
    },
    smallWarning: {
        color: "#C90000",
        fontSize: 12,
        weight: 400,
        fontFamily: 'Poppins-Light'
    },
    medium: {
        color: "black",
        weight: 600,
        fontSize: 12,
        fontFamily: 'Poppins'
    },
    grayedText: {
        color: "#AAA9A9",
        weight: 400,
        fontSize: 14,
        fontFamily: 'Poppins-Light'
    },
    headerText: {
        color: "#0A3364",
        weight: 600,
        fontFamily: 'Poppins',
        size: 16
    }
}