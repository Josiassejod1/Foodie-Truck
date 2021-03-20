import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import SearchResultPage from "./SearchResultPage";


const searchResult = storiesOf('Search Result', module);
searchResult.add('default category pill', () => (<CenterView>
    <SearchResultPage title="Search Result" selected={false} />
</CenterView>));