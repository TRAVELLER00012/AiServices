import { Link } from "react-router-dom"
import styles from "../../styles/loginPage.module.css"
import ParticleBackground from "../ParticleBackground"
import Email  from "../../assets/images/email.png"
import Password  from "../../assets/images/lock.png"
import Name  from "../../assets/images/name.png"


const RegisterPage = () => {
  return (
    <>
    <ParticleBackground />
        <div className={styles.box}>
            <div className={styles.loginBox}>
                <h1>Register</h1>
                <form>
                    
                    <div>
                        <label htmlFor="name">Full Name</label>
                        <div className={styles.input}>
                            <img src={Name} alt="Name Icon"/>
                            <input type="text" id="name" placeholder="Full Name" />
                        </div>
                    </div>
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
                    <p><Link to={"/register"}>Login</Link></p>
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

export default RegisterPage