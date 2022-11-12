import { Link } from 'react-router-dom'

const Starwarspage = () => {
    return (
        <div className="section-main">
            <div className="section-title">
                <h2>Star Wars</h2>
                <Link to='/starwars' className='link-todo'>Ver todo →</Link>
            </div>

            <div className='cards-container'>
                <div className="card">
                    <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667318906/alurageek/starwars/ba3nxzhqpaxfdfjxcxby.png" alt="imagen" className='card-img' />
                    <p className='card-name'>Producto XYZ</p>
                    <p className='price'>$60,00</p>
                    <Link to='/producto' className='link-card'>Ver Producto</Link>
                </div>

                <div className="card">
                    <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667318985/alurageek/starwars/qzxhlgmwpgzmdp4otqhj.png" alt="imagen" className='card-img' />
                    <p className='card-name'>Producto XYZ</p>
                    <p className='price'>$60,00</p>
                    <Link to='/producto' className='link-card'>Ver Producto</Link>
                </div>

                <div className="card">
                    <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667318985/alurageek/starwars/gnsh7kpg8m5f8x7y0lly.png" alt="imagen" className='card-img' />
                    <p className='card-name'>Producto XYZ</p>
                    <p className='price'>$60,00</p>
                    <Link to='/producto' className='link-card'>Ver Producto</Link>
                </div>

                <div className="card">
                    <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667318985/alurageek/starwars/tjtslmb2gjnjhxpxtras.png" alt="imagen" className='card-img' />
                    <p className='card-name'>Producto XYZ</p>
                    <p className='price'>$60,00</p>
                    <Link to='/producto' className='link-card'>Ver Producto</Link>
                </div>

                <div className="card">
                    <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667318985/alurageek/starwars/b2upklzlklrconbj7vnt.png" alt="imagen" className='card-img' />
                    <p className='card-name'>Producto XYZ</p>
                    <p className='price'>$60,00</p>
                    <Link to='/producto' className='link-card'>Ver Producto</Link>
                </div>

                <div className="card">
                    <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667318985/alurageek/starwars/fxc8vutpm2bmg0sq66cw.png" alt="imagen" className='card-img' />
                    <p className='card-name'>Producto XYZ</p>
                    <p className='price'>$60,00</p>
                    <Link to='/producto' className='link-card'>Ver Producto</Link>
                </div>
            </div>
        </div>
    )
}

export default Starwarspage