import React from 'react'
import Image from 'next/image'

import MetaPass from "../public/assets/images/metapass/meta-game-pass.mp4"

export default function MetaPassInfoSection() {
  return (
    <section className="banner-section" style={{background: "#000"}}>
      <div className="container">
        <div className="banner-content text-center top-section">

        <div className="topSection">
        <div className="row mb-2">
          <div className="col-12 col-md-6">
            <div>
              <div className="w-80 meta">
                {/* <img className="w-100 meta" src="assets/images/metapass/meta-game-pass.gif"></img> */}
                <video width="100%" height="100%" muted autoPlay={"autoplay"} preload="auto" loop style={{borderRadius:"25px"}}>
                  <source src={require("../public/assets/images/metapass/meta-game-pass.mp4")} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div>
              <span className="title common">RANDOMIZER META PASS</span>
              <br />
              <span className="subtitle">unlocked features</span>
              <hr className="metaline metalineCommon w-100" />
              <div className="bullets">
                <ul className="d-flex flex-wrap align-content-center flex-column">
                  <li className="description bullet">Propose/Vote in RN Governance</li>
                  <li className="description bullet">Daily No-Loss Lottery Participation</li>
                  <li className="description bullet">Create custom trustless distributions</li>
                  <li className="description bullet">Earn from generated revenue fees</li>
                  <li className="description bullet">Future Random NFT Avatar </li>
                </ul>  
              </div>
            </div>
          </div>
        </div>
        </div>
        <style jsx>{`
            .metapass {
                /* 
                   background: #8247E5;
                   height: 100%;
                 */
                background: rgb(37, 3, 64);
                border: 1px solid rgb(72, 20, 123);
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 5px;
                /* border-top-left-radius: 5px;
                border-top-right-radius: 5px; */
                padding:1px;
                margin: 10px 0px;
            }
            @media only screen and (min-width:767px) {
                .metapass {
                    height: 777px;
                    margin: 0px;
                }
            }
            .commonMetapass{
                background: #00081F;
                border: 1px solid #628ef7;
            }
            .epicMetapass{
                background: #35004c;
                border: 1px solid #9200d1;
            }
            .legendaryMetapass{
                background: #a58a20;
                border: 1px solid #f1e08f;
            }
            .meta {
                border-top-left-radius: 1px;
                border-top-right-radius: 1px;
            }
            .title {
                color: #FFF;
                margin-top: 1rem;
            }
            .subtitle {
                color: #FFF;
            }
            .bullets {
                display: flex;
                flex-direction: column;
                text-align: left;
            }
            .description {
                margin-top: 1rem;
                color: #FFF;
                text-align: left;
            }
            .bullet {
              list-style-type: disc;
            }
            .metaline {
                width: 80%;
                border: 1px solid #8247E5;
                margin-bottom: 1rem;
            }
            .metalineCommon {
                border: 1px solid #628ef7;
            }
            .metalineEpic {
                border: 1px solid #9200d1;
            }
            .metalineLegendary {
                border: 1px solid #f1e08f;
            }
            .common {
                color: #628ef7;
            }
            .epic {
                color: #9200d1;
            }
            .legendary {
                color: #f1e08f;
            }
        `}</style>
      </div>
      </div>
    </section>
  )
}
