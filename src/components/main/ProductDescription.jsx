import React from 'react'

const ProductDescription = (props) => {

    const {category,description,id,image,name,price} = props;

    return (
        <>
        <h1>{name}</h1>
        </>
    )
}

export default ProductDescription