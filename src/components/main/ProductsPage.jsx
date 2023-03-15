import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductDescription from './ProductDescription';


const ProductsPage = (props) => {
  const { image, name, price } = props;
  const [showDescription, setShowDescription] = useState(false)


  const handleShowDescription = () =>{
    setShowDescription(true)
  }

  return (
    <>
      <div className="card">
        <img src={image} alt={name} className='card-img' />
        <p className='card-name'>{name}</p>
        <p className='price'>{price}</p>
        <Link  onClick={handleShowDescription} className='link-card'>Ver Producto</Link>
        {showDescription && <ProductDescription name={name} />}
      </div>
    </>
  )
}

export default ProductsPage