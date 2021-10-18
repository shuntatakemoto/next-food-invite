import { Story } from '@storybook/react';
// import React from 'react';

// import { Header } from './index';

// export default {
//   title: 'Components/Header',
//   component: Header,
// };

// type HeaderProps＝{
//     background:string,

// };
// const Template: Story<HeaderProps> = (args) => <Header {...args} />;

// export const Primary = Template.bind({});
// Primary.args = { background: '#ff0', label: 'Button' };

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './index';

storiesOf('organisms', module).add('Header', () => <Header />);
