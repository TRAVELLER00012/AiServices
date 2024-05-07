import { Link, useNavigate } from 'react-router-dom'
import YellowButton from './YellowButton'
import styles from "../styles/registerButton.module.css"
import { useEffect, useState } from 'react'

const RegisterButton = () => {
  const [logged,setLogged] = useState(false)
  const navigate = useNavigate()
  useEffect(() =>{
    const access = localStorage.getItem("access")
    const refresh = localStorage.getItem("refresh")
    if (access && refresh)setLogged(true)
  },[])
  const removeToken = () =>{
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
  }
  return (
    <YellowButton>
        <Link 
          to={!logged ? "/login" : ""}
          className={styles.button}
          onClick={() =>{
            if (logged){
              removeToken()
              navigate("/login")
            }
          }}
        >
        {logged ? "Logout" : "Login In"}
        </Link>
      </YellowButton>
  )
}

export default RegisterButton