import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import ImageSlide  from './ImageSlide';


const imageSlide = storiesOf('Image Slide', module);
const images = [
    {
        id: 1,
        url: "https://source.unsplash.com/random/200x200?sig=1"
    },
    {
        id: 2,
        url: "https://source.unsplash.com/random/200x200?sig=2"
    },
    {
        id: 3,
        url: "https://source.unsplash.com/random/200x200?sig=3"
    },
    {
        id: 4,
        url: "https://source.unsplash.com/random/200x200?sig=4"
    }
]
imageSlide.add('image slide show', () => (
   <ImageSlide images={images}></ImageSlide>
));

