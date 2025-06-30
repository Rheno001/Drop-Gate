// // components/ConnectWallet.tsx
// import { createThirdwebClient } from "thirdweb";
// import { ConnectButton } from "thirdweb/react";
// import { createWallet } from "thirdweb/wallets";

// const client = createThirdwebClient({
//   clientId: "e74eb098fed6066b3fd047add5271867", // Replace with your real client ID from thirdweb dashboard
// });

// const wallets = [
//   createWallet("io.metamask"),
//   createWallet("com.coinbase.wallet"),
//   createWallet("me.rainbow"),
//   createWallet("io.rabby"),
//   createWallet("io.zerion.wallet"),
// ];

// const ConnectWallet = () => {
//   return (
//     <ConnectButton
//       client={client}
//       connectModal={{ size: "compact" }}
//       wallets={wallets}
//     />
//   );
// };

// export default ConnectWallet;
