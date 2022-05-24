import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                        <div className="col-2">
                          <img src="./assets/images/logo/logo-icon-blue.svg" width="70px" height="70px" style={{cursor: "pointer"}} />
                        </div>
                        <div className="col-10">
                          <p className="mb-1">
                            {/* Randomizer Network is a decentralized multi-chain fundraising platform that enables project customizations for distribution mechanisms that have DAO Treasuries and randomized distributions and Staking RANDOM tokens to get priority-access to promising projects. */}
                            Randomizer Network is a No-Code Trustless Random Entropy Generator that players, creators and influencers use to create their own Decentralized DAO Distributions and Future Metaverse Tools.
                          </p>
                          <div className="fm-item-content d-flex">
                            <div className="primary-color"><a className="superLink p-0" target="_blank" rel="noopener noreferrer" href="https://github.com/RandomizerNetwork"><FontAwesomeIcon className="d-flex p-2" style={{width:"40px"}} icon={["fab", "github"]} /> </a></div>
                            <div className="primary-color"><a className="superLink p-0" target="_blank" rel="noopener noreferrer" href="https://twitter.com/RandomizerNet"><FontAwesomeIcon className="d-flex p-2" style={{width:"40px"}} icon={["fab", "twitter"]} /> </a></div>
                            <div className="primary-color"><a className="superLink p-0" target="_blank" rel="noopener noreferrer" href="https://discord.gg/nq9SXYmYer"><FontAwesomeIcon className="d-flex p-2" style={{width:"40px"}} icon={["fab", "discord"]} /> </a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="footer-middle-item-wrapper d-flex justify-content-center" style={{ textAlign: "left" }}>
                    <div className="footer-middle-item mb-lg-0">
                      <div className="fm-item-title">
                        <h4 className="primary-color">General</h4>
                      </div>
                      <div className="fm-item-content">
                        {/* <p><Link href="/launchpad"><a className="primary-color">IDO List</a></Link></p> */}
                        <p><Link href="/faq"><a className="primary-color">How to participate</a></Link></p>
                        <p><Link href="/staking"><a className="primary-color">Staking Levels</a></Link></p>
                        <p><a href="https://docs.randomizer.network" className="primary-color">Documentation</a></p>
                        {/* <p><a href="/faq">FAQ</a></p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="footer-middle-item-wrapper d-flex justify-content-center" style={{ textAlign: "left" }}>
                    <div className="footer-middle-item-3 mb-lg-0">
                      <div className="fm-item-title">
                        <h4 className="primary-color">Socials:</h4>
                      </div>
                      <div className="d-flex flex-column">
                        <p><a className="linkUrl" href="/terms-of-use">Terms of use</a></p>
                        <p><a className="linkUrl" href="/terms-of-use">Terms of sale</a></p>
                        <p><a className="linkUrl" href="/privacy-policy">Privacy Policy</a></p>
                      </div>
                      {/* justify-content-evenly */}
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-5 mb-5">
                  <div className="row">
                    <div className="col-12 text-center">
                      <div className="footer-bottom-content">
                        &copy; Randomizer Network {`${new Date().getFullYear()}`}. All rights reserved.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .linkUrl {
              color: #FFF;
              text-decoration: none;
            }
            .linkUrl:hover {
              color: #FFDD00;
            }
          `}</style>
        </footer>
    )
}
