import { Story } from '@storybook/react';
import React from 'react';
import FullList, { FullListProps } from './index';

const FullPostStory = {
  title: 'Components/molecules/FullList',
  component: FullList,
};

export default FullPostStory;

const Template: Story<FullListProps> = (args) => <FullList {...args} />;

export const Default = Template.bind({});
Default.args = {
  uid: 'foo',
  posts: [
    {
      avatar: 'foo',
      id: 'foo',
      listname: 'foo',
      username: 'foo',
      timestamp: undefined,
      emojiname: 'grinning',
    },
  ],
};

export const NoLists = Template.bind({});
NoLists.args = {
  uid: 'foo',
  posts: [],
};
