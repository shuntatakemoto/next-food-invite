import { Story } from '@storybook/react';
import React from 'react';

import { Footer, FooterProps } from './index';

export default {
  title: 'Components/Organisms/Footer',
  component: Footer,
};

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = { isSignedIn: true };

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
