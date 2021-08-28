import type { NextPage } from 'next'
import { Title, TitleTagsEnum } from '../components/Title'

const Home: NextPage = () => {
    return (
        <div className="container">
            <Title tagName={TitleTagsEnum.h1}>Hello world.</Title>
        </div>
    )
}

export default Home
