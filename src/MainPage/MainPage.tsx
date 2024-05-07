import MainPageNavBar from '../components/MainPageNavBar'
import ParticleBackground from '../components/ParticleBackground'
import SideBar from '../components/SideBar'
import YellowCard from '../components/YellowCard'
import styles from "../styles/mainPage.module.css"

const MainPage = () => {
    
    return (
        <>
            <ParticleBackground />
            <MainPageNavBar services={true} />
            <div className={styles.apiKey}><span>API KEY</span><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, sed.</span></div>
            <div className={styles.main}>
                <SideBar items={[{itemLink:"#regression",itemName:"Regression"},{itemName:"Classification",itemLink:"#classification"}]}/>
                <div className={styles.mainPage}>
                    <h1 className='big-heading'>Models</h1>

                    <div id='regression' className={styles.model}>
                        <h2 className='big-heading'>Regression Models</h2>
                        <div className={styles.modelGrid}>
                            <YellowCard heading={"Linear Regression"}>
                                <p>http://127.0.0.1:8000/model/linearregression/</p>
                                <p>http://127.0.0.1:8000/model/linearregression/predict/</p>
                                <p>FileX and FileY : Training</p>
                                <p>FileX : Prediction</p>
                            </YellowCard>
                            <YellowCard heading={"Polynomial Regression"}>
                                <p>http://127.0.0.1:8000/model/polynomialregression/</p>
                                <p>http://127.0.0.1:8000/model/polynomialregression/predict</p>
                                <p>FileX and FileY : Training</p>
                                <p>FileX : Prediction</p>
                            </YellowCard>
                            <YellowCard heading={"Decission Tree Regression"}>
                                <p>http://127.0.0.1:8000/model/decissionregression/</p>
                                <p>http://127.0.0.1:8000/model/decissionregression/predict</p>
                                <p>FileX and FileY : Training</p>
                                <p>FileX : Prediction</p>
                            </YellowCard>
                        </div>
                    </div>

                    <div id='classification' className={styles.model}>
                        <h2 className='big-heading'>Classification Models</h2>
                        <div className={styles.modelGrid}>
                            <YellowCard heading={"Logistic Classifier"}>
                                <p>http://127.0.0.1:8000/model/logisiticclassifier/</p>
                                <p>http://127.0.0.1:8000/model/logisiticclassifier/predict</p>
                                <p>FileX and FileY : Training</p>
                                <p>FileX : Prediction</p>
                            </YellowCard>
                            <YellowCard heading={"KNN Classifier"}>
                                <p>http://127.0.0.1:8000/model/knnclassifier/</p>
                                <p>http://127.0.0.1:8000/model/knnclassifier/predict</p>
                                <p>FileX and FileY : Training</p>
                                <p>FileX : Prediction</p>
                            </YellowCard>
                            <YellowCard heading={"SVC Classifier"}>
                                <p>http://127.0.0.1:8000/model/svcclassifier/</p>
                                <p>http://127.0.0.1:8000/model/svcclassifier/predict</p>
                                <p>FileX and FileY : Training</p>
                                <p>FileX : Prediction</p>
                            </YellowCard>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainPage