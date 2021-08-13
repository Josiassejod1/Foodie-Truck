/// create storybook file   import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import AnnouncementPage from './AnnoucementPage';
import React from 'react';


const AnnoucmentStory = storiesOf('Annoucement Page', module);
AnnoucmentStory.add('annoucement page', () => (<CenterView>
   <AnnouncementPage />
</CenterView>));