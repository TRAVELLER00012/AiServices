import { Link } from 'react-router-dom'
import YellowButton from './YellowButton'
import styles from "../styles/registerButton.module.css"

const RegisterButton = () => {
  return (
    <YellowButton><Link to={"/login"} className={styles.button}>Login In</Link></YellowButton>
  )
}

export default RegisterButton