import { Link } from 'react-router-dom'

const Consolas = () => {
  return (
    <div className="section-main">
      <div className="section-title">
        <h2>Consolas</h2>
        <Link to='/consolas' className='link-todo'>Ver todo →</Link>
      </div>

      <div className='cards-container'>
        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319152/alurageek/consolas/wiesiqxsnt8alc7xds13.png" alt="imagen" className='card-img' />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319153/alurageek/consolas/kwgsgqbhdvcs2zbpo2zk.png" alt="imagen" className='card-img' />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319152/alurageek/consolas/tzqnmthasdttggccwtki.png" alt="imagen" className='card-img' />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319152/alurageek/consolas/jg5dkeqihqixwldut3vn.png" alt="imagen" className='card-img' />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319152/alurageek/consolas/b4rvn2u49a92brym5yql.png" alt="imagen" className='card-img' />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>

        <div className="card">
          <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667319152/alurageek/consolas/i1ue4hq3c8yrndgvh6pv.png" alt="imagen" className='card-img' />
          <p className='card-name'>Producto XYZ</p>
          <p className='price'>$60,00</p>
          <Link to='/producto' className='link-card'>Ver Producto</Link>
        </div>
      </div>
    </div>
  )
}

export default Consolas