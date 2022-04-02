import { FC } from 'react'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import { PageLoader } from '@components/widgets/PageLoader'
import '@styles/index.sass'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
    <RecoilRoot>
        <PageLoader />
        <Component {...pageProps} />
    </RecoilRoot>
)

export default MyApp
