# `@manifoldxyz/react`

Manifold widgets consumable directly in React.

## Installation
`yarn add @manifoldxyz/react`

## Usage
```tsx
  import {ConnectWidget, EthereumNetwork} from '@manifoldxyz/react'

  // somewhere in your app
  <ConnectWidget version="2.2.2" clientId="my-client-id" appName="my-app-name" network={EthereumNetwork.MAINNET} />
```

## Styles
Each widget will download its own CSS file(s). The main interface for styling widget is with CSS variables. Beyond that, for further customization you can override the styles for a given DOM node directly, however backwards compatibility is not guaranteed.
