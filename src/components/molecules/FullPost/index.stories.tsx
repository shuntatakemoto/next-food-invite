import { Story } from '@storybook/react';
import React from 'react';

import { FullPost, FullPostProps } from './index';

export default {
  title: 'Components/molecules/FullPost',
  component: FullPost,
};

const Template: Story<FullPostProps> = (args) => <FullPost {...args} />;

export const Default = Template.bind({});
Default.args = {
  uid: 'foo',
  listId: 'foo',
  listname: 'foo',
  username: 'foo',
  timestamp: undefined,
  emojiname: 'grinning',
};
