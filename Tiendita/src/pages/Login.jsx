import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import './Login.css'

const Login = () => {
  const { login } = useUser()
  const navigate = useNavigate()

  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const ok = login(correo, password)
    if (ok) {
      navigate('/cuenta')
    } else {
      setError(true)
    }
  }

  return (
    <section className="login">
      <h2>Iniciar Sesión</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </form>

      {error && <p className="error">Correo o contraseña incorrectos</p>}

      <div className="login-links">
        <Link to="/recuperar-password">Olvidé mi contraseña</Link>
        <span> | </span>
        <Link to="/registro">Registrarme</Link>
      </div>
    </section>
  )
}

export default Login