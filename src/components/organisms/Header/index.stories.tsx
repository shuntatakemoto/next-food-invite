import { Story } from '@storybook/react';
import React from 'react';

import { Header, HeaderProps } from './index';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
};

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = { isSignedIn: true };

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
