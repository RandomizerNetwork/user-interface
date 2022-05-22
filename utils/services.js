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
    logo: randomizerLogo,
    description: 'A unique chance to get a key that opens a world of possibilities in the decentralized trustless metaverse. The Randomizer Network DAO (Meta Game Pass) is backed by Chainlink VRF & Keepers and gives a daily chance to win RN Governance Tokens in the Daily No Loss Lottery.',
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
