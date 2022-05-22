import { useRef, useState, useEffect } from 'react'
import { utils } from 'ethers';
import useFocus from '../hooks/useFocus'

import Modal from './Modal';
import useStakingStore from '../store/useStakingStore'
import useWalletStore from '../store/useWalletStore'

import { launchToast, dismissToast, warningToast } from '../utils/toastUtils';

export default function StakingCalculator({blockReward, stakingContract, apyRate, stakeTime}) {
    const { showCalculator, setShowCalculator } = useStakingStore();
    const {bnbWallet} = useWalletStore();

    const [stakingReward, setStakingReward] = useState("0.0000");
    const [stakingAmount, setStakingAmount] = useState(undefined || "");
    const [inputRef, setInputFocus] = useFocus()

    const calculateReward = async (amount) => {
        if(amount.length > 10) return;
        setStakingAmount(amount);
        const parseAmount = Number.parseFloat(blockReward * amount / 10000).toFixed(4)
        setStakingReward(parseAmount);
    }

    const stakeTokens = async () => {
        // await token.stake(MaxUint256, { from: bnbWallet.provider.selectedAddress })
        // const { hash } = await stakingContract.stake(MaxUint256, { from: bnbWallet.provider.selectedAddress })
        const { hash } = await stakingContract.stake(utils.parseEther(stakingAmount), { from: bnbWallet.provider.selectedAddress })
        console.log("hash", hash)
        // launchToast(`Successfully contributed contract staking!`, hash, 5000)
      }

    let wrapperRef = useRef()
    let wrapperTokenListRef = useRef()

    useEffect(() => {
        setInputFocus();
    }, [showCalculator])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [wrapperRef, wrapperTokenListRef])

    const handleClickOutside = (event) => {
        try {
            if (wrapperRef && !wrapperRef.current.contains(event.target)) {
                setShowCalculator(false);
            } else if (wrapperTokenListRef && !wrapperTokenListRef.current.contains(event.target)) {
                setShowCalculator(false)
            }
        } catch (error) { /* console.log(error) */ }
    }

    return (
        <Modal onEntered={() => inputRef.current.focus()}>
            <div className="row gx-0 container-fluid center-content animated flex-vertical-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "rgba(0, 0, 0, 0.5)", animation: "400ms", transition: "background 200ms ease-in-out" }}>
                <div ref={wrapperRef} className="card wallet-provider-container" style={{ border: "2px solid #263C91", borderRadius: "5px", maxWidth: "400px" }}>
                    <div className="card-body" >
                        <div className="row gx-0">
                            <div className="col-10 text-start"><h3 className="text-white" style={{ padding: "0", fontWeight: "500" }}>Stake</h3></div>
                            <div className="col-2 text-white text-end">
                                <span onClick={() => setShowCalculator(false)}>
                                    <svg className="closeCalculator" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </span>
                            </div>
                            
                            <span className="text-white text-start">Amount in RANDOM</span>
                            <div className="card wallet-selection-card text-center" style={{width:"100%", marginBottom:"0"}}>
                                <div className="row gx-0 text-white m-t-10 ">
                                    <div className="col-12">
                                        <div className="walletBorder">
                                            <form>
                                                <input className="text-center" autoFocus={showCalculator} ref={inputRef} onChange={(e) => calculateReward(e.target.value)} type="text" placeholder="Enter Amount" value={stakingAmount} />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gx-0 text-white">
                                    <div className="col-6 mt-2">
                                        <div className="text-start">Amount</div>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <div className="text-end">{stakingReward}</div>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="col-6">
                                        <div className="text-start">APY</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-end">{apyRate}%</div>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="col-4">
                                        <div className="text-start">Maturity Date:</div>
                                    </div>
                                    <div className="col-8">
                                        <div className="text-end">{stakeTime}</div>
                                    </div>
                            </div>
                            <div className="row gx-0 text-white" onClick={() => stakeTokens()}>
                                <button className='mt-1 w-100 stakingButtons'>
                                    Confirm
                                </button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .closeCalculator {
                    cursor: pointer;
                }
            `}</style>
        </Modal>
    )
}
