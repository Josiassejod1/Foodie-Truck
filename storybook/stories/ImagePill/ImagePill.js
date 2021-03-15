import React from 'react';
import { Image } from "react-native";

export default function ImagePill(props) {
    return <Image source={{ url: props.src }} style={{
        width: props.width,
        height: props.height,
        borderRadius: 8
    }} />
}