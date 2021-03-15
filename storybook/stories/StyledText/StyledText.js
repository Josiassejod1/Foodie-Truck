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
        "Poppins-Medium": require('../../../fonts/Poppins-Medium.ttf'),
        "Poppins-Bold": require('../../../fonts/Poppins-Bold.ttf'),
    });
    if (props.size == "xtra-sm") { style = styledText.small }
    if (props.size == "sm") { style = styledText.smallWarning }
    if (props.size == "xtra-m") { style = styledText.grayedText }
    if (props.size == "m") { style = styledText.medium }
    if (props.size == "l") { style = styledText.categoryText }
    if (props.size == "header") { style = styledText.headerText }
    if (props.size == "subtitle") { style = styledText.subheaderText }
    return <Text style={style}>{props.children}</Text>
}

const styledText = {
    small: {
        color: "black",
        fontSize: 12,
        fontFamily: 'Poppins-Light',
    },
    smallWarning: {
        color: "#C90000",
        fontSize: 12,
        fontFamily: 'Poppins-Light',
    },
    medium: {
        color: "black",
        fontWeight: "600",
        fontSize: 12,
        fontFamily: 'Poppins',
    },
    grayedText: {
        color: "#AAA9A9",
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    },
    categoryText: {
        color: "#0A3364",
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
    },
    headerText: {
        color: "#0A3364",
        fontFamily: 'Poppins-Bold',
        fontSize: 27,
    },
    subheaderText: {
        color: "#0A3364",
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
    }
}