import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import '../styles/globals.css';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My page</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
