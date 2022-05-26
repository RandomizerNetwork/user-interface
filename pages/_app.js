import React, { useState, useEffect } from 'react'
import { Contract, providers, utils } from 'ethers'
// import { initOnboard, initNotify } from '../utils/services'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';
import position from '../utils/position';
import readProvider from '../utils/readProvider'
import getNetworkName from '../utils/getNetworkName'

import { ethers } from 'ethers'
// import VConsole from 'vconsole'
import { initWeb3Onboard, initNotify } from '../utils/services'
import { useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react'

import Preloader from '../components/Preloader'
import HeaderNav from '../components/HeaderNav'

import 'react-toastify/dist/ReactToastify.min.css';

import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/animate.css'
// import '../public/assets/css/icofont.min.css'
import '../public/assets/css/font-awesome.min.css'
import '../public/assets/css/swiper.min.css'
import '../public/assets/css/lightcase.css'
import '../public/assets/css/style.css'

import useWalletStore from '../store/useWalletStore'
import useContractsStore from '../store/useContractsStore'

import { TokenABI } from "../abis/TokenABI"
import { StakingABI } from "../abis/StakingABI"
import { contracts } from "../constants/contracts"

import { launchToast, dismissToast, warningToast } from '../utils/toastUtils';

import getBalances from '../utils/getBalances';

let provider

const internalTransferABI = [
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'to',
        type: 'address'
      }
    ],
    name: 'internalTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  }
]

let internalTransferContract

function MyApp({ Component, pageProps }) {
  const {
    ens, address, network, onboard, notify, setEns, setAddress, setNetwork, setWallet, setOnboard, setNotify,
    setProvider, setReadyToTransact, setStartBlock, setEndBlock, balance, setBalance, 
    setBalanceRANDOM, setBalanceETH, setBalanceWETH, setBalanceWBTC, setBalanceLINK, 
    setBalanceUNI, setBalanceDAI, setBalanceUSDC, setBalanceUSDT,
    endBlock, setCurrentBlockNumber, 
    
    setConnect
  } = useWalletStore();
  
  const {
    token, staking7Days, staking14Days, staking30Days, staking60Days,
    setToken, setStaking7Days, setStaking14Days, setStaking30Days, setStaking60Days
  } = useContractsStore();

  const [{ wallet }, connect, disconnect] = useConnectWallet()
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()
  const connectedWallets = useWallets()

  const [web3Onboard, setWeb3Onboard] = useState(null)
  // const [notify, setNotify] = useState(null)
  const [toAddress, setToAddress] = useState('')

  useEffect(() => {
    setWeb3Onboard(initWeb3Onboard)
    setOnboard(initWeb3Onboard); // make it globally accessible
    setNotify(initNotify())
  }, [])

  useEffect(() => {
    if (!connectedWallets.length) return

    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    )
    window.localStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWalletsLabelArray)
    )
    
    console.log('connectedWalletsLabelArray', connectedWalletsLabelArray)
    console.log('connectedWallets', connectedWallets)
    setAddress(connectedWallets[0]?.accounts[0]?.address)
    setNetwork(connectedWallets[0]?.chains[0]?.id);
    // // Check for Magic Wallet user session
    // if (connectedWalletsLabelArray.includes('Magic Wallet')) {
    //   const [magicWalletProvider] = connectedWallets.filter(
    //     provider => provider.label === 'Magic Wallet'
    //   )
    //   async function setMagicUser() {
    //     try {
    //       const { email } =
    //         await magicWalletProvider.instance.user.getMetadata()
    //       const magicUserEmail = localStorage.getItem('magicUserEmail')
    //       if (!magicUserEmail || magicUserEmail !== email)
    //         localStorage.setItem('magicUserEmail', email)
    //     } catch (err) {
    //       throw err
    //     }
    //   }
    //   setMagicUser()
    // }
  }, [connectedWallets, wallet])

  useEffect(() => {
    if (!wallet?.provider) {
      provider = null
    } else {
      provider = new ethers.providers.Web3Provider(wallet.provider, 'any')

      internalTransferContract = new ethers.Contract(
        '0xb8c12850827ded46b9ded8c1b6373da0c4d60370',
        internalTransferABI,
        provider.getUncheckedSigner()
      )

      setReadyToTransact(readyToTransact())
      setWallet(wallet)
    }
  }, [wallet])

  useEffect(() => {
    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem('connectedWallets')
    )

    if (previouslyConnectedWallets?.length && web3Onboard) {
      async function setWalletFromLocalStorage() {
        await connect({ autoSelect: previouslyConnectedWallets[0] })
        // await web3Onboard.connectWallet({ 
        //   autoSelect: { label: previouslyConnectedWallets[0], disableModals: true } 
        // })
      }
      setWalletFromLocalStorage()
    }
    setConnect(connect);
  }, [web3Onboard, connect])

  const readyToTransact = async () => {
    if (!wallet) {
      const walletSelected = await connect()
      if (!walletSelected) return false
    }
    // prompt user to switch to Rinkeby for test
    await setChain({ chainId: '0x4' })

    return true
  }

  // OLD
  // useEffect(() => {
  //   try {
  //   const onboard = initOnboard({
  //     address: setAddress,
  //     // ens: setEns,
  //     network: setNetwork,
  //     balance: setBalance,
  //     wallet: async (wallet) => {
  //       if (wallet.provider) {
  //         setWallet(wallet)
  //         // provider = new providers.Web3Provider("https://ProfitableTradingUSA:N3v3rm!nd@apis-sj.ankr.com/e96dd9de70274551a854c2d999d0ee20/270c2f3c5c3ec9a14d1c1bb869676150/binance/full/test")
  //         // provider = new providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545")
  //         // const localProvider = new providers.WebSocketProvider(`https://data-seed-prebsc-1-s1.binance.org:8545`);
  //         const localProvider = new providers.Web3Provider(wallet.provider, 'any')
  //         setProvider(localProvider);

  //         // Token deployed to: 0xde5109E98AC516532652E79859fAb5D12723D150
  //         // Staking 7 days deployed to: 0x6a229b45d34022bC21630113463be869febcA1e2
  //         // Staking 14 days Token deployed to: 0xDC11a18eAe238A71e664b636dA89Ec0306Fe13Ec
  //         // Staking 30 days Token deployed to: 0x379B2234436690488DC95ef21A5a5D594d8eF0dF
  //         // Staking 60 days Token deployed to: 0x4909B7835D6BCc0e87cCa084bF1D222443F545F1

  //         const token = new Contract(contracts.token, TokenABI, localProvider.getUncheckedSigner())
  //         const staking7Days = new Contract(contracts.staking7Days, StakingABI, localProvider.getUncheckedSigner())
  //         const staking14Days = new Contract(contracts.staking14Days, StakingABI, localProvider.getUncheckedSigner())
  //         const staking30Days = new Contract(contracts.staking30Days, StakingABI, localProvider.getUncheckedSigner())
  //         const staking60Days = new Contract(contracts.staking60Days, StakingABI, localProvider.getUncheckedSigner())

  //         setToken(token);
  //         setStaking7Days(staking7Days);
  //         setStaking14Days(staking14Days);
  //         setStaking30Days(staking30Days);
  //         setStaking60Days(staking60Days);

  //         console.log('staking7Days', staking7Days)
  //         console.log('staking14Days', staking14Days)
  //         console.log('staking30Days', staking30Days)
  //         console.log('staking60Days', staking60Days)

  //         setReadyToTransact(checkReadyToTransact)

  //         window.localStorage.setItem('selectedWallet', wallet.name)
  //       } else {
  //         setProvider(null);
  //         setWallet({})
  //       }
  //     }
  //   })

  //   setOnboard(onboard)
  //   setNotify(initNotify())

  //   } catch (error) {
  //       console.log('error', error)
  //   }
  // }, [])

  // useEffect(() => {
  //   try {
  //     const previouslySelectedWallet = window.localStorage.getItem('selectedWallet')
  //     if (previouslySelectedWallet && onboard) {
  //       onboard.walletSelect(previouslySelectedWallet)
  //     }
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // }, [onboard])

  // useEffect(() => {
  //   if (network == null || address == null) return;
  //   try { getBalances(address, setBalanceRANDOM, setBalanceETH, token) } catch (error) { console.log('error', error) }
  // }, [network, address])

  // useEffect(() => {
  //   if(network == null) return;
  //   console.log('getNetworkName(network)', getNetworkName(network))
  //   if(getNetworkName(network) == "Polygon Mainnet") {
  //     toast.dismiss(1);
  //     launchToast(`Polygon Network Connected!`, 2, 5000);
  //   } else {
  //     toast.warning(`Wrong network, please switch to the Matic Polygon Network!`, {
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: false,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       toastId: 1
  //       // toastId: receipt.blockHash
  //     });
  //   }
  // }, [network])

  // const checkReadyToTransact = async () => {
  //   try {
  //     if (!provider) {
  //       const walletSelected = await onboard.walletSelect()
  //       if (!walletSelected) return false
  //     }

  //     const ready = await onboard.walletCheck()
  //     return ready
  //   } catch (error) { 
  //     // console.log('error', error)
  //   }
  // }

  //   if (!onboard || !notify) return <div></div>
  // OLD
    
    return (
      <>
        <Head>
          <meta charSet="utf-8"/>
          <title>Randomizer Network Metaverse - Multi-chain Deflationary Launchpad</title>
          <meta name="description" content="Randomizer Metaverse Network is a No-Code Trustless Random Entropy Generator that players, creators and influencers will use to create their own DAO Distributions." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="assets/images/favicon.png" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
          <meta name="theme-color" content="#263C91"/>
          <meta name="msapplication-navbutton-color" content="#263C91"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="#263C91"/>
          <meta name="theme-color" content="#263C91"/>
          <meta property="og:title" content="Randomizer Network"/>
          <meta property="og:description" content="An incubator like no other"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="***permalink***"/>
          <meta property="og:image" content="***img***"/>
          <meta property="og:image:type" content="image/jpeg"/>
          {/* <!-- android favicon --> */}
          {/* <link rel="icon" type="image/png" href="img/main/main-pic.png"/> */}
          {/* <!-- safari format detection --> */}
          <meta name="format-detection" content="telephone=no"/>
          <meta name="format-detection" content="address=no"/>
          <meta name="format-detection" content="email=no"/>
          <meta name="format-detection" content="date=no"/>
        </Head>
      
        {/* <div className="stars">
          <div className="starsContainer" style={{height: "800px"}}>
            <video id="vidcontent" className="videoContainer" width="100%" height="100%" autoPlay loop muted >
              <source src="assets/images/metaspace/space-odyssey-hd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}

        <Preloader/>

        {/* <!-- ==========Header Section Starts Here========== --> */}
        <HeaderNav/>
        {/* <!-- ==========Header Section Ends Here========== --> */}

        {/* <!-- scrollToTop start here --> */}
        <a href="#" className="scrollToTop"><i className="icofont-rounded-up"></i></a>
        {/* <!-- scrollToTop ending here --> */}

        {/* <!-- ==========shape image Starts Here========== --> */}
        {/* <div className="body-shape">
          <img src="assets/images/shape/space-clean.png" alt="shape" />
        </div> */}
        {/* <!-- ==========shape image end Here========== --> */}

        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
}

export default MyApp
