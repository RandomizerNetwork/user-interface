import React from 'react'

export default function LaunchpadSection() {
  return (
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
  )
}
