import { Story } from '@storybook/react';
import React from 'react';

import { SubProfile, SubProfileProps } from './index';

export default {
  title: 'Components/molecules/SubProfile',
  component: SubProfile,
};

const Template: Story<SubProfileProps> = (args) => <SubProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatar: 'https://pbs.twimg.com/profile_images/1456218103348862976/4Cyrlwd4_normal.jpg',
  username: 'foo',
};
