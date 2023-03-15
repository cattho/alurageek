import { useContext, useEffect } from 'react'
import Context from '../../context/Context'
import Banner from '../header/Banner'
import ProductsPage from './ProductsPage'




const MainContainer = () => {
    const { getData, products } = useContext(Context);
    console.log(products);

    const getProductByType = productType => products.filter(item => item.category === productType)


    const renderCardProducts = (products) => {
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

    const renderTitle = (title) => {
        return <div className='.section-title'><h2>{title}</h2></div>
         
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <Banner />
            <div className='main-container'>
                {renderTitle('Star-wars')}
                <div className='cards-container'>
                    {renderCardProducts(getProductByType('star-wars'))}
                </div>
                {renderTitle('Consolas')}
                <div className="cards-container">
                    {renderCardProducts(getProductByType('consolas'))}
                </div>
                {renderTitle('Varios')}
                <div className="cards-container">
                    {renderCardProducts(getProductByType('varios'))}
                </div>
            </div>
        </>
    )
}


export default MainContainer