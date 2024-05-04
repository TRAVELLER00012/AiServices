import styles from "../styles/about.module.css"
import YellowBox from "./YellowBox"
import YellowButton from "./YellowButton"
const About = () => {
  return (
    <div>
        <div className={styles.side}>
            <h1>Artificial Intelligence</h1>
        </div>
        <div className={styles.heading}>
            <h1 className="big-heading">
                The Future
            </h1>
            <h2>
            Transforming Tomorrow with Intelligent Innovation and Automation.
            </h2>
            <YellowButton>Explore More</YellowButton>
            <div className={styles.boxGrid}>
                <YellowBox heading="Machine Learning">Machine Learning is a subset of Artificial Intelligence, empowering computers to learn and improve performance without explicit programming, relying on data-driven algorithms for predictions and decision-making.</YellowBox>
                <YellowBox heading="Artificial Intelligence">Artificial Intelligence encompasses the creation of intelligent machines, mirroring human cognitive functions. It includes Machine Learning and broader applications such as natural language processing and problem-solving</YellowBox>
            </div>
        </div>
    </div>
  )
}

export default About