import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import ResultPage from './ResultPage';


const ResultViewStory = storiesOf('Result Page', module);

ResultViewStory.add('result page', () => (<CenterView>
    <ResultPage />
</CenterView>));

