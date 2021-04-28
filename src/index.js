import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GlobalState from "./Store/GlobalState";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </StrictMode>,
  rootElement
);
