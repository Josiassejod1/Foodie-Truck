import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import LocationView from './LocationView';


const LocationViewStory = storiesOf('Location Page', module);

LocationViewStory.add('location page', () => (<CenterView>
    <LocationView />
</CenterView>));

