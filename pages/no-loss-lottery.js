import { useState } from 'react'
import Head from 'next/head'
import { utils } from 'ethers'
// import { pure } from 'recompose';
import { MaxUint256 } from '@ethersproject/constants'

import Footer from '../components/Footer'
import StakingWithdraw from '../components/StakingWithdraw'
import StakingCalculator from '../components/StakingCalculator'
import SwitchWalletModal from '../components/SwitchWalletModal'
import useContractsStore from '../store/useContractsStore'
import useWalletStore from '../store/useWalletStore'
import useStakingStore from '../store/useStakingStore'

import getNetworkName from '../utils/getNetworkName'

import useStaking from '../hooks/useStaking'
import { toast } from 'react-toastify';

import { launchToast, dismissToast, warningToast } from '../utils/toastUtils';

export default function Staking() {
    const {
        ens, address, network, wallet, onboard, notify, provider, setEns, setAddress, setNetwork, setWallet, setOnboard, setNotify,
        setProvider, readyToTransact, setReadyToTransact, setStartBlock, setEndBlock, balanceRANDOM, setBalanceETH, setBalanceWETH, setBalanceWBTC, setBalanceLINK,
        setBalanceUNI, setBalanceDAI, setBalanceUSDC, setBalanceUSDT,
        endBlock, setCurrentBlockNumber
    } = useWalletStore();

    const { setShowCalculator, setShowWithdraw } = useStakingStore();
    const { token } = useContractsStore();
    const { apyRate, stakeTime, stakingShort, stakingMatured, stakingTotalDaysLocked, stakingPreMaturityDate, stakingMaturityDate, blockReward, stakingContract, stakingContractNr, stakingContractAllowance, stakedInContract, setStake } = useStaking();

    const approveTokens = async () => {
        await token.approve(stakingContract.address, MaxUint256, { from: wallet.provider.selectedAddress })
    }

    // console.log('Math.floor(stakedInContract)', Math.floor(stakedInContract))
    // console.log('Math.floor(stakedInContract) > 0', Math.floor(stakedInContract) > 0)

    return (
        <>
            <Head>
                <title>Randomizer Network Launchpad - Multi-chain Metaverse Launchpad for innovative new projects</title>
                <meta name="description" content="Launchpad, NFT, Metaverse, decentralized platform, ethereum, eth, binance, bsc, bsc launchpad, polygon, polygon launchpad, ido, ico, smart contract, dapp" />
            </Head>
            <div>

                {/* <!-- ===========Banner Section start Here========== --> */}
                <section className="banner-section" style={{ "backgroundImage": "url(assets/images/metaspace/31_Rotation_star_small_mp4.mp4)" }}>
                    <div className="container">
                        <div className="pt-5">
                            <div className="banner-content text-center top-section w-100" style={{ marginLeft: "0px" }}>
                                <div className="topSection" style={{ background: "rgba(0,0,0,0.9)" }}>
                                    <div className="row">
                                        <div className="col-12 col-xl-6">
                                            <h1 className="text-white text-start mb-4" 
                                                style={{ fontSize: "37px", margin: "0", height: "100%", display: "flex", alignContent: "center", justifyContent: "center", flexWrap: "wrap"}}>
                                                    <span className="yellow">Stake your </span> 
                                                    <span style={{margin: "0px 10px"}}>RANDOM</span>
                                                    <span className='yellow'> and join </span>
                                                    <span style={{margin: "0px 10px"}}> play to earn </span>
                                                    <span className='yellow'> IGOs </span>
                                            </h1>
                                            {/* <h2 className="text-white text-start mb-4" style={{ fontSize: "37px", margin: "0" }}>
                                                
                                            </h2> */}
                                        </div>
                                        <div className="col-12 col-xl-6 text-left" style={{ padding: "5px", background: "rgba(000,000,000,0.5)" }}>
                                            <div className="stake text-start">
                                                <div className="row mb-2">
                                                    <div className="col-4"><span>Lock duration</span></div>
                                                    <div className="col-8 text-end"><span>Maturity Date: </span> 
                                                        <span className='yellow'> 
                                                            {stakingMaturityDate != 0 && stakingMaturityDate}
                                                            {/* {stakingMaturityDate == 0 && stakeTime}  */}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lockDuration mb-2">
                                                    <button onClick={() => setStake(1)} className={`stakingButtons ${stakingContractNr === 1 ? 'active' : ''}`}>7 days</button>
                                                    <button onClick={() => setStake(2)} className={`stakingButtons ${stakingContractNr === 2 ? 'active' : ''}`}>14 days</button>
                                                    <button onClick={() => setStake(3)} className={`stakingButtons ${stakingContractNr === 3 ? 'active' : ''}`}>30 days</button>
                                                    <button onClick={() => setStake(4)} className={`stakingButtons ${stakingContractNr === 4 ? 'active' : ''}`}>60 days</button>
                                                </div>
                                                <div className="row mt-1 mb-2">
                                                    <div className="col-12 col-sm-7 text-start">
                                                        <span>Your staked amount: <span className='yellow'>{stakedInContract} RANDOM </span></span>
                                                    </div>
                                                    <div className="col-12 col-sm-5 text-end">
                                                        <span>APY Rate: <span className='yellow'>{apyRate}%</span></span>
                                                    </div>
                                                </div>

                                                <div className="row mt-1 mb-2">
                                                    <div className='col-12'>
                                                        <span className='mt-1'>Balance: <span className='yellow'>{balanceRANDOM} RANDOM</span> </span>
                                                    </div>
                                                </div>

                                                {network == null ?
                                                    <button onClick={() => onboard.walletSelect()} className='mt-1 w-100 stakingButtons'>
                                                        Connect Wallet
                                                    </button>
                                                    :
                                                    <>
                                                        {getNetworkName(network) != "Polygon Mainnet" ?
                                                            <button
                                                                className='mt-1 w-100 stakingButtons'
                                                                onClick={async () => {
                                                                    await onboard.walletCheck()
                                                                    toast.dismiss(1);
                                                                }
                                                                }>
                                                                Wrong Network
                                                            </button>
                                                            :
                                                            <>
                                                                {stakingContractAllowance > 0 ?
                                                                    // <button onClick={() => stakeTokens()} className='mt-1 w-100 stakingButtons'>
                                                                    <>
                                                                        <button onClick={() => setShowCalculator(true)} className='mt-1 w-100 stakingButtons'>
                                                                            Stake
                                                                        </button>

                                                                        {Math.floor(stakedInContract) > 0 &&
                                                                            <button onClick={() => setShowWithdraw(true)} className='mt-1 w-100 stakingButtons'>
                                                                                Claim
                                                                            </button>
                                                                        }
                                                                    </>
                                                                    :
                                                                    <button onClick={() => approveTokens()} className='mt-1 w-100 stakingButtons'>
                                                                        Approve
                                                                    </button>
                                                                }
                                                                
                                                            </>
                                                        }
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <SwitchWalletModal readyToTransact={readyToTransact} address={address} />

                <StakingCalculator blockReward={blockReward} stakingContract={stakingContract} apyRate={apyRate} stakeTime={stakeTime} />

                <StakingWithdraw blockReward={blockReward} stakingContract={stakingContract} apyRate={apyRate} stakeTime={stakeTime} stakedInContract={stakedInContract} stakingMaturityDate={stakingMaturityDate} stakingPreMaturityDate={stakingPreMaturityDate} stakingTotalDaysLocked={stakingTotalDaysLocked} stakingMatured={stakingMatured}/>

                {/* <!-- ===========Banner Section Ends Here========== --> */}

                {/* Randomizer Network HOW IT WORKS */}
                <section className="newSection" id="staking">
                    <div className="newWrapper" style={{ padding: "10px" }}>
                        <div className="newMainSection mt-5 fs-1 fw-bold">STAKING SYSTEM</div>
                        <div className="table-wrap wow fadeInUp">
                            <div className="newTable">
                                <div className="col">
                                    <div className="th">Tiers</div>
                                    <div className="td">Tier 1</div>
                                    <div className="td">Tier 2</div>
                                    <div className="td">Tier 3</div>
                                    <div className="td">Tier 4</div>
                                    <div className="td">Tier 5</div>
                                    <div className="td">Tier 6</div>
                                    <div className="td">Tier 7</div>
                                    <div className="td">Tier 8</div>
                                    <div className="td">Tier 9</div>
                                    <div className="td">Tier 10</div>
                                </div>
                                <div className="col">
                                    <div className="th">Staking</div>
                                    <div className="td">3000</div>
                                    <div className="td">6000</div>
                                    <div className="td">12,500</div>
                                    <div className="td">25,000</div>
                                    <div className="td">30,000</div>
                                    <div className="td">40,000</div>
                                    <div className="td">50,000</div>
                                    <div className="td">75,000</div>
                                    <div className="td">100,000</div>
                                    <div className="td">150,000</div>
                                </div>
                                <div className="col">
                                    <div className="th">Whitelist Requirements</div>
                                    <div className="td half-top" style={{height:"40px", marginTop:"1px", borderRight: "none"}}>Lottery</div>
                                    <div className="td half-top" style={{height:"100px", marginTop:"23px", borderRight: "none"}}>Twitter Like, Comment &amp; Retweet</div>
                                    <div className="td half-bot" style={{borderRight: "none"}}><span style={{height:"225px",display: "flex",flexDirection: "column",justifyContent: "center"}}>None</span></div>
                                </div>
                                <div className="col">
                                    <div className="th">Guaranteed Allocation</div>
                                    <div className="td full" style={{borderLeft: "1px solid rgba(115,166,243,0.2)"}}>yes</div>
                                </div>
                                <div className="col">
                                    <div className="th">Staking Eligibility</div>
                                    <div className="td full">24 Hours before <br />Allocation Round <br />Opens</div>
                                </div>
                                <div className="col">
                                    <div className="th">Pool Weight</div>
                                    <div className="td">1</div>
                                    <div className="td">2</div>
                                    <div className="td">4</div>
                                    <div className="td">6</div>
                                    <div className="td">8</div>
                                    <div className="td">10</div>
                                    <div className="td">12</div>
                                    <div className="td">15</div>
                                    <div className="td">18</div>
                                    <div className="td">24</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Randomizer Network HOW IT WORKS */}

                {/* NEW EXPLANATION SECTION */}

                {/* <!-- ================ footer Section start Here =============== --> */}
                <Footer />
            </div>
        </>
    )
}
// export default pure(Staking);