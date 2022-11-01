import Formheader from './Formheader'

const NavBar = () => {
   
    return (
        <>
            <div className="navbar">
                <div className='form-img-container'>
                    <img src="src\assets\Logo.png" alt="logo-alura-geek" />
                    <Formheader />
                </div>
                <div className="button-container">
                    <a href='/login'><button>Login</button></a>
                </div>
            </div>
        </>
    )
}

export default NavBar