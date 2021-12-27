import { Story } from '@storybook/react';
import React from 'react';

import { Header, HeaderProps } from './index';

const HeaderStory = {
  title: 'Components/Organisms/Header',
  component: Header,
};

export default HeaderStory;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = { isSignedIn: true };

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
