import { Story } from '@storybook/react';
import React from 'react';

import { Profile, ProfileProps } from './index';

const ProfileStory = {
  title: 'Components/molecules/Profile',
  component: Profile,
};

export default ProfileStory;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: [
    {
      avatar: 'https://pbs.twimg.com/profile_images/1456218103348862976/4Cyrlwd4_normal.jpg',
      username: 'foo',
      id: 'foo',
      listname: 'foo',
      timestamp: undefined,
      emojiname: '',
    },
  ],
  userInfo: {
    avatar: 'foo',
    id: 'foo',
    username: 'foo',
    timestamp: undefined,
    userid: 'foo',
    twitterid: '1311159493359624193',
  },
};
