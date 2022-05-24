import React from 'react'

export default function LaunchpadFeesDistributionSection() {
  return (
    <section className="newSection" id="faq">
          <div className="newWrapper">
            <div className="newMainSection mt-5 fs-1 fw-bold">HOW IT WORKS</div>
            <div className="newMainSectionText">The Randomizer Network has a base 2.5% base fee for future games</div>
            <div className="newMainSectionRow justify-content-center">
              <div className="newMainSectionColumn">
                <div>Distribution of fees</div>
                <ul>
                  <li>- 50% goes to the Core Team for expenses</li>
                  <li>- 10% is added to the pair RN/USDC pair</li>
                  <li>- 10% goes to Meta Pass Hodlers</li>
                  <li>- 10% is burned after every game</li>
                  <li>- 5% goes to the Staking System</li>
                  <li>- 5% goes to Yield Farming</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  )
}
