import { outLog } from '../../actions/loginAction';
import Formheader from './Formheader'

const NavBar = (props) => {

    const { isLoogged } = props;

    const handleLogOut = () =>{
        outLog()
    }

    return (
        <>
            <div className="navbar">
                <div className='form-img-container'>
                    <a href="/"> <img src="https://res.cloudinary.com/dfp8qduho/image/upload/v1667318734/alurageek/ddauvvwohlpqdxkjtkcj.png" alt="logo-alura-geek" /></a>
                    <Formheader />
                </div>
                <div className="button-container">
                    {
                        isLoogged ?
                            <button onClick={()=>{handleLogOut}}>Desconectar</button>
                            :
                            <a href='/login'><button>Login</button></a>
                    }
                </div>
            </div>
        </>
    )
}

export default NavBar