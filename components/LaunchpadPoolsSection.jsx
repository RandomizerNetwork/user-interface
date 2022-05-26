import React from 'react'

export default function LaunchpadPoolsSection() {
  return (
        <section id="launchpadido" className="match-section padding-bottom mt-5" style={{ background: "#00081f", "borderTopLeftRadius": "10px", "borderTopRightRadius": "10px", "padding": "30px" }}>
          {/* <!-- <section className="match-section padding-top padding-bottom"> --> */}
          <div className="container">
            <div className="section-header mb-0">
              <p>Anytime, Anywhere</p>
              <h2>All scheduled pools</h2>
            </div>
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
                                      {/* <li><a href="#"><img src="assets/images/match/social-1.png" alt="vimeo" /></a></li> */}
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

              <div className="button-wrapper text-center mt-5 mb-5">
					<a href="#launchpadido" className="default-button"><span>Browse All Projects <i
								className="icofont-circled-right"></i></span>
					</a>
				</div>
            </div>

          </div>
        </section>
  )
}
