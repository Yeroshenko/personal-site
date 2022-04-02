import type { GetStaticProps, NextPage } from 'next'
import { getWorkInfo } from '@cms/entries/workInfo'
import { IWorkInfoFields } from '@shared-types/generated/cms'
import { HeroSection } from '@components/HeroSection'

interface IHomePageProps {
    workInfo: IWorkInfoFields
}

const Home: NextPage<IHomePageProps> = ({ workInfo }) => {
    return <HeroSection workInfo={workInfo} />
}

export const getStaticProps: GetStaticProps = async () => {
    const workInfo = await getWorkInfo()

    return {
        props: {
            workInfo
        }
    }
}

export default Home
