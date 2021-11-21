/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import theme from '../styles/theme';
import store from '../redux/store/index';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My page</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ThemeProvider>
        </>
    );
}
