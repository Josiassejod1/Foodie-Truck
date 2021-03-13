import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import StyledText from '../StyledText/StyledText';


const styledText = storiesOf('StyledText', module);
styledText.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/zKpECFBg7fdCS7A8VNTPtr/Food-Truck-App?node-id=8%3A3" // <-- paste here!
    }
}
styledText.add('styled text', () => (<CenterView>
    <StyledText size="xtra-sm" text="Hello World" />
    <StyledText size="sm" text="Hello World" />
    <StyledText size="xtra-m" text="Hello World" />
    <StyledText size="m" text="Hello World" />
    <StyledText size="l" text=" Hello World" />
    <StyledText size="header" text="Hello World" />
    <StyledText size="subheader" text=" Hello World" />
</CenterView>));

