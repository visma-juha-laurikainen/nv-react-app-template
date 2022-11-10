import { NvClientProvider, parseAttributes } from "@visma-netvisor/app-tools";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { API_URL } from "./constants";
import { setupI18n } from "./i18";

const rootElement = document.getElementById("root")!;
const reactRoot = createRoot(rootElement);
const rootAttributes = parseAttributes(rootElement);
const i18n = setupI18n(rootAttributes.lang);

reactRoot.render(
  <React.StrictMode>
    <NvClientProvider
      appSettings={rootAttributes}
      apiUrl={API_URL + "v1/"}
      i18n={i18n}
      sourceIdentifier="text"
    >
      <App />
    </NvClientProvider>
  </React.StrictMode>
);
