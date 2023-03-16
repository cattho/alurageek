import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { loginWithEmailAndPassword } from '../../actions/loginAction';
import { useForm } from '../../hooks/useForm';

const Login = () => {

  const [datos, handleInputChange] = useForm({
    email: '', password: ''
  })

  const { email, password } = datos;
  
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    switch (true) {
      case email == '' || password == '':
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debes llenar ambos campos',
          confirmButtonColor: '#2a7ae4'
        })
        break;
      case email != '' && !regexEmail.test(email):
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Correo electrónico no valido',
          confirmButtonColor: '#2a7ae4'
        })
        break;
      default:
        break;
    }
  };


  return (
    <div className='login-container'>
      <h3 className='login-title'>Iniciar sesion</h3>
      <form className='login-form' onSubmit={handleSubmit}>
        <input type="email" className='input-login-name' name='email' placeholder='Correo electrónico' value={email} onChange={handleInputChange} />
        <input type="password" className='input-login-pass' name='password' placeholder='Contraseña' value={password} onChange={handleInputChange} />
        <button className='btn-login-form'>Entrar</button>
      </form>
      <Link to='/registro'>¿Aún no estas registrado?</Link>
    </div>
  )
}

export default Login