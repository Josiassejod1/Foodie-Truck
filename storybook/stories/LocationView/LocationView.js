import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import LocationSearchBar from '../LocationSearchBar/LocationSearchBar';
import StyledText from '../StyledText/StyledText';
import { Text } from 'react-native';
import Publish from '../PublisherBtn/PublisherBtn';


export default function LocationView(props) {
    const styles = StyleSheet.create({
        container: {
            height: 400,
            width: '100%',
            alignItems: 'center',
        },
        map: {
            ...StyleSheet.absoluteFill,
            zIndex: -1,
            marginTop: 50,
            marginBottom: 40,
            height: 389
        },
    });




    return (
        <View style={styles.container}>
            <View style={{ position: 'relative', top: -120, alignContent: 'center', flex: 1 }}>

                <View style={{ marginBottom: 13 }}>
                    <StyledText size="header">My Location</StyledText>
                </View>
                <View style={{ marginBottom: 26 }}>
                    <StyledText
                        size="subtitle"
                        color="#828282">Let your foodies know where you are</StyledText>
                </View>
                <LocationSearchBar />
            </View>
            <MapView // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    key={0}
                    coordinate={{ latitude: 37.78887, longitude: -122.4324 }}
                    title={"test"}
                    description={"this is a bogus test"}
                    image={require('../../../src/assets/images/taxi-icon.png')}
                />
                <Marker
                    key={1}
                    coordinate={{ latitude: 37.78821, longitude: -122.4325 }}
                    title={"test"}
                    description={"this is a bogus test"}
                    image={require('../../../src/assets/images/taxi-icon.png')}
                />
                <Marker
                    key={2}
                    coordinate={{ latitude: 37.78860, longitude: -122.4206 }}
                    title={"test"}
                    description={"this is a bogus test"}
                    image={require('../../../src/assets/images/taxi-icon.png')}
                />
                <Marker
                    key={3}
                    coordinate={{ latitude: 37.78120, longitude: -122.4327 }}
                    title={"test"}
                    description={"this is a bogus test"}
                    image={require('../../../src/assets/images/taxi-icon.png')}
                />
                <Marker
                    key={4}
                    coordinate={{ latitude: 37.78127, longitude: -122.4390 }}
                    title={"test"}
                    description={"this is a bogus test"}
                    image={require('../../../src/assets/images/taxi-icon.png')}
                />
            </MapView>
            <View style={{ top: 150 }}>
                <Publish title="Publish" />
            </View>
        </View >
    )
}