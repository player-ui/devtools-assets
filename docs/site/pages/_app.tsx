import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { theme } from '../components/chakra-theme';
import { Context } from '../components/Context';
import './globals.css';


// algolia uses data-theme to swap in CSS
// Sync the chakra theme w/ the document
const HTMLThemeSetter = () => {
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode);
  }, [colorMode]);

  return null;
};

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Context>
        <ChakraProvider theme={theme}>
          <HTMLThemeSetter />
          <Component {...pageProps} />
        </ChakraProvider>
      </Context>
    </>
  );
};

export default MyApp;
