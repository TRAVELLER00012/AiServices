import styles from "../../styles/loginPage.module.css"
import Email  from "../../assets/images/email.png"
import Password  from "../../assets/images/lock.png"
import ParticleBackground from "../ParticleBackground"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <>
        <ParticleBackground />
        <div className={styles.box}>
            <div className={styles.loginBox}>
                <h1>Login</h1>
                <form>
                    
                    <div>
                        <label htmlFor="email">Email</label>
                        <div className={styles.input}>
                            <img src={Email} alt="Email Icon"/>
                            <input type="email" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <div className={styles.input}>
                            <img src={Password} alt="Password Icon"/>
                            <input type="password" id="password" placeholder="Password"/>
                        </div>
                    </div>
                    <p><Link to={"/register"}>Register Now</Link></p>
                    <div className={styles.buttons}>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default LoginPage