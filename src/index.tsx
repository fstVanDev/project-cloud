import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import Providers from "./Providers";


const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Providers>
          <App />
        </Providers>
      </Web3ReactProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);
