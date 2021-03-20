import React from 'react';
import { TextInput } from "react-native";


export default function CustomTextField(props) {
    return (
        <TextInput placeHolderTextColor="#0A3364" style={styles.placeholder} editable placeholder="Location" />
    )
}