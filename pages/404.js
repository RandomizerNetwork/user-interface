// 404.js
import { Fragment } from 'react'
import Link from 'next/link'
// import { ComponentLoader } from '../components/ComponentLoader'
import Head from 'next/head'

export default function FourOhFour() {
    return (
        <Fragment>
            <Head>
                <title>404 - Page Not Found</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="/css/blackCSS.css" />
            </Head>
            <div className="limiter text-center" style={{height: "100vh", padding: "50% 15px 0 15px"}}>
                <div className="container-login100">
                    <div className={`wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33`}>
                        <div className="expose">
                            <h1 className="text-white">404 - Page Not Found</h1>
                            <br />
                            <Link href="/">
                                <a> Go back home </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}