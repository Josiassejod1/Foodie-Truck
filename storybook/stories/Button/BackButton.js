import React from 'react';
import { TouchableOpacity, Text } from "react-native";


export default function BackButton(props) {
    return (
        <TouchableOpacity
            onPress={() => null}>
            <Image source={require('../../../src/back.png')} />
        </TouchableOpacity >
    )
}