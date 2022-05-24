import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer-section">
          <div className="footer-top mb-lg-5">
            <div className="container">
              <div className="row g-3 justify-content-center g-lg-0">
                <div className="col-12">
                  <div className="footer-top-item lab-item">
                    <div className="lab-inner" style={{ "display": "flex", "justifyContent": "center" }}>
                      <div className="lab-content">
                        <div className="me-2" style={{ fontSize: "25px", display: "inline-block" }}>Start your Project Incubation</div>
                        <a href="/apply-for-incubation" className="default-button reverse-effect ml-1">
                          <span><i className="icofont-rocket"></i> Apply As A Project</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle padding-top-updated">
            <div className="container mt-lg-5 pt-lg-5">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <div className="footer-middle-item-wrapper">
                    <div className="footer-middle-item mb-lg-0">
                      <div className="row">
                        <div className="col-12">
                          <img src="./assets/images/logo/logo-icon-blue.svg" width="70px" height="70px" style={{cursor: "pointer"}} />
                        </div>
                        <div className="col-12 col-lg-9">
                          <p className="mb-4">Randomizer Network is a decentralized multi-chain fundraising platform that enables project customizations for distribution mechanisms that have DAO Treasuries and randomized distributions and Staking RANDOM tokens to get priority-access to promising
                            projects.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="footer-middle-item-wrapper" style={{ textAlign: "left" }}>
                    <div className="footer-middle-item mb-lg-0">
                      <div className="fm-item-title">
                        <h4>General</h4>
                      </div>
                      <div className="fm-item-content">
                        <p><Link href="/launchpad"><a>IDO List</a></Link></p>
                        <p><Link href="/faq"><a>How to participate in IDO</a></Link></p>
                        <p><Link href="/staking"><a>Staking Levels</a></Link></p>
                        {/* <p><a href="/faq">FAQ</a></p> */}
                        <p><a href="/apply">Apply to launch IDO</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="footer-middle-item-wrapper" style={{ textAlign: "left" }}>
                    <div className="footer-middle-item-3 mb-lg-0">
                      <div className="fm-item-title">
                        <h4>Socials:</h4>
                      </div>
                      <div className="fm-item-content">
                        <div style={{ color: "#fd0" }}>Twitter: <br /><a href="https://twitter.com/randomizer.network">https://twitter.com/randomizer.network</a></div>
                        <div style={{ color: "#fd0" }}>Telegram: <br /><a href="https://t.me/randomizer.network">https://t.me/randomizer.network</a></div>
                        <div style={{ color: "#fd0" }}>Telegram ANN: <br /><a href="https://t.me/randomizer.network">https://t.me/randomizer.network</a></div>
                        <div style={{ color: "#fd0" }}>Medium: <br /><a href="https://medium.com/randomizer.network">https://medium.com/randomizer.network</a></div>
                        {/* <div style={{ color: "#fd0" }}>Support: <br /><a href="support@randomizer.network">support@randomizer.network</a></div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-5">
                  <div className="row">
                    <div className="col-6">
                      <div className="footer-bottom-content">
                        <p>&copy; Randomizer Network {`${new Date().getFullYear()}`}. All rights reserved.</p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="row" style={{ textAlign: "right" }}>
                        <div className="footer-bottom-content">
                          <a href="/terms-of-use" style={{ marginRight: "5px", textDecoration: "underline" }}>Terms of use</a>
                          <a href="/privacy-policy" style={{ marginRight: "5px", textDecoration: "underline" }}>Privacy Policy</a>
                          <a href="/cookies-policy" style={{ textDecoration: "underline" }}>Cookies Policy</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
}
