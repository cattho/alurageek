import Banner from '../header/Banner'
import Consolas from './Consolas'
import Diversos from './Diversos'
import Starwarspage from './Starwarspage'

const MainContainer = () => {
    return (
        <>
            <Banner />
            <div className='main-container'>
                <Starwarspage />
                <Consolas />
                <Diversos />
            </div>
        </>
    )
}

export default MainContainer