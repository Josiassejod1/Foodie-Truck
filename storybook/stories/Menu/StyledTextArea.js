
import React from 'react';
import {TextInput} from 'react-native';

export default function StyledTextArea(props) {
    const style = {
        container: {
            backgroundColor: "white",
            borderRadius: 10,
            borderColor: "lightgray",
            borderStyle: "solid",
            borderWidth: 1, 
            padding: 5,
        }
    }
    return(
        <TextInput {...props} style={style.container} editable multiline>
            {props.children}
        </TextInput>
    )
}