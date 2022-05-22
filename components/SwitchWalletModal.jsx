import React, { useState, useEffect, useRef, Fragment } from 'react'

import useMenuStore from '../store/useMenuStore'
import useWalletStore from '../store/useWalletStore'
import { seed } from "../constants/tokens.js"

export default function SwitchWalletModal(props) {
    // console.log('props', props)
    const {showWalletsModal} = useMenuStore();
    const {address,bnbWallet,onboard} = useWalletStore();
    const seeds = (seedName) => (seed.filter(seeds => seeds.name == seedName));
    const rpcNetwork = seeds("NETWORK")[0].network;
    const network = rpcNetwork === "mainnet" ? "" : rpcNetwork + "."

    let wrapperRef = useRef()
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside); }
    }, [wrapperRef])

    // Alert if clicked on outside of element 
    const handleClickOutside = (event) => {
        try {
            if (wrapperRef && !wrapperRef.current.contains(event.target)) { showWalletsModal(false); }
        } catch (error) { /* console.log(error) */ }
    }

    const [copyAddress, setCopyAddress] = useState(false);

    const copyToClipboard = () => {
        setCopyAddress(true)
        var textField = document.createElement('textarea')
        textField.innerText = `${address}`
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        setTimeout(() => {
            setCopyAddress(false)
        }, 2000);
    }

    return (
        <Fragment>
            <Modal handleClose={() => showWalletsModal(false)}>
                <div className="row container-fluid" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "rgba(0, 0, 0, 0.5)", animation: "400ms", transition: "background 200ms ease-in-out" }}>
                    <div ref={wrapperRef} className="card cardWidth">
                            <div className="card-body" style={{backgroundColor: "#FFF"}}>
                                <div className="row">
                                    <div className="col-10 text-start"><h3 style={{color: "#000"}}>Account</h3></div>
                                    <div className="col-2 text-white text-end">
                                        <span onClick={() => showWalletsModal(false)}>
                                            <svg style={{color:"#000"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                        </span>
                                        {/* <div className="bn-onboard-custom bn-onboard-modal-content-close svelte-rntogh">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" fill="#9B9B9B" xml:space="preserve" class="svelte-rntogh" style="transition: fill 150ms ease-in-out 0s;"><g>
                                                <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                                                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                                                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"></path>
                                                </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                            </svg>
                                        </div> */}
                                    </div>
                                    {bnbWallet.provider &&
                                        <>
                                            <div style={{color: "#000"}}>By connecting a wallet, you agree to Randomizer Network 
                                                <a href="/terms-of-service" style={{color: "#263C91", padding: "0 5px"}}> Terms of Service </a> 
                                                and acknowledge that you have read and understand the 
                                                <a href="/terms-of-service" style={{color: "#263C91", padding: "0 0 0 5px"}}> Randomizer Network protocol disclaimer</a>
                                                .
                                            </div>
                                            <div className="card wallet-selection-card text-center" style={{width:"100%", marginBottom:"0"}}>
                                                <div className="row text-white">

                                                    <div className="col-9">

                                                        <div className="walletBorder">

                                                            <div className="connectedTo">
                                                                <h5 className="col-12 mt-3" style={{color: "#000"}}> Connected with {bnbWallet.name} </h5>
                                                            </div>

                                                            <h5 className="col-12 mb-10" style={{ color: "#000", padding: "10px", fontSize: "1rem", fontWeight: "600"}}>{props.address}</h5>

                                                            <div className="row mb-10">
                                                                <div className="col-6 text-md-center">
                                                                    <div rel="noopener noreferrer" className="walletExplorer">

                                                                        {!copyAddress && (
                                                                            <div onClick={() => copyToClipboard()}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                                                                <span style={{ marginLeft: "4px", color: "#263C91" }}>Copy Address</span>
                                                                            </div>
                                                                        )}

                                                                        {copyAddress && (
                                                                            <div onClick={() => setCopyAddress()}>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                                                                <span style={{ marginLeft: "4px", color: "#263C91" }}>Copied</span>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                <div className="col-6 text-md-center">
                                                                    <a target="_blank" rel="noopener noreferrer" href={`https://${network}.bscscan.com/address/${address}`} className="walletExplorer">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                                                        </svg>
                                                                        <span style={{ marginLeft: "4px", color: "#263C91" }}>View on Explorer</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>

                                                    <div className="col-3">
                                                        <button className="text-white walletSmallButtons" 
                                                            onClick={async () => {
                                                            try {
                                                                // await readyToTransact()
                                                                await onboard.walletCheck()
                                                            } catch (error) {}
                                                        }}>
                                                            Config
                                                        </button>
                                                        <button
                                                            className="text-white walletSmallButtons"
                                                            onClick={async () => {
                                                                try {
                                                                    await onboard.walletSelect()
                                                                } catch (error) {}
                                                            }}>
                                                            Switch
                                                        </button>
                                                        <button className="text-white walletSmallButtons" onClick={async () => {
                                                            try {
                                                                await onboard.walletReset();
                                                                showWalletsModal(false);
                                                            } catch (error) {}
                                                        }}>
                                                            Reset
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                    </div>
                </div>
            </Modal >
            <style jsx>{`
                    .row {
                        --bs-gutter-x: 0;
                    }
                    .walletBorder{ 
                        border: 2px solid #263C91;
                        border-radius:5px;
                        margin: 1em;
                    }
                    .connectedTo {
                        display: flex;
                        flex-flow: row nowrap;
                        -webkit-box-align: center;
                        align-items: center;
                        width: initial;
                        font-size: 0.825rem;
                        font-weight: 500;
                        color: #FFF;
                    }
                    .walletWrapper {
                        padding: 1rem;
                        border: 1px solid rgb(64, 68, 79);
                        border-radius: 20px;
                        position: relative;
                        display: grid;
                        row-gap: 12px;
                        margin-bottom: 20px;
                    }
                    .walletButtons {
                        font-size: 1.2em;
                        padding: 15px;
                        border: 2px solid #FFF;
                        border-radius: 20px;
                    }
                    .walletButtons:hover {
                        border: 2px solid #FFF;
                        transition: transform 450ms ease 0s;
                    }
                    .walletSmallButtons {
                        width: 100%;
                        padding: 4px 6px;
                        border: 1px solid rgba(55, 107, 173, 0.44);
                        color: rgb(33, 114, 229);
                        background-image: linear-gradient(40deg, #263C91 20%, #263C91 51%, #263C91 90%);
                        border-radius: 12px;
                        text-align: center;
                        outline: none;
                        text-decoration: none;
                        display: flex;
                        -webkit-box-pack: center;
                        justify-content: center;
                        flex-wrap: nowrap;
                        -webkit-box-align: center;
                        align-items: center;
                        cursor: pointer;
                        position: relative;
                        z-index: 1;
                        will-change: transform;
                        transition: transform 450ms ease 0s;
                        transform: perspective(1px) translateZ(0px);
                        box-sizing: border-box;
                        margin: 1em 0;
                        min-width: 0px;
                        appearance: none;
                        line-height: inherit;
                    }
                    .walletExplorer {
                        color: #FFF;
                        margin-right: 1rem;
                        font-size: 0.825rem;
                        // display: flex;
                        text-decoration: none;
                        cursor: pointer;
                        font-weight: 500;
                    }
                    .walletCopy {
                        color: #FFF;
                        flex-shrink: 0;
                        display: flex;
                        text-decoration: none;
                        font-size: 0.825rem;
                        border: none;
                        background: none;
                        cursor: pointer;
                        font-weight: 500;
                    }
                    .walletIcon {
                        margin-left: 0.25rem;
                        font-size: 0.825rem;
                        display: flex;
                        flex-flow: row nowrap;
                        -webkit-box-align: center;
                        align-items: center;
                    }
                `}</style>
        </Fragment>
    )
}

const Modal = ({ children }) => {
    const {showWallets} = useMenuStore();
    const showHideClassName = showWallets ? 'modal d-block' : 'modal d-none';
    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
            </section>
        </div>
    );
};