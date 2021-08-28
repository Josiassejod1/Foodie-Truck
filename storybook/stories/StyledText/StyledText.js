import React from 'react';
import { Text, StyleSheet } from "react-native";

export default function StyledText(props) {
    var style = null;
    let color = props.color;
    let fontSize = props.fontSize;
    if (props.size == "xtra-sm") { style = styledText.small }
    if (props.size == "sm") { style = styledText.smallWarning }
    if (props.size == "xtra-m") { style = styledText.grayedText }
    if (props.size == "m") { style = styledText.medium }
    if (props.size == "l") { style = styledText.categoryText }
    if (props.size == "header") { style = styledText.headerText }
    if (props.size == "subtitle") { style = styledText.subheaderText }
    if (props.size == "bold") { style = styledText.bold }
    if (props.size == "bold-light") { style = styledText.boldLight }
    if (props.size == "big-skinny") { style = styledText.bigSkinny }
    if (fontSize && style) { style.fontSize = fontSize  }
    return <Text style={(color) ? [style, { color: color }] : style}>{props.children}</Text>
}

const styledText = StyleSheet.create({
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
    },
    bold: {
        color: "#0A3364",
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        fontWeight: "800",
    },
    bigSkinny: {
        color: "#0A3364",
        fontSize: 22,
        fontFamily: 'Poppins-Light',
    },
    boldLight: {
        color: "#0A3364",
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        fontWeight: "600",
    }
});