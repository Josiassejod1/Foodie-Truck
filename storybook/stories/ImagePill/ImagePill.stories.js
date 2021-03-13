import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import ImagePill from '../ImagePill/ImagePill';


const imageStories = storiesOf('ImagePill', module);
imageStories.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/zKpECFBg7fdCS7A8VNTPtr/Food-Truck-App?node-id=8%3A3" // <-- paste here!
    }
}
imageStories.add('image pill', () => (<CenterView>
    <ImagePill width={101} height={97} src="https://picsum.photos/200/300" />
</CenterView>));

