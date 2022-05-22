import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function FourOhFour() {
    return (
        <Fragment>
            <Head>
                <title>404 - Something went wrong</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="limiter" style={{backgroundColor: "#1d0733"}}>
                <div className="container-login100">
                    <div className={`wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33`}>
                        <div className="expose">
                            <h1 className="text-white">404 - Something went wrong</h1>
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