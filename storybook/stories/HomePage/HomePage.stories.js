import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import ImagePill from '../ImagePill/ImagePill';
import { HomePage } from './HomePage';


const homePageStory = storiesOf('Home Page', module);
homePageStory.add('home page', () => (<CenterView>
    <HomePage />
</CenterView>));

