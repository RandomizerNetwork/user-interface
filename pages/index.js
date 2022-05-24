import Head from 'next/head'
// import Image from 'next/image'
// import { pure } from 'recompose';

import MetaPassSection from '../components/MetaPassSection'
import MetaPassInfoSection from '../components/MetaPassInfoSection'
import JoinTheRevolutionSection from '../components/JoinTheRevolutionSection'
import LaunchpadPoolsSection from '../components/LaunchpadPoolsSection'
import LaunchpadSection from '../components/LaunchpadSection'
import LaunchpadExplanationSection from '../components/LaunchpadExplanationSection'
import LaunchpadTokenomicsSection from '../components/LaunchpadTokenomicsSection'
import LaunchpadFeesDistributionSection from '../components/LaunchpadFeesDistributionSection'
import LaunchpadStakingSystemSection from '../components/LaunchpadStakingSystemSection'
import SwitchWalletModal from '../components/SwitchWalletModal'
import StarsBackground from '../components/StarsBackground'
import Footer from '../components/Footer'
import useWalletStore from '../store/useWalletStore'

export default function Home() {
  const {
    ens, address, network, wallet, onboard, notify, provider, setEns, setAddress, setNetwork, setWallet, setOnboard, setNotify,
    setProvider, readyToTransact, setReadyToTransact, setStartBlock, setEndBlock, setBalanceETH, setBalanceWETH, setBalanceWBTC, setBalanceLINK,
    setBalanceUNI, setBalanceDAI, setBalanceUSDC, setBalanceUSDT,
    endBlock, setCurrentBlockNumber
  } = useWalletStore();

  // console.log('showWalletsModal', showWalletsModal)
  // console.log('address == null', address == null)
  // console.log('address == undefined', address == undefined)
  return (
    <>
      <Head>
        <title>Randomizer Network - Multi-chain Metaverse Launchpad for Web3 Startups</title>
        <meta name="description" content="Randomizer Network is a Decentranlized Randomization Protocol that enables Programable Distributions with Randomness Emissions and Staking for DAO Tokens and NFT Campaigns backed by Chainlinks Verificables Function and Keepers on top of all EVM Chains!" />
      </Head>
      <div>
        <StarsBackground />
        <SwitchWalletModal readyToTransact={readyToTransact} address={address} />

        <MetaPassSection />
        <MetaPassInfoSection />
        <JoinTheRevolutionSection />
        <LaunchpadPoolsSection />
        <LaunchpadSection />
        <LaunchpadExplanationSection />
        <LaunchpadTokenomicsSection />
        <LaunchpadEmissionsSection />
        <LaunchpadFeesDistributionSection/>
        <LaunchpadStakingSystemSection/>
        <Footer />
      </div>
    </>
  )
}
// export default pure(Home);