import React from 'react'

export default function StarsBackground({children}) {
    return (
        <>
        <div className="stars">
            <div className="starsContainer">
                <video id="vidcontent" className="videoContainer" width="100%" height="100%" autoPlay loop muted >
                    <source src="assets/images/metaspace/space-odyssey-hd.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        {children}
        </>
    )
}
