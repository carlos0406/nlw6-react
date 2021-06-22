import { useContext } from 'react'
import { AuthContext } from '../context/AuthCxt'

export function useAuth() {
  const value = useContext(AuthContext)
  return value
}
