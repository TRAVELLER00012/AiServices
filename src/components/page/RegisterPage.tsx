import { Link, useNavigate } from "react-router-dom"
import styles from "../../styles/loginPage.module.css"
import ParticleBackground from "../ParticleBackground"
import Email  from "../../assets/images/email.png"
import Password  from "../../assets/images/lock.png"
import Name  from "../../assets/images/name.png"
import { useRef, useState } from "react"
import registerService from "../../services/register-service"
import loginService from "../../services/login-service"


const RegisterPage = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const [error,setError] = useState(false)
    return (
        <>
            <ParticleBackground />
            <div className={styles.box}>
                <div className={styles.loginBox}>
                    <h1>Register</h1>
                    <form onSubmit={(event) =>{
                        event.preventDefault()
                        if (usernameRef.current && emailRef.current && passwordRef.current){
                            const request = registerService.register({email:emailRef.current.value,password:passwordRef.current.value,full_name:usernameRef.current.value})
                            request.then(() =>{
                                loginService.login({password:passwordRef.current!.value,email:emailRef.current!.value})
                                    .then((res) =>{
                                        localStorage.setItem("jwt",res.headers["authorization"])
                                        console.log(res.headers["authorization"])
                                        navigate("/mainpage")
                                    }).catch(() => setError(true))
                            }).catch(() => setError(true)) 
                        }
                    }}>
                        
                        <div>
                            <label htmlFor="name">Full Name {error && <span className="error">Invalid Full Name</span>}</label>
                            <div className={styles.input}>
                                <img src={Name} alt="Name Icon"/>
                                <input type="text" id="name" placeholder="Full Name" ref={usernameRef}/>
                            </div>
                        </div>
                        <div>

                            <label htmlFor="email">Email {error && <span className="error">Invalid Email</span>}</label>
                            <div className={styles.input}>
                                <img src={Email} alt="Email Icon"/>
                                <input type="email" id="email" placeholder="Email" ref={emailRef}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password">Password {error && <span className="error">Invalid Password</span>}</label>
                            <div className={styles.input}>
                                <img src={Password} alt="Password Icon"/>
                                <input type="password" id="password" placeholder="Password" ref={passwordRef}/>
                            </div>
                        </div>
                        <p><Link to={"/login"}>Login</Link></p>
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