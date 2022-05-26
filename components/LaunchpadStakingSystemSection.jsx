import React from 'react'

export default function LaunchpadStakingSystemSection() {
  return (
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
                  <div className="td">3,000</div>
                  <div className="td">10,000</div>
                  <div className="td">30,000</div>
                  <div className="td">60,000</div>
                  <div className="td">90,000</div>
                  <div className="td">125,000</div>
                  <div className="td">250,000</div>
                  <div className="td">500,000</div>
                  <div className="td">750,000</div>
                  <div className="td">1,000,000</div>
                </div>
                <div className="col">
                  <div className="th">Whitelist Requirements</div>
                  <div className="td half-top" style={{ height: "40px", marginTop: "1px", borderRight: "none" }}>Lucky Draw</div>
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
  )
}
