import { useEffect, useState } from 'react'
import MainPageNavBar from '../components/MainPageNavBar'
import ParticleBackground from '../components/ParticleBackground'
import SideBar from '../components/SideBar'
import YellowCard from '../components/YellowCard'
import styles from "../styles/mainPage.module.css"
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
    const [token,setToken] = useState<String>("")
    const navigate = useNavigate()
    useEffect(() =>{
        const t = localStorage.getItem("jwt")
        if (!t) navigate("/login")
        else setToken(t)
    },[])
    return (
        <>
            <ParticleBackground />
            <MainPageNavBar services={true} />
            <div className={styles.apiKey}><span>JWT</span><span>{token}</span></div>
            <div className={styles.main}>
                <SideBar items={[{itemLink:"#regression",itemName:"Regression"},{itemName:"Classification",itemLink:"#classification"}]}/>
                <div className={styles.mainPage}>
                    <h1 className='big-heading'>Models</h1>
                    <p className={styles.note}>Note: Do apply feature scaling on your dataset wherever needed. </p>
                    <div id='regression' className={styles.model}>
                        <h2 className='big-heading'>Regression Models</h2>
                        <div className={styles.modelGrid}>
                            <YellowCard heading={"Linear Regression"}>
                                <p>http://127.0.0.1:5000/regression/linear/fit</p>
                                <p>http://127.0.0.1:5000/regression/linear/predict/</p>
                                <p>File1 and File2 : Training</p>
                                <p>File1 : Prediction</p>
                            </YellowCard>
                            <YellowCard heading={"SVR"}>
                                <p>http://127.0.0.1:5000/regression/svr/fit</p>
                                <p>http://127.0.0.1:5000/regression/svr/predict/</p>
                                <p>File1 and File2 : Training</p>
                                <p>File1 : Prediction</p>
                                <p>Parameters: Kernel, gamma, degree, C, e</p>
                            </YellowCard>
                            <YellowCard heading={"Decission Tree Regression"}>
                                <p>http://127.0.0.1:5000/regression/dtr/fit</p>
                                <p>http://127.0.0.1:5000/regression/dtr/predict/</p>
                                <p>File1 and File2 : Training</p>
                                <p>File1 : Prediction</p>
                            </YellowCard>
                        </div>
                    </div>

                    <div id='classification' className={styles.model}>
                        <h2 className='big-heading'>Classification Models</h2>
                        <div className={styles.modelGrid}>
                            <YellowCard heading={"Logistic Classifier"}>
                                <p>http://127.0.0.1:5000/model/logisitic/fit</p>
                                <p>http://127.0.0.1:5000/model/logisitic/predict/</p>
                                <p>File1 and File2 : Training</p>
                                <p>File1 : Prediction</p>
                            </YellowCard>
                            <YellowCard heading={"Decission Tree Classifier"}>
                                <p>http://127.0.0.1:5000/model/svcclassifier/</p>
                                <p>http://127.0.0.1:5000/model/svcclassifier/predict</p>
                                <p>File1 and File2 : Training</p>
                                <p>File1 : Prediction</p>
                            </YellowCard>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainPage