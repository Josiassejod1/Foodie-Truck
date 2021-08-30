import React from 'react';
import { Image } from "react-native";

export default function ImagePill(props) {
    return <Image source={{ url: props.src }}   resizeMode="stretch" style={{
        width: props.width,
        height: props.height,
        borderRadius: 8, 
    }} />
}