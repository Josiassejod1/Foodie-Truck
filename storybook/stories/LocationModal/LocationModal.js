
import React from 'react';
import { View } from 'react-native';
import StyledText from '../StyledText/StyledText';
import LocationIcon from '../../../src/assets/images/location_icon.svg';

export default function LocationModal(props) {

    const styles = {
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerTitle: {
            marginBottom: 18
        },
        logo: {
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 36,
        },
    }


    return (
        <View style={styles.container}>
            <View style={styles.headerTitle}>
                <View style={styles.logo}>
                    <LocationIcon />
                </View>
                <View style={styles.subtitle}>
                    <StyledText size="header">{props.header}</StyledText>
                </View>
            </View>
            <View style={styles.children}>
                {props.children}
            </View>
        </View>
    )
}