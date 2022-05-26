import { useState, useEffect } from 'react'

export default function FaqSection() {
    return (
        <div className="partner-section padding-top padding-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <div className="newMainSection mt-5 fs-1 fw-bold">FAQ</div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-12">
                            <div className="partner-list" id="accordionExample">
                                <div className="row g-4 justify-content-center">
                                    <Item 
                                        id="headingOne"
                                        title="Is there a Discord?"
                                        description="Meta Passes unlock private rooms in the Randomizer Network Discord Channel. Once inside, you will have access to private channels, community events, upcoming drops, and more opportunities for the two communities to hang out."
                                    />
                                    <Item 
                                        id="headingTwo"
                                        title="How soon after mint will it be available?"
                                        description="Games start automatically after the auction has completed."
                                    />
                                    <Item 
                                        id="headingThree"
                                        title="What are the maximum mints per wallet? "
                                        description="Two mints per wallet are allowed."
                                    />
                                    <Item 
                                        id="headingFour"
                                        title="How are the 5,000 Meta Passes distributed?"
                                        description="
                                        4,375: Public sale.
                                        Core Members get 500 passes, each receive two free mints.
                                        Treasury (125 passes) for future collaborations, marketing, and advisors"
                                    />
                                    <Item 
                                        id="headingFive"
                                        title="What are the rewards for staking?"
                                        description="The longer you stake your Meta Pass, the more rewards you’ll accumulate. We want to reward community members who are 💎🤲. We’ll be announcing specific rewards and reward tiers in the near future."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="partner-list" id="accordionExample-2">
                                <div className="row g-4 justify-content-center">
                                    <Item 
                                        id="headingSix"
                                        title="What intellectual rights do holders receive?"
                                        description="Owners have full commercial art rights for the Randomizer Meta Game Pass that they own. Full details coming soon (prior to launch)."
                                    />
                                    <Item 
                                        id="headingSeven"
                                        title="What are the funds being used for?"
                                        description="100% of proceeds go directly to Infinity Software Ltd, a True Ventures backed web3 media company. We have big plans (video) and this funding will be used solely to expand our team and launch new products — ultimately creating additional value for our community."
                                    />
                                    <Item 
                                        id="headingEight"
                                        title="Is there a future roadmap?"
                                        description="As with all things, we like to under promise and over deliver. To get a sneak peak into our future, including our unique take on the Metaverse, please watch our Randomizer Network presentation."
                                    />
                                    <Item 
                                        id="headingNine"
                                        title="How are secondary royalties used?"
                                        description="Randomizer Network will receive 5% of all secondary sales. These proceeds will be used to continue to hire more full-time employees, fund operations and deliver even more value to our community."
                                    />
                                    <Item 
                                        id="headingTen"
                                        title="How are secondary royalties used?"
                                        description="Randomizer Network will receive 5% of all secondary sales. These proceeds will be used to continue to hire more full-time employees, fund operations and deliver even more value to our community."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Item = ({id, title, description}) => {
    const [init, setInit] = useState(false);
    const [flip, setFlip] = useState("collapsed");
    useEffect(() => {
        setFlip(init == true ? "collapsed" : "collapse");
    },[init])
    return (
        <div className="col-12" onClick={() => setInit(!init)}>
            <div className="accordion-item">
                <div className="accordion-header" id={id}>
                    <button className={`accordion-button ${init ? flip : !flip}`} type="button"
                        data-bs-toggle={flip} data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        <span className="accor-header-inner d-flex flex-wrap align-items-center">
                            {/* <span className="accor-thumb">
                                <img src={img} alt="partner-thumb"/>
                            </span> */}
                            <span className="accor-title">{title}</span>
                        </span>
                    </button>
                </div>
                <div id="collapseOne" className={`accordion-collapse ${flip}`}
                    aria-labelledby={id} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
