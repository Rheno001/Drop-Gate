import React from "react";
import { createRoot } from "react-dom/client";
import  App  from "./App";
// import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";
import { WagmiProvider } from "wagmi";
import { filecoin, filecoinCalibration } from "wagmi/chains";
import { http, createConfig } from "@wagmi/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [filecoinCalibration, filecoin],
  connectors: [],
  transports: {
    [filecoin.id]: http(),
    [filecoinCalibration.id]: http(),
  },
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <RainbowKitProvider
            modalSize="compact"
            initialChain={filecoinCalibration.id}
          >
            <App />
          </RainbowKitProvider>
        </WagmiProvider>
      </QueryClientProvider>
  </React.StrictMode>
);
