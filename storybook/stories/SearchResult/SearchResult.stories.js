import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import SearchResult from './SearchResult';


const searchResult = storiesOf('Search Result', module);
searchResult.add('default category pill', () => (<CenterView>
    <SearchResult title="Don Pablos Burrito" category={'Mexican'} distance={'0.5 miles'} src={"https://picsum.photos/id/1080/300/300"} />
</CenterView>));