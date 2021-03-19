import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import PublisherBtn from '../PublisherBtn/PublisherBtn';


const publisherBtb = storiesOf('Publisher Button', module);
publisherBtb.add('default category pill', () => (<CenterView>
    <PublisherBtn title="Publish" selected={false} />
</CenterView>));