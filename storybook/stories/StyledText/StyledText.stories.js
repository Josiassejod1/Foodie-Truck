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
styledText.add('extra small text', () => (<CenterView>
    <StyledText size="xtra-sm" text="Hello World" />
</CenterView>));


styledText.add('small text', () => (<CenterView>
    <StyledText size="sm" text="Hello World" />
</CenterView>));

styledText.add('extra medium text', () => (<CenterView>
    <StyledText size="xtra-m" text="Hello World" />
</CenterView>));

styledText.add('medium text', () => (<CenterView>
    <StyledText size="m" text="Hello World" />
</CenterView>));

styledText.add('large text', () => (<CenterView>
    <StyledText size="l" text="Hello World" />
</CenterView>));

styledText.add('header text', () => (<CenterView>
    <StyledText size="header" text="Hello World" />
</CenterView>));

styledText.add('subtitle text', () => (<CenterView>
    <StyledText size="subtitle" text="Hello World" />
</CenterView>));