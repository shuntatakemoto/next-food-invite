/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';

import { Header } from '../src/components/organisms/Header';

test('is  not signed in', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});

test('is signed in', () => {
  const { asFragment } = render(<Header isSignedIn={true} uid='wuDF1AcEnzZPWzBKNzU2hVETTV22' />);
  expect(asFragment()).toMatchSnapshot();
});
