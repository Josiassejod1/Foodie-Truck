import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';
import CategoryPill from '../CategoryPill/CategoryPill';


const categoryPillStories = storiesOf('CategoryPill', module);
categoryPillStories.add('default category pill', () => (<CenterView>
    <CategoryPill title="Haitian" selected={false} />
</CenterView>));

categoryPillStories.add('selected category pill', () => (<CenterView>
    <CategoryPill title="Haitian" selected={true} />
</CenterView>));