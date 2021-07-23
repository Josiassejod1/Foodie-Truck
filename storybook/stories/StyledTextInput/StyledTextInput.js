

import React from 'react';

import {TextInput} from 'react-native';

export default function StyledTextInput(props) {
    const style = {
        borderRadius: 10,
        width: 341,
        height: 59,
        borderStyle: "solid", 
        borderWidth: 1, 
        borderColor: "lightgray",
        fontSize: 16,
        paddingLeft: 31,
        fontWeight: "600",
        backgroundColor: "white"
    }
  return <TextInput {...props} style={style} editable />;
}