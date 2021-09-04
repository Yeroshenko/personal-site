import type { GetStaticProps, NextPage } from 'next'
import { HeroSection } from '../components/HeroSection'
import { getWorkInfo } from '../cms/entries/workInfo'
import { IWorkInfoFields } from '../@types/generated/cms'

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
