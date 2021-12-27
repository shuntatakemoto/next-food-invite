import { Story } from '@storybook/react';
import React from 'react';

import { Footer, FooterProps } from './index';

const FooterStory = {
  title: 'Components/Organisms/Footer',
  component: Footer,
};

export default FooterStory;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = { isSignedIn: true };

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
