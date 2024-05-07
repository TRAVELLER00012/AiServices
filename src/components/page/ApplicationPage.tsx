import Navigation from "../Navigation"
import ParticleBackground from "../ParticleBackground"
import styles from "../../styles/applicationPage.module.css"
import YellowBox from "../YellowBox"
import YellowCard from "../YellowCard"

const ApplicationPage = () => {
  return (
    <>
        <Navigation application={true} />
        <ParticleBackground />
        <div className={styles.heading}>
          <h1 className="big-heading">Application</h1>
          <h3 className={styles.subHeading}>Our website offers an API for accessing basic machine learning models, providing easy integration for developers. Built with React for the frontend and Django with scikit-learn for the backend, our platform supports both regression and classification models. Whether you're looking to predict trends or categorize data, our API simplifies the process, allowing users to leverage machine learning capabilities in their applications effortlessly. With a focus on simplicity and accessibility, we aim to empower developers with powerful machine learning tools.</h3>
        </div>
        <div className={styles.content}>
          <h1 className="big-heading">FAQs</h1>
          <YellowCard heading={"For Who Is It For?"}><p>This platform caters to developers seeking quick access to machine learning models for their projects. Whether you're a seasoned developer looking to streamline your workflow or a beginner eager to experiment with machine learning, our API provides a convenient solution. By offering a simple and intuitive interface, we aim to make machine learning accessible to developers of all skill levels. Whether you're building a predictive analytics tool or a recommendation system, our platform provides the tools you need to integrate machine learning into your applications seamlessly.</p></YellowCard>
          <YellowCard heading={"How to Use it?"}><p>This platform is designed for developers seeking quick access to machine learning models for their projects. To use the platform, developers must first register and log in to obtain a JWT token. Each regression model is described with its own endpoint. Developers can train a model by sending a POST request with a CSV file containing the training data. Similarly, for making predictions, developers can send another POST request with a CSV file containing the data for which predictions are needed. This straightforward process allows developers to easily integrate machine learning capabilities into their applications.</p></YellowCard>
        </div>
    </>
  )
}

export default ApplicationPage