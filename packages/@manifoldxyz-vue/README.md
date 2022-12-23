# `@manifoldxyz/vue`

Manifold widgets consumable directly in Vue. 

## Installation
`yarn add @manifoldxyz/vue`

## Usage
```tsx
  import {ConnectWidget, EthereumNetwork} from '@manifoldxyz/vue'

  // somewhere in your app
  <ConnectWidget version="2.0.19" clientId="my-client-id" appName="my-app-name" network={EthereumNetwork.MAINNET} />
```

## Styles
Each widget will download its own CSS file(s). The main interface for styling widget is with CSS variables. Beyond that, for further customization you can override the styles for a given DOM node directly, however backwards compatibility is not guaranteed.
