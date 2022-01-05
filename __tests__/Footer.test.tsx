/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';

import { Footer } from '../src/components/organisms/Footer';

const signOut = jest.fn();

test('is  not signed in', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});

test('is signed in', () => {
  const { asFragment } = render(<Footer isSignedIn={true} signOut={signOut} />);
  expect(asFragment()).toMatchSnapshot();
});
