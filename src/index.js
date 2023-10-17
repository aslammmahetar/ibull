import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Correct path to App component
import { store, persistor } from "./Redux/store"; // Import the persistor
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");

const root = createRoot(container);

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
