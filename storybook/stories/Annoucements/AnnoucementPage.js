import React from 'react';
import StyledText from '../StyledText/StyledText';
import StyledTextArea from '../Menu/StyledTextArea';
import {View} from 'react-native';
import GenericBtn from '../Button/GenericBtn';

export default function AnnouncementPage(props) {
    const style = {
        header: {
            paddingBottom: 13,
        },
        subtitle: {
            paddingBottom: 13
        },
        annoucment: {
            paddingBottom: 38,
            alignItems: 'center'
        }
    }
    return(
        <View>
            <View style={style.header}>
                <StyledText size="header">Announcments</StyledText>
            </View>
            <View style={style.subtitle}>
                <StyledText size="s">
                    Keep in touch with your foodies.
                </StyledText>
            </View>
            <View style={style.annoucment}>
                <StyledTextArea height={324} width={324}></StyledTextArea>
            </View>
            <GenericBtn width={341} height={59} borderRadius={10} paddingTop={18} color="#B84343">
               Publish
            </GenericBtn>
        </View>
    );
}