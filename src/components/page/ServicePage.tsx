import Navigation from '../Navigation'
import styles from "../../styles/servicePage.module.css"
import ParticleBackground from '../ParticleBackground'


const ServicePage = () => {
  return (
    <>
        <Navigation />
        <ParticleBackground />
        <div className={styles.heading}>
            <h1 className="big-heading">Services</h1>
            <h3 className={styles.subHeading}>Our service offers a user-friendly API for accessing simple machine learning models, catering to developers who want to integrate machine learning into their applications with ease. By utilizing our platform, developers can quickly train and deploy regression and classification models, streamlining the development process. Our API provides clear documentation and intuitive endpoints, making it simple to integrate machine learning functionality into a wide range of projects. Whether you're a seasoned developer or new to machine learning, our platform empowers you to leverage the power of AI in your applications effortlessly.</h3>
        </div>
        <div className={styles.manual}>
            <h1 className="big-heading">Manual</h1>
            <p>Our manual provides comprehensive guidance on using our platform's API to access and utilize machine learning models. It includes step-by-step instructions for registering, logging in, and obtaining a JWT token for authentication. Additionally, the manual details the available regression models, their endpoints, and how to train and make predictions using these models. We also provide tips for preparing and formatting the CSV files required for training and prediction. Whether you're a novice or an experienced developer, our manual serves as a valuable resource for effectively harnessing the power of machine learning in your projects.</p>
        </div>
    </>
  )
}

export default ServicePage