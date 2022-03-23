import { FC } from 'react'
import type { AppProps } from 'next/app'

import '@styles/index.sass'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default MyApp
