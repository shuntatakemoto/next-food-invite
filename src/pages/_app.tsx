import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../components/templates/layout';
import { Auth } from '../libs/Auth';
import { store } from '../store';

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
