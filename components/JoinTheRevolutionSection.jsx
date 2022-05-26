import React from 'react'

export default function JoinTheRevolutionSection() {
    return (
        <section className="cta-section mb-5">
            <div className="container">
                <div className="cta-wrapper item-layer mt-5">
                    <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" style={{ "backgroundImage": "url(assets/images/cta/bg.jpg)" }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="cta-content">
                                    <p className="theme-color text-uppercase ls-2">Let's Play</p>
                                    <h2 className="mb-3">JOIN <span className="theme-color text-uppercase">Randomizer Network</span> TODAY!</h2>
                                    <p className="mb-4">
                                        We are building the most trustless and DAO customizable DeFi Launchpad. We are building a No-Code customizable Chainlink multi-chain DAO & NFT's distribution manager. Join the play to earn revolution!
                                    </p>
                                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/nq9SXYmYer" className="default-button walletExplorer">
                                        <span>Join Community <i className="icofont-circled-right"></i></span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="cta-thumb text-end">
                                    <img src="assets/images/metaspace/virtual-reality.png" alt="gamer-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
