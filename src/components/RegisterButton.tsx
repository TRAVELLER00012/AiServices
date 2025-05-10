import { jwtDecode } from 'jwt-decode'
import { Link, useNavigate } from 'react-router-dom'
import YellowButton from './YellowButton'
import styles from "../styles/registerButton.module.css"
import { useEffect, useState } from 'react'

const RegisterButton = () => {
  const [logged,setLogged] = useState(false)
  const navigate = useNavigate()
  useEffect(() =>{
    let token = localStorage.getItem("jwt")
    token = token?.startsWith("Bearer ") ? token.slice(7) : token

    try{
      const decoded = jwtDecode<{exp:number}>(token!)
      const isExpired = decoded.exp < Date.now() / 1000;
      if (!isExpired) {
        setLogged(true);
      } else {
        localStorage.removeItem("jwt");
        setLogged(false);
      }
      setLogged(true)
    }catch(err){
      localStorage.removeItem("jwt")
      setLogged(false)
    }
  },[])
  const removeToken = () =>{
    localStorage.removeItem("jwt")
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