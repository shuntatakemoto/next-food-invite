import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Auth } from '../libs/Auth';
import React from 'react';
import Layout from '../components/templates/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Auth>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Auth>
    </Provider>
  );
}
export default MyApp;
