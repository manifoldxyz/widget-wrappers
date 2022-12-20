export enum EthereumNetwork {
  MAINNET = 1,
  RINKEBY = 4,
  GOERLI = 5,
  OPTIMISM = 10,
  MATIC = 137,
  ARBITRUM = 42161,
  MUMBAI = 80001,
}

export type ConnectProps = {
  showBalance?: boolean;
  connectWalletImage?: string;
  showChain?: boolean;
  avatar?: string;
  multi?: boolean;
  minimal?: boolean;
  fallbackProvider: string;
  network?: EthereumNetwork;
  parentFrameURL?: string;
  autoReconnect?: boolean;
  overrideConnectText?: string;
  striuctAuth?: boolean;
  delayAuth?: boolean;
  clientId: string;
  appName: string;
  grantType?: string;
  detectApp?: boolean;
  message?: string;
};
