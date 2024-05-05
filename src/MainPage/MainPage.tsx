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
            <div className={styles.main}>
                <SideBar items={[{itemLink:"#regression",itemName:"Regression"},{itemName:"Classification",itemLink:"#classification"}]}/>
                <div className={styles.mainPage}>
                    <h1 className='big-heading'>Models</h1>

                    <div id='regression' className={styles.model}>
                        <h2 className='big-heading'>Regression Models</h2>
                        <div className={styles.modelGrid}>
                            <YellowCard heading={"Linear Regression"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora. Unde maiores repellat ducimus corrupti sint, quas sunt ad. Optio nemo quas libero provident iusto.</p></YellowCard>
                            <YellowCard heading={"Linear Regression"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora. Unde maiores repellat ducimus corrupti sint, quas sunt ad. Optio nemo quas libero provident iusto.</p></YellowCard>
                            <YellowCard heading={"Linear Regression"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora. Unde maiores repellat ducimus corrupti sint, quas sunt ad. Optio nemo quas libero provident iusto.</p></YellowCard>
                        </div>
                    </div>

                    <div id='classification' className={styles.model}>
                        <h2 className='big-heading'>Classification Models</h2>
                        <div className={styles.modelGrid}>
                            <YellowCard heading={"Linear Regression"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora. Unde maiores repellat ducimus corrupti sint, quas sunt ad. Optio nemo quas libero provident iusto.</p></YellowCard>
                            <YellowCard heading={"Linear Regression"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora. Unde maiores repellat ducimus corrupti sint, quas sunt ad. Optio nemo quas libero provident iusto.</p></YellowCard>
                            <YellowCard heading={"Linear Regression"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora. Unde maiores repellat ducimus corrupti sint, quas sunt ad. Optio nemo quas libero provident iusto.</p></YellowCard>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainPage