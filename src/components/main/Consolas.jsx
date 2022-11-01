import { Link } from 'react-router-dom'

const Consolas = () => {
  return (
    <div className="section-main">
      <div className="section-title">
        <h2>Consolas</h2>
        <Link to='/todo' className='link-todo'>Ver todo →</Link>
      </div>

      <div className='cards-container'>
        <div className="card">
          <img src="src\assets\unsplash_6FDXGY9J6y4.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="src\assets\unsplash_6FDXGY9J6y4.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="src\assets\unsplash_6FDXGY9J6y4.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="src\assets\unsplash_6FDXGY9J6y4.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="src\assets\unsplash_6FDXGY9J6y4.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="src\assets\unsplash_6FDXGY9J6y4.png" alt="imagen" />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>
      </div>
    </div>
  )
}

export default Consolas