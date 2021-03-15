import React from 'react';
import { View } from 'react-native';
import ImagePill from '../ImagePill/ImagePill';
import StyledText from '../StyledText/StyledText';

export default function ImagePillWithText(props) {

    const containerStyle = {
        text: {
            maxWidth: 93,
            marginBottom: 3
        },
        image: {
            marginBottom: 8
        }
    }

    return (
        <View style={{ marginRight: 15, marginTop: 18 }}>
            <View style={containerStyle.image}>
                <ImagePill width={101} height={97} src={props.src} />
            </View>
            <View style={containerStyle.text}>
                <StyledText size="m">
                    {props.name}
                </StyledText>
            </View>
            <View style={containerStyle.text}>
                <StyledText size="xtra-sm">
                    {props.category}
                </StyledText>
            </View>
            <View style={containerStyle.text}>
                {props.location &&
                    <StyledText size="sm">
                        {props.location}
                    </StyledText>
                }
            </View>
        </View>
    )
}