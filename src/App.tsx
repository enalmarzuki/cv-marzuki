import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import Component from "./router";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import theme from "./theme";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Component />
    </ChakraProvider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
