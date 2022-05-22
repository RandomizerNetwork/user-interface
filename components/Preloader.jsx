import { useState, useEffect } from 'react'

export default function Preloader() {
    const [preloader, setPreloader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setPreloader(!preloader)
        }, 3000);
        return () => clearTimeout(timer);
    }, [])
    return (
        <>
            <div className={`preloader ${preloader ? "" : "hide d-none"}`} style={{transition: "1s linear"}}>
            {/* <div className="preloader"> */}
                <div className="preloader-inner">
                    <img className="randomizer-logo" src="./assets/images/logo/logo-white.svg" style={{ width: "300px", height: "300px", cursor: "pointer" }} />
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}
