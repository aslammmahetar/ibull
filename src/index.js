import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Provider } from "react-redux";
import { store, persistor } from "Redux/store"; // Import the persistor
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
