import { createContext, useContext, useEffect, useState } from 'react'
import usuariosDB from '../data/usuarios.json'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null)

  // Verifica si hay sesión guardada al cargar
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario')
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado))
    }
  }, [])

  // Guarda la sesión en localStorage al loguear
  const login = (correo, password) => {
    const user = usuariosDB.find(
      u => u.correo === correo && u.password === password
    )

    if (user) {
      setUsuario(user)
      localStorage.setItem('usuario', JSON.stringify(user))
      return true
    }

    return false
  }

  const logout = () => {
    setUsuario(null)
    localStorage.removeItem('usuario')
  }

  return (
    <UserContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}