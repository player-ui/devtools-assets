import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { theme } from "../components/chakra-theme";
import { Context } from "../components/Context";
import MdxLayout from "../components/mdx-layout";
import "./globals.css";

// Sync the chakra theme w/ the document
const HTMLThemeSetter = () => {
  const { colorMode } = useColorMode();

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorMode);
  }, [colorMode]);

  return null;
};

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Context>
        <ChakraProvider theme={theme}>
          <HTMLThemeSetter />
          <MdxLayout>
            <Head>
              <title>Devtools</title>
            </Head>
            <Component {...pageProps} />
          </MdxLayout>
        </ChakraProvider>
      </Context>
    </>
  );
};

export default MyApp;
