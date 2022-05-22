import {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import useMenuStore from '../store/useMenuStore'
import useWalletStore from '../store/useWalletStore'
import GetWalletIcon from './GetWalletIcon'
import getNetworkName from '../utils/getNetworkName'

export default function HeaderNav() {    
  const { asPath, pathname } = useRouter();
  const [menuActive, setMenuActive] = useState(false);
//   console.log('asPath', asPath)
//   console.log('pathname', pathname)
  const { showWalletsModal } = useMenuStore();
  const {
    ens, address, network, wallet, bnbWallet,onboard, notify, provider, setEns, setAddress, setNetwork, setWallet, setOnboard, setNotify,
    setProvider, readyToTransact, setReadyToTransact, setStartBlock, setEndBlock, setBalanceETH, setBalanceWETH, setBalanceWBTC, setBalanceLINK,
    setBalanceUNI, setBalanceDAI, setBalanceUSDC, setBalanceUSDT,
    endBlock, setCurrentBlockNumber,
    connect
  } = useWalletStore();

  console.log('wallet', wallet)
  console.log('bnbWallet', bnbWallet)
  const cleanAddress = address !== null && address !== undefined ? address.substr(0, 6) + "..." + address.substr(-4) : ""

    return (
        <header className="header-section">
        <div className="container" style={{ paddingRight: "0px" }}>
          <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
                <Link href="/">
                    <a>
                        <div className="brand-logo d-none d-lg-inline-block">
                            <div className="logo">
                                <img src="./assets/images/logo/logo-blue.svg" width="200px" />
                                {/* <img style={{padding: "10px 5px 10px 0px"}} src="./assets/images/logo/logo-blue.svg" width="60px" /> */}
                                {/* <span>Randomizer Network</span> */}
                            </div>
                        </div>
                    </a>
                </Link>
            <div className="header-menu-part">
              <div className="header-bottom">
                <div className="header-wrapper justify-content-lg-end">
                    <Link href="/">
                        <div className="mobile-logo text-center d-lg-none mt-1">
                            <img src="./assets/images/logo/logo-icon-blue.svg" width="50px" height="50px" />
                        </div>
                    </Link>


                    {/* <div className="col-3 text-center"> 
                      <i className="icofont-twitter icofont-3x"></i> 
                      <img style={{width:"48px"}} src="assets/images/metaspace/icons/medium.svg" />
                      <i className="icofont-telegram icofont-3x"></i> 
                    </div> */}

                  <div className="menu-area mt-1">
                    <ul className={`menu ${menuActive ? 'active' : ''}`}>

                      <li className="mr-3">
                        <a className="superLink p-0" href="#"><i className="icofont-twitter primaryColor icofont-2x imgHover"></i> </a>
                        <a className="superLink p-0" href="#"><span className="primaryColor imgHover" style={{fontFamily: "gt-super, Georgia, Cambria, 'Times New Roman', Times, serif", fontSize: "32px", margin: "10px"}}>M</span></a>
                        <a className="superLink p-0" href="#"><i className="icofont-telegram primaryColor icofont-2x imgHover" style={{marginRight: "20px"}}></i> </a>
                      </li>

                      <li>
                        <Link href="/#launchpadido">
                            <a className={`superLink border-top-0 ${asPath === "/#launchpadido" ? "active": ""}`}> Pools </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/staking">
                            <a className={`superLink ${asPath === "/staking" ? "active": "" }`}> Staking </a>
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/faq">
                            <a className={asPath === "/faq" ? "active": ""}> 📖 FAQ </a>
                        </Link>
                      </li> */}
                    </ul>

                    {!wallet.provider && (
                      <button
                        className="connectWallet"
                        onClick={() => {
                          connect()
                        }}
                      >
                        Connect Wallet
                        <i className="icofont-wallet ms-2"></i>
                      </button>
                    )}

                    {wallet.provider && (
                      <>
                        <ul className="nav navbar-nav" style={{ height: "100%", cursor: "pointer" }} onClick={() => showWalletsModal(true)}>
                          <li className="nav-item">
                            <div className="text-center">
                              <div>
                                {address !== null && address !== undefined && (
                                  <>
                                    <div className="row g-0" style={{ borderRadius: "25px", paddingRight: "10px", border: "2px solid #263C90" }}>
                                      <div className="col-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "15px" }}>
                                        <GetWalletIcon wallet={wallet} />
                                      </div>
                                      <div className="col-9" style={{ margin: "5px 0", paddingLeft: "7px" }}>
                                        <div className="text-center">
                                          <span style={{ color: "#263C91", marginTop: "7px", fontSize: "1em" }}>
                                            {network && <span>{getNetworkName(network)} </span>}
                                          </span>
                                        </div>
                                        <div className="text-center">
                                          <span style={{ color: "#263C91", fontSize: "1rem" }}>{cleanAddress}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}

                                {address == null && address == undefined && (
                                  <>
                                    {wallet.provider && (
                                      <button
                                        className="connectWallet"
                                        onClick={() => showWalletsModal(true)}
                                      >
                                        <i className="icofont-wallet mr-2" style={{marginRight: "7px"}}></i>
                                        Configure Wallet
                                      </button>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </>
                    )}

                    <button onClick={() => setMenuActive(!menuActive)} style={{height: "63px", background: "transparent"}}>
                      <div className={`header-bar d-lg-none ${menuActive ? 'active': ''}`} style={{margin: "0px 10px 0 10px", position: "relative"}}>
                          <span className={`${menuActive ? 'left5px' : ''}`}></span>
                          <span></span>
                          <span className={`${menuActive ? 'left5px' : ''}`}></span>
                      </div>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}
