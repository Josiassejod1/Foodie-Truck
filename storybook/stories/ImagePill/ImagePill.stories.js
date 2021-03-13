import React from 'react';
import { Image, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import ImagePill from '../ImagePill/ImagePill';


const imageStories = storiesOf('ImagePill', module);
imageStories.add('default view', () => (<CenterView>
    <ImagePill width={101} height={97} src="https://picsum.photos/200/300" />
</CenterView>));