import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import ImagePill from '../ImagePill/ImagePill';


const imageStories = storiesOf('ImagePill', module);
imageStories.add('small pill', () => (<CenterView>
    <ImagePill width={101} height={97} src="https://picsum.photos/200/300" />
</CenterView>));
imageStories.add('medium pill', () => (<CenterView>
    <ImagePill width={200} height={200} src="https://picsum.photos/200/300" />
</CenterView>));

imageStories.add('large pill', () => (<CenterView>
    <ImagePill width={500} height={200} src="https://picsum.photos/200/300" />
</CenterView>));
