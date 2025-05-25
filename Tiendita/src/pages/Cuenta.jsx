import { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate, Link } from 'react-router-dom'
import './Cuenta.css'

const Cuenta = () => {
  const { usuario } = useUser()
  const navigate = useNavigate()

  // Si no está logueado, redirige al login
  useEffect(() => {
    if (!usuario) {
      navigate('/login')
    }
  }, [usuario, navigate])

  if (!usuario) return null

  return (
    <section className="cuenta">
      <h2>Bienvenido, {usuario.nombre} 👋</h2>

      <div className="cuenta-info">
        <p><strong>Nombre:</strong> {usuario.nombre} {usuario.apellido}</p>
        <p><strong>Correo:</strong> {usuario.correo}</p>
      </div>

      <div className="cuenta-links">
        <Link to="/ordenes">🧾 Ver mis órdenes</Link>
        <Link to="/editar-perfil">✏️ Editar datos</Link>
        <Link to="/cambiar-password">🔒 Cambiar contraseña</Link>
      </div>
    </section>
  )
}

export default Cuenta