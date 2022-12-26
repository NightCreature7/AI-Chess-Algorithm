import type { AppProps } from "next/app";
import { Box, Button, ChakraProvider, CSSReset, Link } from "@chakra-ui/react";
import theme from "../src/theme";
import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";

const GlobalStyles = createGlobalStyle`
  :root {

    --dark-square: #C58F36;
    --light-square: #FFC674;
    --available-move: #FFFFFF;
    --last-move: #FFFFBC;
  }
  html, body {
    background-color: #4567B2;
  } 
  #Root {
    height: 100%;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Worker Successfully Registered: ", registration.scope);
          },
          function (err) {
            console.log("Worker Failed: Error! ", err);
          }
        );
      });
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyles />
      <Box h="100vh">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
