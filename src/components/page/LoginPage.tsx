import styles from "../../styles/loginPage.module.css"
import User  from "../../assets/images/name.png"
import Password  from "../../assets/images/lock.png"
import { useNavigate, Link } from "react-router-dom"
import ParticleBackground from "../ParticleBackground"

const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <ParticleBackground />
            <div className={styles.box}>
                <div className={styles.loginBox}>
                    <h1>Login</h1>
                    <form onSubmit={(event) =>{
                        event.preventDefault()
                        navigate("/mainpage")
                    }}>
                        
                        <div>
                            <label htmlFor="username">Email</label>
                            <div className={styles.input}>
                                <img src={User} alt="User Icon"/>
                                <input type="text" id="username" placeholder="User Name" />
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