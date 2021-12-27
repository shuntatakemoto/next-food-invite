import { Story } from '@storybook/react';
import React from 'react';

import FullPost, { FullPostProps } from './index';

const FullPostStory = {
  title: 'Components/molecules/FullPost',
  component: FullPost,
};

export default FullPostStory;

const Template: Story<FullPostProps> = (args) => <FullPost {...args} />;

export const Default = Template.bind({});
Default.args = {
  uid: 'foo',
  listId: 'foo',
  listname: 'foo',
  username: 'foo',
  timestamp: undefined,
  emojiname: 'grinning',
  isBookmarkPage: false,
};

export const BookmakPage = Template.bind({});
BookmakPage.args = {
  uid: 'foo',
  listId: 'foo',
  listname: 'foo',
  username: 'foo',
  timestamp: undefined,
  emojiname: 'grinning',
  isBookmarkPage: true,
};
