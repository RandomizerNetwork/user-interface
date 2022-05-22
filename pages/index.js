import Head from 'next/head'
// import Image from 'next/image'
// import { pure } from 'recompose';

import SwitchWalletModal from '../components/SwitchWalletModal'
import Footer from '../components/Footer'
import useWalletStore from '../store/useWalletStore'

export default function Home() {
  const {
    ens, address, network, bnbWallet, onboard, notify, provider, setEns, setAddress, setNetwork, setBnbWallet, setOnboard, setNotify,
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
        <title>Randomizer Network - Multi-chain Metaverse Launchpad for innovative new projects</title>
        <meta name="description" content="Trustless Randomization Network, for people that want to leverage randomness sources of entropy on top of major EVM Chains!" />
      </Head>
      <div>

        {/* <!-- ===========Banner Section start Here========== --> */}
        {/* <section className="banner-section">
          <div className="container">
            <div>
              <div className="banner-content text-center top-section">
                <img className="randomizer-logo" src="./assets/images/logo/logo-white.svg" width="300px" height="300px" style={{ cursor: "pointer" }} />
                <div className="topSection">
                  <h1 className="fw-normal text-white mb-4">multi-chain play to earn <br /> metaverse ido launchpad</h1>
                  <p>Innovation hub, incubator, ido launchpad
                    <br /> curating high-quality play to earn
                    <br /> projects on the blockchain multiverse
                  </p>
                  <div className="col-12 col-sm-12 mt-3">
                    <div className="button-wrapper text-center">
                      <a href="apply-for-incubator-and-ido" className="default-button"><span>Apply As
                        A Project <i className="icofont-circled-right"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-4 text-sm-end mt-3">
                    <a className="buyToken" href="https://pancakeswap.finance/pair/ngx"
                      style={{ height: "60px", "borderRadius": "5px", "border": "3px solid #FFF", "padding": "10px", "margin": "0 0 0 5px" }}>
                      <img className='me-2' src="./assets/images/logo/sushiswap-sushi-logo.svg" style={{ "width": "35px", "height": "35px" }} />
                      <span className="text-white">Buy RANDOM</span>
                    </a>
                  </div>
                  <div className="col-12 col-sm-4 text-sm-center mt-3">
                    <a href="https://www.youtube.com/embed/g5eQgEuiFC8" className="default-button reverse-effect">
                      <span>
                        <i className="icofont-telegram"></i>
                        Telegram
                      </span>
                    </a>
                  </div>
                  <div className="col-12 col-sm-4 text-sm-start mt-3">
                    <a href="https://www.youtube.com/embed/g5eQgEuiFC8" className="default-button reverse-effect">
                      <span>
                        <i className="icofont-bullhorn"></i>
                        Announcements
                      </span></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- ===========Banner Section start Here========== --> */}

        <section className="banner-section">
          <div className="container">
            <div>
              <div className="banner-content text-center top-section">
                
                <div className="topSection">

                <img className="randomizer-logo" src="./assets/images/logo/logo-icon-blue.svg" width="300px" height="300px" style={{ cursor: "pointer" }} />

                  {/* <h1 className="fw-normal yellow" style={{ fontWeight: "50px", margin: "0" }}>Randomizer Network</h1> */}
                  <h1 className="primaryColor mb-4" style={{fontSize:"35px"}}>Multi-Chain Launchpad </h1>
                  <h2 className="primaryColor mt-4" style={{fontSize:"25px"}}>High-quality projects on the blockchain</h2>
                  <div className="row">
                    
                    <div className="col-12 col-md-6 mt-1">
                      <div className="button-wrapper">
                        <a href="apply-for-incubator-and-ido" className="default-button"><span>Apply As
                          A Project <i className="icofont-circled-right"></i></span>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 mt-3">
                      <a className="rotatingButton" href="https://sushiswap.org/pair/random"
                        style={{ height: "60px", borderRadius: "5px", border: "3px solid #FFF", "padding": "10px" }}>
                        <img className='me-2' src="./assets/images/logo/sushiswap-sushi-logo.svg" style={{ width: "35px", height: "35px", position: "relative", zIndex: "9" }} />
                        <span className="buyOnPancake text-white">Buy RANDOM</span>
                      </a>
                    </div>

                    {/* <div className="col-12 col-sm-4 text-center mt-3">
                      <a href="https://www.youtube.com/embed/g5eQgEuiFC8" className="default-button reverse-effect">
                        <span>
                          <i className="icofont-telegram icofont-3x"></i>
                          Telegram
                        </span>
                      </a>
                    </div>
                    <div className="col-12 col-sm-4 text-start mt-3">
                      <a href="https://www.youtube.com/embed/g5eQgEuiFC8" className="default-button reverse-effect">
                        <span>
                          <i className="icofont-bullhorn"></i>
                          Announcements
                        </span>
                      </a>
                    </div> */}

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <SwitchWalletModal readyToTransact={readyToTransact} address={address} />

        {/* <div className="stars">
          <div className="starsContainer">
            <video id="vidcontent" className="videoContainer" width="100%" height="100%" autoPlay loop muted >
              <source src="assets/images/metaspace/space-odyssey-hd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div> */}
        {/* <!-- ===========Banner Section Ends Here========== --> */}


        {/* <!-- ===========match schedule Section start Here========== --> */}
        {/* <!-- <section className="match-section padding-top padding-bottom" style="background-image:url(assets/images/match/bg.jpg)"> --> */}
        <section id="launchpadido" className="match-section padding-bottom mt-5" style={{ background: "#074F9A", "borderTopLeftRadius": "10px", "borderTopRightRadius": "10px", "padding": "30px" }}>
          {/* <!-- <section className="match-section padding-top padding-bottom"> --> */}
          <div className="container">
            {/* <div className="section-header">
              <p>Anytime, Anywhere</p>
              <h2>All scheduled pools</h2>
            </div> */}
            <div className="section-wrapper">
              <section className="match-section padding-bottom">
                <div className="container">
                  <div className="section-wrapper">
                    <ul
                      className="match-filter-button-group common-filter-button-group d-flex flex-wrap justify-content-center mb-5 text-uppercase">
                      {/* <!-- <li className="is-checked" data-filter="*">All results</li> --> */}
                      <li data-filter=".match-one">upcoming [1]</li>
                      <li data-filter=".match-two">ended [0]</li>
                      {/* <li data-filter=".match-three">ended NFT[0]</li> */}
                    </ul>
                    <div className="row g-4 match-grid">
                      <div className="col-lg-6 col-12 matchlistitem match-one">
                        <div className="match-item-2 item-layer">
                          <div className="match-inner">
                            <div
                              className="match-header d-flex flex-wrap justify-content-between align-items-center">
                              <p className="match-team-info">
                                Randomizer Network
                              </p>
                              <p className="match-prize"><span className="fw-bold">UPCOMING</span></p>
                            </div>
                            <div className="match-content gradient-bg-black" style={{ "backgroundImage": "url(assets/images/cta/bg_purple.jpg)" }}>
                              <div className="row align-items-center justify-content-center">
                                <div className="col-12 col-md-12 order-md-2 mt-4 mt-md-0">
                                  <div className="match-game-info text-lg-left">
                                    <div className="row">
                                      <div className="col-6 text-start">
                                        <img src="./assets/images/logo/logo-icon-blue.svg" width="50px" height="50px" style={{ borderRadius: "25px", cursor: "pointer" }}></img>
                                      </div>
                                      <div className="col-6 text-end">
                                        <img src="./assets/images/logo/polygon.svg" width="50px" height="50px" style={{ float: "right" }}></img>
                                      </div>
                                    </div>
                                    <h4 className="mt-2">Randomizer Network</h4>
                                    <p>

                                    </p>
                                    <p className="d-flex flex-wrap justify-content-center justify-content-center">
                                      <span className="text-white">15 March 2022 </span>
                                      <span className="match-time text-white">Time: 00:00PM UTC</span>
                                    </p>
                                    <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                      <li><a href="#"><img src="assets/images/match/social-1.png" alt="vimeo" /></a></li>
                                      <li><a href="#"><img src="assets/images/match/social-2.png" alt="youtube" /></a></li>
                                      <li><a href="#"><img src="assets/images/match/social-3.png" alt="twitch" /></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div></div>
                  </div>
                </div>
              </section>

              {/* <div className="button-wrapper text-center mt-5 mb-5">
					<a href="game-list.html" className="default-button"><span>Browse All Projects <i
								className="icofont-circled-right"></i></span>
					</a>
				</div> */}
            </div>

          </div>
        </section>
        {/* <!-- ===========match schedule Section Ends Here========== --> */}


        {/* <!-- ===========CTA Section start Here========== --> */}
        <section className="cta-section mb-5">
          <div className="container">
            <div className="cta-wrapper item-layer mt-5">
              <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{ "backgroundImage": "url(assets/images/cta/bg.jpg)" }}>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="cta-content">
                      <p className="theme-color text-uppercase ls-2">Let's Play</p>
                      <h2 className="mb-3">JOIN <span className="theme-color text-uppercase">Randomizer Network</span> PRO
                        GAMERS TODAY!</h2>
                      <p className="mb-4">
                        We hand-pick high quality Blockchain Games & NFT's which we gracefully help to support
                        multi-chain blockchains with their own DAO Governance System. Join the play to earn revolution!
                      </p>
                      <a href="signup.html" className="default-button"><span>Join Community <i
                        className="icofont-circled-right"></i></span></a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="cta-thumb text-end">
                      <img src="assets/images/metaspace/virtual-reality-2.png" alt="gamer-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ===========CTA Section Ends Here========== --> */}


        {/* NEW EXPLANATION SECTION */}
        <section className="newSection">
          <div className="newWrapper">
            <div className="newMainSection mt-5">Randomizer Network</div>
            <div className="newMainSectionText">The multi-chain deflationary Launchpad for the Metaverse.</div>
            <div className="newMainSectionRow">
              <div className="newMainSectionThreeColumn text-center">
                <h4 style={{ color: "#FFDD00" }}>SMALL MARKET CAP</h4>
                <ul>
                  <li>Randomizer.network will launch on Sushiswap on the Polygon Network with a very small initial market cap of only $150K!</li>
                </ul>
              </div>
              <div className="newMainSectionThreeColumn text-center">
                <h4 style={{ color: "#FFDD00" }}>How to participate</h4>
                <ul>
                  <li>The IDO will be launched using PinkSale.Finance and you can begin staking right after the initial liquidity launch on PancakeSwap.</li>
                </ul>
              </div>
              <div className="newMainSectionThreeColumn text-center">
                <h4 style={{ color: "#FFDD00" }}>Free Early unstaking:</h4>
                <ul>
                  <li>There will be an option to unstake early that forfeits all accumulated staking rewards. If stakers wait until locking fully matures, they will receive full rewards and IGO allocations.</li>
                </ul>
              </div>
            </div>
            <div className='section2 mt-5'>
              <div className='section2Column'>
                <div className="title">Public price</div>
                <div className="desc">$0.01</div>
              </div>
              <div className='section2Column'>
                <div className="title">Maximum supply</div>
                <div className="desc">1,000,000,000</div>
              </div>
              <div className='section2Column'>
                <div className="title">Supply at listing</div>
                <div className="desc">15,000,000</div>
              </div>
              <div className='section2Column'>
                <div className="title">Initial Market Cap</div>
                <div className="desc">$150,000 USD</div>
              </div>
            </div>
          </div>
        </section>
        {/* NEW EXPLANATION SECTION */}

        {/* Randomizer Network TOKENOMICS */}
        <section className="newSection">
          <div className="newWrapper">
            <div className="newMainSection mt-5">TOKENOMICS</div>
            <div className="newMainSectionRow">
              <div className="newMainSectionThreeColumn text-center">
                <div className='section3 d-block'>
                  <div className='section2Column w-100'>
                    <div className="title">Team</div>
                    <div className="desc">10%</div>
                  </div>
                  <div className='section2Column w-100'>
                    <div className="title">Ecosystem</div>
                    <div className="desc">5%</div>
                  </div>
                  <div className='section2Column w-100'>
                    <div className="title">Advisors</div>
                    <div className="desc">1%</div>
                  </div>
                </div>
              </div>
              <div className="newMainSectionThreeColumn text-center">
                <div className='section3 d-block'>
                  <div className='section2Column w-100'>
                    <div className="title">Liquidity</div>
                    <div className="desc">60%</div>
                  </div>
                  <div className='section2Column w-100'>
                    <div className="title">Staking</div>
                    <div className="desc">10%</div>
                  </div>
                  <div className='section2Column w-100'>
                    <div className="title">Reserve</div>
                    <div className="desc">5%</div>
                  </div>
                </div>
              </div>
              <div className="newMainSectionThreeColumn text-center">
                <div className='section3 d-block'>
                  <div className='section2Column w-100'>
                    <div className="title">Private sale</div>
                    <div className="desc">4%</div>
                  </div>
                  <div className='section2Column w-100'>
                    <div className="title">Public Sale</div>
                    <div className="desc">4%</div>
                  </div>
                  <div className='section2Column w-100'>
                    <div className="title">Airdrop</div>
                    <div className="desc">1%</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Randomizer Network TOKENOMICS */}

        {/* Randomizer Network HOW IT WORKS */}
        <section className="newSection" id="faq">
          <div className="newWrapper">
            <div className="newMainSection mt-5">HOW IT WORKS</div>
            <div className="newMainSectionText">The main deflationary mechanisms of Randomizer.network include a 10% fee on all token transfers and early unstaking fees of up to 25%.</div>
            <div className="newMainSectionRow">
              <div className="newMainSectionColumn">
                <div>Distribution of sell fees:</div>
                <ul>
                  <li>- 5% of the fees will be rewarded to stakers</li>
                  <li>- 2.5% of the fees will be added to liquity pool forever</li>
                  <li>- 2.5% will be burned forever</li>
                </ul>
              </div>
              <div className="newMainSectionColumn">
                <div>Early unstaking fees:</div>
                <ul>
                  <li>There will also be an option to unstake early. This will apply a 25% burn fee. If users wait 4 weeks to unstake, there will be no fee..</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Randomizer Network HOW IT WORKS */}

        {/* Randomizer Network HOW IT WORKS */}
        <section className="newSection" id="faq">
          <div className="newWrapper">
            <div className="newMainSection mt-5">HOW IT WORKS</div>
            <div className="newMainSectionText">The main deflationary mechanisms of Randomizer.network include a 10% fee on all token transfers and allows allocations via staking for early IGO believers.</div>
            <div className="newMainSectionRow">
              <div className="newMainSectionColumn">
                <div>Distribution of sell fees:</div>
                <ul>
                  <li>- 5% of the fees will be rewarded to stakers</li>
                  <li>- 2.5% of the fees will be added to liquity pool forever</li>
                  <li>- 2.5% will be burned forever</li>
                </ul>
              </div>
              <div className="newMainSectionColumn">
                <div>Staking Participation:</div>
                <ul>
                  <li>To receive allocations in IGOs, stakers must undergo the KYC Process. To claim all rewards, locked periods must fully mature. Early unstakers will forfeit all rewards accumulated and loose current IGO allocations.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Randomizer Network HOW IT WORKS */}


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
                  <div className="td half-top" style={{ height: "40px", marginTop: "1px", borderRight: "none" }}>Lottery</div>
                  <div className="td half-top" style={{ height: "100px", marginTop: "23px", borderRight: "none" }}>Twitter Like, Comment &amp; Retweet</div>
                  <div className="td half-bot" style={{ borderRight: "none" }}><span style={{ height: "225px", display: "flex", flexDirection: "column", justifyContent: "center" }}>None</span></div>
                </div>
                <div className="col">
                  <div className="th">Guaranteed Allocation</div>
                  <div className="td full" style={{ borderLeft: "1px solid rgba(115,166,243,0.2)" }}>yes</div>
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
        <Footer />
      </div>
    </>
  )
}
// export default pure(Home);