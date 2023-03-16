import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';


const ProductsPage = (props) => {
  const { image, name, price, description, id } = props;




  return (
    <>
      <div className="card">
        <img src={image} alt={name} className='card-img' />
        <p className='card-name'>{name}</p>
        <p className='price'>{price}</p>
        <Link onClick={() => {
          Swal.fire({
            html:
              `<div>
            <img src=${image} name=${name} />
            <h2>${name}</h2>
            <p>${description.slice(0, 200)}...</p>
            <p>Precio: ${price}</p>
            <p>ID del producto: ${id}<p/>
          </div>`,
            confirmButtonColor: '#2A7AE4'
          })
        }} className='link-card'>Ver Producto</Link>
      </div>
    </>
  )
}

export default ProductsPage