import Notify from 'bnc-notify'

import randomizerLogo from '../public/assets/images/logo/randomizer-network-icon'
import randomizerIcon from '../public/assets/images/logo/randomizer-network-icon'

import { init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import trezorModule from '@web3-onboard/trezor'
import ledgerModule from '@web3-onboard/ledger'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import portisModule from '@web3-onboard/portis'
// import magicModule from '@web3-onboard/magic'
import fortmaticModule from '@web3-onboard/fortmatic'
import torusModule from '@web3-onboard/torus'
import keepkeyModule from '@web3-onboard/keepkey'
import gnosisModule from '@web3-onboard/gnosis'

// Replace with your DApp's Infura ID
const INFURA_ID = '4c65cab24c974638ab3923b95ed43af7'

const networkId = 4
const apiUrl = process.env.REACT_APP_API_URL
const dappId = 'c560dafb-1c89-4a7e-ba5e-04fc3ff3b3d4'

const injected = injectedModule()
const coinbase = coinbaseModule()
const walletConnect = walletConnectModule()

const portis = portisModule({
  apiKey: '9b705b33-243a-4d62-8b5e-374a835d5349'
})

const fortmatic = fortmaticModule({
  apiKey: 'pk_test_FB94979843115F9F' // pk_live_3056B2E9CDD9868B
})

const torus = torusModule()
const ledger = ledgerModule()
const keepkey = keepkeyModule()

const gnosis = gnosisModule()

const trezorOptions = {
  email: 'team@randomizer.network',
  appUrl: 'https://www.randomizer.network'
}

const trezor = trezorModule(trezorOptions)

// const magic = magicModule({
//   // Example api key, may need to be updated when max hits reached
//   // Get one to test with for free from https://magic.link/
//   apiKey: 'pk_live_47038A87C6523783',
//   userEmail: localStorage.getItem('magicUserEmail')
// })

export const initWeb3Onboard = init({
  wallets: [
    injected,
    ledger,
    coinbase,
    trezor,
    walletConnect,
    gnosis,
    // magic,
    fortmatic,
    keepkey,
    portis,
    torus
  ],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum',
      rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`
    },
    {
      id: '0x3',
      token: 'tROP',
      label: 'Ropsten',
      rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`
    },
    {
      id: '0x4',
      token: 'rETH',
      label: 'Rinkeby',
      rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`
    },
    {
      id: '0x38',
      token: 'BNB',
      label: 'Binance',
      rpcUrl: 'https://bsc-dataseed.binance.org/'
    },
    {
      id: '0x89',
      token: 'MATIC',
      label: 'Polygon',
      rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
    },
    {
      id: '0xfa',
      token: 'FTM',
      label: 'Fantom',
      rpcUrl: 'https://rpc.ftm.tools/'
    }
  ],
  appMetadata: {
    name: 'Randomizer Network',
    icon: randomizerIcon,
    logo: randomizerIcon,
    description: 'A unique chance to get a key that opens a world of possibilities in the decentralized trustless metaverse. The Randomizer Network DAO (Meta Game Pass) is backed by Chainlink VRF & Keepers and gives a daily chance to win RANDOM Governance Tokens in the Daily Draw.',
    recommendedInjectedWallets: [
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      { name: 'MetaMask', url: 'https://metamask.io' }
    ],
    agreement: {
      version: '1.0.0',
      termsUrl: 'https://www.randomizer.network/terms-conditions',
      privacyUrl: 'https://www.randomizer.network/privacy-policy'
    },
    gettingStartedGuide: 'https://randomizer.network',
    explore: 'https://randomizer.network'
  },
  i18n: {
    "connect": {
      "selectingWallet": {
        "header": "Available Wallets",
        "sidebar": {
          "heading": "Get Started",
          "subheading": "Connect your wallet",
          "paragraph": "Connecting your wallet is like “logging in” to Web3. Select your wallet from the options to get started."
        },
        "recommendedWalletsPart1": "{app} only supports",
        "recommendedWalletsPart2": "on this platform. Please use or install one of the supported wallets to continue",
        "installWallet": "You do not have any wallets installed that {app} supports, please use a supported wallet",
        "agreement": {
          "agree": "I agree to the",
          "terms": "Terms & Conditions",
          "and": "and",
          "privacy": "Privacy Policy"
        }
      },
      "connectingWallet": {
        "header": "{connectionRejected, select, false {Connecting to {wallet}...} other {Connection Rejected}}",
        "sidebar": {
          "subheading": "Approve Connection",
          "paragraph": "Please approve the connection in your wallet and authorize access to continue."
        },
        "mainText": "Connecting...",
        "paragraph": "Make sure to select all accounts that you want to grant access to.",
        "rejectedText": "Connection Rejected!",
        "rejectedCTA": "Click here to try again",
        "primaryButton": "Back to wallets"
      },
      "connectedWallet": {
        "header": "Connection Successful",
        "sidebar": {
          "subheading": "Connection Successful!",
          "paragraph": "Your wallet is now connected to {app}"
        },
        "mainText": "Connected"
      }
    },
    "modals": {
      "actionRequired": {
        "heading": "Action required in {wallet}",
        "paragraph": "Please switch the active account in your wallet.",
        "linkText": "Learn more.",
        "buttonText": "Okay"
      },
      "switchChain": {
        "heading": "Switch Chain",
        "paragraph1": "{app} requires that you switch your wallet to the {nextNetworkName} network to continue.",
        "paragraph2": "*Some wallets may not support changing networks. If you can not change networks in your wallet you may consider switching to a different wallet."
      },
      "confirmDisconnectAll": {
        "heading": "Disconnect all Wallets",
        "description": "Are you sure that you would like to disconnect all your wallets?",
        "confirm": "Confirm",
        "cancel": "Cancel"
      }
    },
    "accountCenter": {
      "connectAnotherWallet": "Connect another Wallet",
      "disconnectAllWallets": "Disconnect all Wallets",
      "currentNetwork": "Current Network",
      "appInfo": "App Info",
      "learnMore": "Learn More",
      "gettingStartedGuide": "Getting Started Guide",
      "smartContracts": "Smart Contract(s)",
      "explore": "Explore",
      "backToApp": "Back to App",
      // "poweredBy": "powered by",
      "addAccount": "Add Account",
      "setPrimaryAccount": "Set Primary Account",
      "disconnectWallet": "Disconnect Wallet"
    }
  }
  
})

export function initNotify() {
  return Notify({
    dappId,
    networkId,
    apiUrl,
    onerror: error => console.log(`Notify error: ${error.message}`)
  })
}
