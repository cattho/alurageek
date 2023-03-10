import { useContext, useEffect } from 'react'
import Context from '../../context/Context'
import UseContext from '../../context/UseContext'
import Banner from '../header/Banner'
import Consolas from './Consolas'
import Diversos from './Diversos'
import ProductsPage from './ProductsPage'
import Starwarspage from './Starwarspage'



const MainContainer = () => {
    const { getData, products } = useContext(Context);
   
    const getProductByType = productType => {
        return products.filter(item => item.category === productType)
    };

    const renderProducts = (products) => {
        return products.map(item => (
            <ProductsPage
                key={item.id}
                product={item}
                image={item.image}
                name={item.name}
                price={item.price}
            />
        ))
    }

    console.log(getProductByType('consolas'));

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <Banner />
            <div className='main-container'>
                <div className='cards-container'>
                    {renderProducts(getProductByType('star-wars'))}
                    {renderProducts(getProductByType('consolas'))}
                    {renderProducts(getProductByType('varios'))}
                    
                </div>
            </div>
        </>
    )
}


export default MainContainer

{/* <Starwarspage />
                <Consolas />
                <Diversos /> */}
