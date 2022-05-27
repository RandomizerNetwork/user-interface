import React from 'react'

export default function LaunchpadExplanationSection() {
    return (
        <section className="newSection">
            <div className="newWrapper">
                <div className="newMainSection mt-5 fs-1 fw-bold">Randomizer Network</div>
                <div className="newMainSectionText">The multi-chain trustless deflationary Metaverse Launchpad</div>
                <div className="newMainSectionRow">
                    <div className="newMainSectionThreeColumn text-center">
                        <h4 style={{ color: "#FFF" }}>SMALL MARKET CAP</h4>
                        <ul>
                            <li>Randomizer Network (RANDOM Token) will initially have a very small market cap of only $250,000 split between Uniswap and Sushiswap.</li>
                        </ul>
                    </div>
                    <div className="newMainSectionThreeColumn text-center">
                        <h4 style={{ color: "#FFF" }}>How to participate</h4>
                        <ul>
                            <li>The Meta Game Passes guarantees automatic participation in the Daily Draw Draw of RANDOM Governance Tokens and RNDD Utility Tokens.</li>
                        </ul>
                    </div>
                    <div className="newMainSectionThreeColumn text-center">
                        <h4 style={{ color: "#FFF" }}>Free Early unstaking</h4>
                        <ul>
                            <li>There will be an option to unstake early but will forfeits all accumulated staking rewards. If stakers wait until locking fully matures, they will receive full rewards.</li>
                        </ul>
                    </div>
                </div>
                <div className="newMainSection mt-5">INITIAL SUPPLY</div>
                <div className='section2 mt-5'>
                    <div className='section2Column'>
                        <div className="title">Public price</div>
                        <div className="desc">$0.0005</div>
                    </div>
                    <div className='section2Column'>
                        <div className="title">Maximum supply</div>
                        <div className="desc">1,000,000,000</div>
                    </div>
                    <div className='section2Column'>
                        <div className="title">Supply at listing</div>
                        <div className="desc">500,000,000</div>
                    </div>
                    <div className='section2Column'>
                        <div className="title">Initial Market Cap</div>
                        <div className="desc">$250,000 USD</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
