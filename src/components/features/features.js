import React from 'react'
import "./features.css"
import mara from "./nurse.png"

function Features() {
    return (
        <div className='features'>
            <div className='col-lg-8 col-sm-12 features_col_right'>
                <h1>
                    LET'S GET BACK TO WHO YOU REALLY ARE
                </h1>
                <br />
                <p>
                    At the heart of Quirkville stands a tower that defies conventional construction. It sways gently, constructed entirely from mismatched socks. This tower is home to Dr. Bumblefuzzle, an eccentric professor who brews potions that transform stones into skipping snails and imbues grasshoppers with the essence of grapefruit. Inside his laboratory, rainbow-colored fog swirls within test tubes, and shelves overflow with jars filled with moonbeam fragrances and laughter essences.
                </p>

                <a href='/about'>
                <button type="button" className="features_btn">MORE ABOUT US</button>
                </a>

            </div>

            {/* break Line */}

            <div className='col-4 features_col_left'>
                <img src={mara} alt='mara.jpg' width="75%" data-aos="zoom-in" data-aos-mirror="false" />
            </div>

        </div>
    )
}

export default Features