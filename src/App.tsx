import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import Component from "./router";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Component />
  </ChakraProvider>
);
