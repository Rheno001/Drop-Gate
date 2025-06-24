import React from "react";
import { ConnectButton } from "thirdweb/react";
import { client } from "../client";

const ConnectWallet: React.FC = () => {
  return (
    <ConnectButton
      client={client}
      appMetadata={{
        name: "DropGate",
        url: "https://dropgate.io", // update with your actual domain
      }}
    />
  );
};

export default ConnectWallet;
