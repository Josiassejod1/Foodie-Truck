import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import StyledText from '../StyledText/StyledText';
import LocationModal from './LocationModal';
import PubliserBtn from '../PublisherBtn/PublisherBtn';
import { View } from 'react-native';


const locationModal = storiesOf('Location Modal', module);

locationModal.add('location modal', () => (<CenterView>
    <LocationModal header="Enable Your Location">
        <View style={{
            paddingLeft: 26,
            paddingRight: 26,
            justifyContent: 'center',
            marginBottom: 24,
            textAlign: 'center',
            maxWidth: 320
        }}>
            <StyledText size="l">
                Please allow to use your location to show nearby food trucks on the map.
        </StyledText>
        </View>
        <View style={{
            marginBottom: 18,
            justifyContent: 'center'
        }}>
            <PubliserBtn title="Enable Location"></PubliserBtn>
        </View>
    </LocationModal>
</CenterView>));

