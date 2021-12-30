import { Story } from '@storybook/react';
import React from 'react';
import { Headline, HeadlineProps } from './index';

const HeadlineStory = {
  title: 'Components/Atoms/Headline',
  component: Headline,
};

export default HeadlineStory;

const Template: Story<HeadlineProps> = (args) => <Headline {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: 'foo',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  headline: 'foo',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  headline: 'foo',
  size: 'small',
};
