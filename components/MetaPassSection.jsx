import {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import useMetaPassStore from '../store/useMetaPassStore'
import useWalletStore from '../store/useWalletStore'

export default function MetaPassSection() {
  const { asPath, pathname } = useRouter();
  const { metaPass, supplyRemaining, setMetaPass, setSupplyRemaining } = useMetaPassStore();
  const { wallet } = useWalletStore();
  const [amount, setAmount] = useState(1);
  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner-content text-center top-section">

          <div className="topSection">
            {/* <div className="newMainSection blue fs-1 fw-bold">Randomizer Network</div> */}
            <div className="row g-0 mb-2">
              <div className="col-12 col-md-6">
                <div className="metapass commonMetapass metapassLeft">
                  <div>
                    <div className="w-80 meta">
                      {/* <img className="w-100 meta" src="assets/images/metapass/rand.gif"></img> */}
                      <video width="200px" height="100%" muted autoPlay={"autoplay"} preload="auto" loop style={{ borderRadius: "25px", marginTop: "25px" }}>
                        <source src={require("../public/assets/images/metapass/randomizer-meta-pass.mp4")} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    </div>
                  </div>
                  <span className="title common fs-5">Randomizer Minting Phase</span>
                  {/* <span className="subtitle fs-5">MINT</span> */}
                  {/* <hr className="metaline metalineCommon" />
                  <span className="text-center grey">Mint Price:</span>
                  <span className="text-center">0.05??</span> */}

                  <hr className="metaline metalineCommon" />
                  <span className="text-center grey">Total Supply:</span>
                  <span className="text-center">5,000</span>

                  <hr className="metaline metalineCommon" />
                  <span className="text-center grey">Supply Remaining:</span>
                  <span className="text-center">0</span>

                  <hr className="metaline metalineCommon" />
                  
                  <Link href="/terms-of-sale">
                      <a className={`superLink ${asPath === "/terms-of-sale" ? "active": "" }`}><span className="text-center terms">Terms of Sale</span></a>
                  </Link>

                  <div className="d-flex mb-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/RandomizerNetwork"><img width="35px" height="35px" className="m-2 markets" src="assets/images/metaspace/markets/Opensea.png"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/RandomizerNetwork"><img width="35px" height="35px" className="m-2 markets" src="assets/images/metaspace/markets/LooksRare.png"/></a>
                    {/* <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/RandomizerNet"><FontAwesomeIcon className="m-2 markets twitter" style={{width:"35px"}} icon={["fab", "twitter"]} /></a> */}
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/nq9SXYmYer"><img width="35px" height="35px" className="m-2 markets" src="assets/images/metaspace/markets/Discord.png"/></a>
                  </div>

                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="metapass metapassRight" style={{ background: "#001659" }}>
                  <div className="w-100 meta">
                  </div>
                  {/* <span className="title common">META PASS Mint</span>
                  <span className="subtitle">unlocked features</span> */}

                  <img className="w-50 meta mt-3" src="assets/images/logo/logo-white.svg"></img>
                  <hr className="metaline metalineCommon" />
                  {/* <div className="bullets">
                    <ul className="d-flex flex-wrap align-content-center flex-column">
                      <li className="description bullet">Propose/Vote in RANDOM Governance</li>

                    </ul>
                  </div> */}


                  {/* 
                  PROOF Collective Pass holders
                  Mint complete


                  Allowlist winners
                  Mint complete


                  Waitlist
                  Mint complete */}

                
                <div className="text-start m-3 fs-6" style={{letterSpacing:"1.4px"}}>The Randomizer Network is a novel deflationary Launchpad Protocol that is 
                  backed by Chainlink Verifiable Random Function (VRF) and Chainlink Keepers and ensures that all the Meta Pass Holders automatically have a daily chance to win RANDOM Governance Tokens and RNDD Utility Tokens in the Daily Draw!</div>

                  <hr className="metaline metalineCommon" />
                  <div className="text-center mb-1"> Price: 0.05 ETH / Max: 2 </div>
                  {/* <div className="text-center mb-1">Available: <span>4375</span>/<span>5000</span></div> */}
                  <hr className="metaline metalineCommon" />

                  <div className="grid-wrap mt-1">
                    <div className="middle-mint flexer mb-16px">
                      <div id="node-block" className="block-mint mr-16px mr-0px--tablet mb-16px--tablet">
                        <div className="new-paragraph text-color--white font-weight--bold">Quantity</div>
                      </div>
                      <div className="block-mint flexer mr-32px mr-0px--tablet mb-16px--tablet">
                        <div className="sign change" onClick={() => setAmount(amount >= 1 && amount <= 2 ? 1 : amount - 1)}>-</div>
                        <div className="sign yellow">{amount}</div>
                        <div className="sign change" onClick={() => setAmount(amount == 1 && amount <= 2 ? amount + 1 : 2)}>+</div>
                      </div>
                    </div>

                    <div className="block-mint flexer">
                        <a href="#" className="button full-width wallet-instance ms-3 me-3">MINT</a>
                      </div>
                    <div className="mb-16px">
                    
                    </div>
                  </div>

                  {/* <span className="alert-gas-war">Gas war likely, unsuccessful mints will lose gas</span>

                  {!wallet.provider && (
                  <button
                    type="button"
                    className="white text-center btn btn-primary"
                    onClick={() => { onboard.walletSelect() }}>
                    <span>CONNECT WALLET</span>
                  </button>
                  )}

                  {wallet.provider && endBlock >= currentBlockNumber && (
                  <button
                    type="button"
                    className="white text-center btn btn-primary"
                    onClick={() => setShowSeedModal(true)}>
                    <span>MINT</span>
                  </button>
                  )} */}

                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .metapass {
                background: rgb(37, 3, 64);
                display: flex;
                flex-direction: column;
                align-items: center;
                // border-radius: 5px;
                padding:1px;
                // margin: 10px 0px;
            }
            @media only screen and (max-width:767px) {
              .topSection {
                padding: 0px;
              }
              .metapassLeft {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
              }
              .metapassRight {
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
              }
            }
            @media only screen and (min-width:767px) {
                .metapass {
                    height: 575px;
                    margin: 0px;
                }
                .metapassLeft {
                  border-top-left-radius: 5px;
                  border-bottom-left-radius: 5px;
                }
                .metapassRight{
                  border-top-right-radius: 5px;
                  border-bottom-right-radius: 5px;
                }
            }
            .commonMetapass{
                background: #00081F;
                // border: 1px solid #628ef7;
            }
            .epicMetapass{
                background: #35004c;
                border: 1px solid #9200d1;
            }
            .legendaryMetapass{
                background: #a58a20;
                border: 1px solid #f1e08f;
            }
            .meta {
                border-top-left-radius: 1px;
                border-top-right-radius: 1px;
            }
            .title {
                color: #FFF;
                margin-top: 1rem;
            }
            .subtitle {
                color: #FFF;
            }
            .bullets {
                display: flex;
                flex-direction: column;
                text-align: left;
            }
            .description {
                margin-top: 1rem;
                color: #FFF;
                text-align: left;
            }
            .metaline {
                width: 80%;
                border: 1px solid #8247E5;
                margin-bottom: 1rem;
            }
            .metalineCommon {
                border: 1px solid #628ef7;
            }
            .metalineEpic {
                border: 1px solid #9200d1;
            }
            .metalineLegendary {
                border: 1px solid #f1e08f;
            }
            .common {
                color: #628ef7;
            }
            .epic {
                color: #9200d1;
            }
            .legendary {
                color: #f1e08f;
            }
            .alert-gas-war {
              color: red;
            }
            .grey {
              color: #B5BCB3;
            }
            .blue {
              color: #0d6efd;
            }
            .blue:hover {
              color: #0b5ed7;
            }
            .terms {
              opacity: 0.9;
              color: #FFDD00;
              cursor: pointer;
            }
            .terms:hover {
              opacity: 1;
              color: #FFDD00;
              cursor: pointer;
            }
            .markets {
              opacity: 0.8;
              cursor: pointer;
            }
            .markets:hover {
              opacity: 1;
              cursor: pointer;
            }

            .twitter.path {
              fill: #d3d4d8;
            }
            .twitter:hover {
              fill: #FFF;
            }

            // MINT SECTION
            .grid-wrap {
              width: 100%;
              height: auto;
            }
            .parargraph { overflow-wrap: break-word; }
            .middle-mint.flexer {
              display: -webkit-box;
              display: -webkit-flex;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: justify;
              -webkit-justify-content: space-between;
              -ms-flex-pack: justify;
              justify-content: space-between;
              -webkit-box-align: center;
              -webkit-align-items: center;
              -ms-flex-align: center;
              align-items: center;
          }
          
          .mb-16px {
              margin-bottom: 1rem;
          }
          #node-block {
              -ms-grid-column: span 1;
              grid-column-start: span 1;
              -ms-grid-column-span: 1;
              grid-column-end: span 1;
              -ms-grid-row: span 1;
              grid-row-start: span 1;
              -ms-grid-row-span: 1;
              grid-row-end: span 1;
              -ms-grid-row-align: center;
              align-self: center;
          }
          #node-block {
            -ms-grid-column: span 1;
            grid-column-start: span 1;
            -ms-grid-column-span: 1;
            grid-column-end: span 1;
            -ms-grid-row: span 1;
            grid-row-start: span 1;
            -ms-grid-row-span: 1;
            grid-row-end: span 1;
            -ms-grid-row-align: center;
            align-self: center;
          }
          .block-mint.flexer {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -webkit-justify-content: center;
            -ms-flex-pack: justify;
            justify-content: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
          }
          .mr-16px {
              margin-right: 1rem;
          }
          .block-mint {
              width: 100%;
              height: auto;
          }
          .new-paragraph {
            margin-bottom: 0px;
            font-family: 'Courier Prime', sans-serif;
            font-size: 1.25rem;
            line-height: 1.5em;
          }
          .font-weight--bold {
            font-weight: 700;
          }
          .text-color--white {
            color: #fff;
          }
          .mr-32px {
            margin-right: 2rem;
          }
          .sign.change {
              cursor: pointer;
          }
          .sign.yellow {
            color: #FFDD00;
          }
          .sign {
            width: 2rem;
            height: 2rem;
            color: #fff;
            font-size: 2rem;
            line-height: 1;
            font-weight: 700;
            text-align: center;
          }
          .yellow {
            color: #FFDD00;
          }
          .button.wallet-instance {
              width: 12.25rem;
              -webkit-box-flex: 0;
              -webkit-flex: 0 auto;
              -ms-flex: 0 auto;
              flex: 0 auto;
          }

          .button.full-width {
              width: 100%;
              height: auto;
              margin-bottom: 0px;
          }
          .button {
              margin-right: 0px;
              margin-bottom: 8px;
              margin-left: 0px;
              padding: 8px 32px;
              -webkit-box-flex: 0;
              -webkit-flex: 0 0 auto;
              -ms-flex: 0 0 auto;
              flex: 0 0 auto;
              border-radius: 9px;
              background-color: #FFDD00;
              box-shadow: 0 3px 0 0 rgb(32 32 32 / 5%);
              -webkit-transition: box-shadow 200ms ease, border-color 200ms ease, color 200ms ease, background-color 200ms ease, -webkit-transform 200ms ease;
              transition: box-shadow 200ms ease, border-color 200ms ease, color 200ms ease, background-color 200ms ease, -webkit-transform 200ms ease;
              transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease, color 200ms ease, background-color 200ms ease;
              transition: box-shadow 200ms ease, transform 200ms ease, border-color 200ms ease, color 200ms ease, background-color 200ms ease, -webkit-transform 200ms ease;
              font-family: Oswald, sans-serif;
              color: #00081f;
              font-size: 18px;
              line-height: 1.5;
              font-weight: 500;
              text-align: center;
              letter-spacing: 0.04em;
              text-decoration: none;
              text-transform: uppercase;
              opacity:0.9;
          }
          .button:hover {
            opacity:1;
          }
            // MINT SECTION
        `}</style>
        </div>
      </div>
    </section>
  )
}
