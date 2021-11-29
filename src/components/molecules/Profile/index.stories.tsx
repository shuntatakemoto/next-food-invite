import { Story } from '@storybook/react';
import React from 'react';

import { Profile, ProfileProps } from './index';

export default {
  title: 'Components/molecules/Profile',
  component: Profile,
};

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  photoUrl: 'https://pbs.twimg.com/profile_images/1456218103348862976/4Cyrlwd4_normal.jpg',
  displayName: 'foo',
};
