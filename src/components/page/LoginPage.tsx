import styles from "../../styles/loginPage.module.css"
import User  from "../../assets/images/name.png"
import Password  from "../../assets/images/lock.png"
import { useNavigate, Link } from "react-router-dom"
import ParticleBackground from "../ParticleBackground"
import { useRef, useState } from "react"
import loginService, { Tokens } from "../../services/login-service"

const LoginPage = () => {
    const navigate = useNavigate()
    const usernameRef = useRef<HTMLInputElement>(null)
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
                        if (usernameRef.current && passwordRef.current){
                            let tokens : Tokens = {access:"",refresh:""};
                            const request = loginService.login({password:passwordRef.current.value,username:usernameRef.current.value})
                            request
                            .then((res) =>{
                                tokens = res.data
                                navigate("/mainpage")
                            })
                            .catch(() => setError(true))
                            .finally(() =>{
                                localStorage.setItem("access",tokens.access)
                                localStorage.setItem("refresh",tokens.refresh)
                            })
                        }

                    }}>
                        
                        <div>
                            <label htmlFor="username">Email {error  && <span className="error">Invalid Email</span>}</label>
                            <div className={styles.input}>
                                <img src={User} alt="User Icon"/>
                                <input type="text" id="username" placeholder="User Name" ref={usernameRef} />
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