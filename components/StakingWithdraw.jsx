import { useRef, useState, useEffect } from 'react'
import { utils } from 'ethers';
import { v4 as uuidv4 } from 'uuid';
import useFocus from '../hooks/useFocus'

import TimeNow from './TimeNow';
import ModalWithdraw from './ModalWithdraw';

import useStakingStore from '../store/useStakingStore'
import useWalletStore from '../store/useWalletStore'

import { launchToast, dismissToast, warningToast } from '../utils/toastUtils';

export default function StakingWithdraw({blockReward, stakingContract, apyRate, stakeTime, stakedInContract, stakingMaturityDate, stakingPreMaturityDate, stakingTotalDaysLocked, stakingMatured}) {
    // const { showCalculator, setShowCalculator } = useStakingStore();
    const { showWithdraw, setShowWithdraw } = useStakingStore();
    const {wallet} = useWalletStore();

    console.log('showWithdraw', showWithdraw)
    // console.log('', )

    const [stakingReward, setStakingReward] = useState("0.0000");
    const [stakingAmount, setStakingAmount] = useState(undefined || "");
    const [inputRef, setInputFocus] = useFocus()

    const calculateReward = async (amount) => {
        if(amount.length > 10) return;
        setStakingAmount(amount);
        const parseAmount = Number.parseFloat(blockReward * amount / 10000).toFixed(4)
        setStakingReward(parseAmount);
    }

    // const stakeTokens = async () => {
    //     // await token.stake(MaxUint256, { from: wallet.provider.selectedAddress })
    //     // const { hash } = await stakingContract.stake(MaxUint256, { from: wallet.provider.selectedAddress })
    //     const { hash } = await stakingContract.stake(utils.parseEther(stakingAmount), { from: wallet.provider.selectedAddress })
    //     console.log("hash", hash)
    //     // launchToast(`Successfully contributed contract staking!`, hash, 5000)
    //   }

      const withdrawTokens = async () => {
        try {
            await stakingContract.withdraw({ from: wallet.provider.selectedAddress })
        } catch (error) {
            if(error.data.message == 'execution reverted: Requesting before lock time') {
                console.timeLog('error', error)
                warningToast(`Claim lock duration will expire on ${stakingMaturityDate}!`, uuidv4() ,5000)
            }
        }
    }

    const emergencyWithdrawTokens = async () => {
        try {
            await stakingContract.emergencyWithdraw({ from: wallet.provider.selectedAddress })
        } catch (error) {
            console.log('error', error);
            if(error.data.message == "No stakes found for user") {
                console.timeLog('error', error)
                warningToast(`Address has not staked any RANDOM Tokens!`, uuidv4() ,5000)
            }
            if(error.data.message == 'execution reverted: Requesting before lock time') {
                console.timeLog('error', error)
                warningToast(`Claim lock duration will expire on ${stakingMaturityDate}!`, uuidv4() ,5000)
            }
        }
    }


    let wrapperRef = useRef()
    let wrapperTokenListRef = useRef()

    useEffect(() => {
        setInputFocus();
    }, [showWithdraw])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [wrapperRef, wrapperTokenListRef])

    const handleClickOutside = (event) => {
        try {
            if (wrapperRef && !wrapperRef.current.contains(event.target)) {
                setShowWithdraw(false);
            } else if (wrapperTokenListRef && !wrapperTokenListRef.current.contains(event.target)) {
                setShowWithdraw(false)
            }
        } catch (error) { /* console.log(error) */ }
    }

    return (
        <ModalWithdraw onEntered={() => inputRef.current.focus()}>
            <div className="row gx-0 container-fluid center-content animated flex-vertical-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "rgba(0, 0, 0, 0.5)", animation: "400ms", transition: "background 200ms ease-in-out" }}>
                <div ref={wrapperRef} className="card wallet-provider-container" style={{ border: "2px solid #263C91", borderRadius: "5px", maxWidth: "400px" }}>
                    <div className="card-body" >
                        <div className="row gx-0">
                            <div className="col-10 text-start"><h3 className="text-white" style={{ padding: "0", fontWeight: "500" }}>Claim</h3></div>
                            <div className="col-2 text-white text-end">
                                <span onClick={() => setShowWithdraw(false)}>
                                    <svg className="closeCalculator" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </span>
                            </div>
                            
                            <span className="text-white text-start">Total RANDOM Staked</span>
                            <div className="card wallet-selection-card text-center" style={{width:"100%", marginBottom:"0"}}>
                                <div className="row gx-0 text-white m-t-10 ">
                                    <div className="col-12">
                                        <div className="walletBorder">
                                            <form>
                                                <input className="text-center" disabled={true} type="text" value={`${Number(stakedInContract).toLocaleString('us-EN')} RANDOM`} />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gx-0 text-white">
                                    <div className="col-6 mt-2">
                                        <div className="text-start">Reward:</div>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <div className="text-end">{Number.parseFloat(blockReward * stakedInContract / 10000).toFixed(4)} RANDOM</div>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="col-6 mt-2">
                                        <div className="text-start">APY:</div>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <div className="text-end">{apyRate}%</div>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="col-6 mt-2">
                                        <div className="text-start">Lock Period:</div>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <div className="text-end">{stakingTotalDaysLocked} days</div>
                                    </div>
                                    {/* <hr className='m-0' />
                                    <div className="col-3 mt-2">
                                        <div className="text-start">Time Now:</div>
                                    </div>
                                    <div className="col-9 mt-2">
                                        <div className="text-end">
                                            <TimeNow/>
                                        </div>
                                    </div> */}
                                    <hr className='m-0' />
                                    <div className="col-4 mt-2">
                                        <div className="text-start">Started Staking:</div>
                                    </div>
                                    <div className="col-8 mt-2">
                                        <div className="text-end">{stakingPreMaturityDate}</div>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="col-4 mt-2">
                                        <div className="text-start">Maturity Date:</div>
                                    </div>
                                    <div className="col-8 mt-2">
                                        <div className="text-end">{stakingMaturityDate}</div>
                                    </div>
                            </div>
                            {/* 
                                time now > maturity date && stakedInContract > 0 */}
                            {stakingMatured && Math.floor(stakedInContract) > 0 &&
                                <div className="row gx-0 text-white" onClick={() => withdrawTokens()}>
                                    <button className='mt-1 w-100 stakingButtons'>
                                        Withdraw
                                    </button>
                                </div> 
                            }

                            {!stakingMatured && Math.floor(stakedInContract) > 0 &&
                                <div className="row gx-0 text-white" onClick={() => emergencyWithdrawTokens()}>
                                    <button className='mt-1 w-100 stakingButtons'>
                                        Emergency Withdraw
                                    </button>
                                </div> 
                            }
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .closeCalculator {
                    cursor: pointer;
                }
            `}</style>
        </ModalWithdraw>
    )
}
