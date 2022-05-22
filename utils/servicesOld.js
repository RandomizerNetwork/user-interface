import stagingOnboard from 'bnc-onboard-staging'
import stagingNotify from 'bnc-notify-staging'
import Notify from 'bnc-notify'
import Onboard from 'bnc-onboard'
import { seed } from "../constants/tokens.js"

const prod = process.env.NODE_ENV == "production";

const seeds = (seedName) => (seed.filter(seeds => seeds.name == seedName));  
const ID = seeds("NETWORK")[0].id;

const apiUrl = process.env.REACT_APP_API_URL
const staging = process.env.REACT_APP_STAGING
const rpcUrl = `https://data-seed-prebsc-1-s1.binance.org:8545`
// const rpcUrl = `https://${NETWORK}.infura.io/v3/4c65cab24c974638ab3923b95ed43af7`
const networkId = 97;
// const networkId = ID;
const dappId = 'c560dafb-1c89-4a7e-ba5e-04fc3ff3b3d4'
const CONTACT_EMAIL = "support@randomizer.network"
const APP_URL = "https://localhost:3000"
const FORTMATIC_KEY = staging ? "pk_live_3056B2E9CDD9868B" : "pk_test_FB94979843115F9F"
const PORTIS_KEY = "9b705b33-243a-4d62-8b5e-374a835d5349"
const INFURA_KEY = "4c65cab24c974638ab3923b95ed43af7"

export function initOnboard(subscriptions) {
  try {
    const onboard = staging ? stagingOnboard : Onboard
    return onboard({
      dappId,
      hideBranding: true,
      networkId,
      apiUrl,
      darkMode: false,
      subscriptions,
      walletSelect: {
        wallets: [
          { walletName: 'metamask', preferred: true },
          { walletName: 'coinbase', preferred: true },
          { walletName: 'trust', rpcUrl, preferred: true },
          {
            walletName: 'trezor',
            appUrl: APP_URL,
            email: CONTACT_EMAIL,
            rpcUrl
          },
          {
            walletName: 'ledger',
            rpcUrl
          },
          {
            walletName: 'walletConnect',
            infuraKey: INFURA_KEY
          },
          // { walletName: 'cobovault', appName: 'Launchpad', rpcUrl },
          { walletName: 'keystone', appName: 'Launchpad', rpcUrl },
          { walletName: 'keepkey', rpcUrl },
          {
            walletName: 'lattice',
            appName: 'Launchpad',
            rpcUrl
          },
          { walletName: 'status' },
          { walletName: 'walletLink', rpcUrl },
          {
            walletName: 'portis',
            apiKey: PORTIS_KEY
          },
          { walletName: 'fortmatic', apiKey: FORTMATIC_KEY },
          { walletName: 'torus', buildEnv: prod ? 'production' : 'staging' },
          // { walletName: 'torus' },
          // {
          //   walletName: 'mewwallet',
          //   rpcUrl: rpcUrl
          // },
          { walletName: 'opera' },
          { walletName: 'operaTouch' },
          { walletName: 'imToken', rpcUrl },
          { walletName: 'meetone' },
          { walletName: 'mykey', rpcUrl },
          { walletName: 'wallet.io', rpcUrl },
          { walletName: 'huobiwallet', rpcUrl },
          { walletName: 'alphawallet', rpcUrl },
          { walletName: 'hyperpay' },
          { walletName: 'atoken' },
          { walletName: 'liquality' },
          { walletName: 'frame' },
          { walletName: 'tokenpocket', rpcUrl },
          { walletName: 'authereum', disableNotifications: true },
          { walletName: 'ownbit' },
          { walletName: 'gnosis' },
          { walletName: 'dcent' },
          { walletName: 'bitpie' },
          { walletName: 'xdefi' },
          { walletName: 'binance' },
          // { walletName: 'tp' },
        ]
      },
      walletCheck: [
        { checkName: 'derivationPath' },
        { checkName: 'connect' },
        { checkName: 'accounts' },
        { checkName: 'network' },
        // { checkName: 'balance', minimumBalance: '100000' },
      ]
    })
  } catch (error) { console.log('error', error) }
}

export function initNotify() {
  try {
    const notify = staging ? stagingNotify : Notify
    // console.log('notify status', notify)
    return notify({
      dappId,
      networkId,
      darkMode: false,
      desktopPosition: 'topRight',
      mobilePosition: 'top',
      apiUrl,
      notifyMessages,
      onerror: error => { } // console.log(`Notify error: ${error.message}`)
    })
  } catch (error) { console.log('error', error) }
}

const notifyMessages = {
  en: {
    transaction: {
      firstLoad: 'Loading Notifications',
      approved: 'Successfully Approved Tokens!',
      contributing: 'Successfully Contributed! Congrats !!!',
      txRequest: 'Your transaction is waiting for you to confirm',
      nsfFail: 'You do not have sufficient funds to complete this transaction.',
      txUnderpriced: 'The gas price for your transaction is too low, please try again with a higher gas price',
      txRepeat: 'This could be a repeat transaction',
      txAwaitingApproval: 'You have a previous transaction waiting for you to confirm',
      txConfirmReminder: 'Confirm your transaction to continue, the transaction window may be behind your browser',
      txSendFail: 'You declined the transaction',
      txSent: 'Your transaction has been sent to the network.',
      txStallPending: 'Your transaction has stalled and you have not entered the transaction group',
      txPool: 'Your transaction has started',
      txStallConfirmed: 'Your transaction has stalled and has not been confirmed.',
      txSpeedUp: 'Your transaction has been expedited',
      txCancel: 'Your transaction is being canceled',
      txFailed: 'Your transaction has failed',
      txConfirmed: 'Your transaction has been successful.',
      txError: 'Oops, something went wrong, please try again.'
    },
    watched: {
      txPool: 'your account is {verb, select, receiving {receiving} sending {sending}} {formattedValue} {asset} {preposition, select, from {from} to {a}} {counterpartyShortened}',
      txSpeedUp: 'your account is {verb, select, receiving {receiving} sending {sending}} {formattedValue} {asset} {preposition, select, from {from} to {a}} {counterpartyShortened}',
      txCancel: 'your account is {verb, select, receiving {receiving} sending {sending}} {formattedValue} {asset} {preposition, select, from {from} to {a}} {counterpartyShortened}',
      txConfirmed: 'your account {verb, select, received {received} sent {sent}} successfully {formattedValue} {asset} {preposition, select, from {de} to {a}} {counterpartyShortened}',
      txFailed: 'your account failed {verb, select, received {received} sent {sent}} successfully {formattedValue} {asset} {preposition, select, from {de} to {a}} {counterpartyShortened}'
    },
    time: {
      minutes: 'min',
      seconds: 'sec'
    }
  },
  es: {
    transaction: {
      txRequest: 'Su transacción está esperando que confirme',
      nsfFail: 'No tiene fondos suficientes para completar esta transacción.',
      txUnderpriced:
        'El precio del gas para su transacción es demasiado bajo, intente nuevamente con un precio del gas más alto',
      txRepeat: 'Esto podría ser una transacción repetida',
      txAwaitingApproval:
        'Tienes una transacción anterior esperando que confirmes',
      txConfirmReminder:
        'Confirme su transacción para continuar, la ventana de transacción puede estar detrás de su navegador',
      txSendFail: 'Rechazaste la transacción',
      txSent: 'Su transacción ha sido enviada a la red.',
      txStallPending:
        'Su transacción se ha estancado y no ha ingresado al grupo de transacciones',
      txPool: 'Su transacción ha comenzado',
      txStallConfirmed:
        'Su transacción se ha estancado y no ha sido confirmada.',
      txSpeedUp: 'Su transacción ha sido acelerada',
      txCancel: 'Tu transacción está siendo cancelada',
      txFailed: 'Su transacción ha fallado',
      txConfirmed: 'Su transacción ha tenido éxito.',
      txError: 'Vaya, algo salió mal, por favor intente nuevamente'
    },
    watched: {
      txPool:
        'su cuenta está {verb, select, receiving {recibiendo} sending {enviando}} {formattedValue} {asset} {preposition, select, from {desde} to {a}} {counterpartyShortened}',
      txSpeedUp:
        'su cuenta está {verb, select, receiving {recibiendo} sending {enviando}} {formattedValue} {asset} {preposition, select, from {desde} to {a}} {counterpartyShortened}',
      txCancel:
        'su cuenta está {verb, select, receiving {recibiendo} sending {enviando}} {formattedValue} {asset} {preposition, select, from {desde} to {a}} {counterpartyShortened}',
      txConfirmed:
        'su cuenta {verb, select, received {recibió} sent {ha enviado}} con éxito {formattedValue} {asset} {preposition, select, from {de} to {a}} {counterpartyShortened}',
      txFailed:
        'su cuenta fallado {verb, select, received {recibió} sent {ha enviado}} con éxito {formattedValue} {asset} {preposition, select, from {de} to {a}} {counterpartyShortened}'
    },
    time: {
      minutes: 'min',
      seconds: 'sec'
    }
  }
}