import { Story } from '@storybook/react';
import React from 'react';

import { Share, ShareProps } from './index';

const ShareStory = {
  title: 'Components/molecules/Share',
  component: Share,
};

export default ShareStory;

const Template: Story<ShareProps> = (args) => <Share {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'foo',
  url: 'https://google.com',
  onClick: undefined,
};
