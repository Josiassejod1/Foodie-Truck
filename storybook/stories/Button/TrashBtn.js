import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import { useFonts, Poppins } from 'expo-font';
import TrashSVG from '../../../src/assets/images/trash.svg';



export default function TrashBtn(props) {
    return (
        <TouchableOpacity
            onPress={() => null}>
            <TrashSVG></TrashSVG>
        </TouchableOpacity >
    )
}