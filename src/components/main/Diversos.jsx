import { Link } from 'react-router-dom'

const Diversos = () => {
  return (
    <div className="section-main">
      <div className="section-title">
        <h2>Diversos</h2>
        <Link to='/todo' className='link-todo'>Ver todo →</Link>
      </div>

      <div className='cards-container'>
        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319353/alurageek/diversos/syi3xc659jawjnttkjcx.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319353/alurageek/diversos/ujuv7nbbhl7mvsmypjeu.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319353/alurageek/diversos/jvj2baivxgckhrdasruk.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319353/alurageek/diversos/ohmbyndoptbwo6vrizzb.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319353/alurageek/diversos/uaaa2wnxin54gf2mmptg.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319353/alurageek/diversos/rf0e4f8az5oekmjjul9z.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>
      </div>
    </div>
  )
}

export default Diversos