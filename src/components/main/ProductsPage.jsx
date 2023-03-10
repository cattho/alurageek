import React from 'react'
import { Link } from 'react-router-dom'
import Consolas from './Consolas'
import Starwarspage from './Starwarspage'

const ProductsPage = (props) => {
  const { image, name, price } = props;
  return (
    <>
      <div className="card">
        <img src={image} alt="imagen" className='card-img' />
        <p className='card-name'>{name}</p>
        <p className='price'>{price}</p>
        <Link to='/producto' className='link-card'>Ver Producto</Link>
      </div>
    </>
  )
}

export default ProductsPage