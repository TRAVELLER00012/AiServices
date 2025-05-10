import styles from "../../styles/loginPage.module.css"
import EmailIcon  from "../../assets/images/name.png"
import Password  from "../../assets/images/lock.png"
import { useNavigate, Link } from "react-router-dom"
import ParticleBackground from "../ParticleBackground"
import { useRef, useState } from "react"
import loginService from "../../services/login-service"

const LoginPage = () => {
    const navigate = useNavigate()
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [error,setError] = useState(false)


    return (
        <>
            <ParticleBackground />
            <div className={styles.box}>
                <div className={styles.loginBox}>
                    <h1>Login</h1>
                    <form onSubmit={(event) =>{
                        event.preventDefault()
                        if (emailRef.current && passwordRef.current){
                            let token = "";
                            const request = loginService.login({password:passwordRef.current.value,email:emailRef.current.value})
                            request
                            .then((res) =>{
                                token = res.headers["authorization"]
                                navigate("/mainpage")
                            })
                            .catch(() => setError(true))
                            .finally(() =>{
                                localStorage.setItem("jwt",token)
                            })
                        }

                    }}>
                        
                        <div>
                            <label htmlFor="email">Email {error  && <span className="error">Invalid Email</span>}</label>
                            <div className={styles.input}>
                                <img src={EmailIcon} alt="Email Icon"/>
                                <input type="text" id="email" placeholder="Email" ref={emailRef} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password">Password {error  && <span className="error">Invalid Password</span>}</label>
                            <div className={styles.input}>
                                <img src={Password} alt="Password Icon"/>
                                <input type="password" id="password" placeholder="Password" ref={passwordRef}/>
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