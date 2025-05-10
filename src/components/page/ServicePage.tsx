import Navigation from '../Navigation'
import styles from "../../styles/servicePage.module.css"
import ParticleBackground from '../ParticleBackground'


const ServicePage = () => {
  return (
    <>
        <Navigation />
        <ParticleBackground />
        <div className={styles.heading}>
            <h1 className="big-heading">Service</h1>
            <h3 className={styles.subHeading}>Our service offers a user-friendly API for accessing simple machine learning models, catering to developers who want to integrate machine learning into their applications with ease. By utilizing our platform, developers can quickly train and deploy regression and classification models, streamlining the development process. Our API provides clear documentation and intuitive endpoints, making it simple to integrate machine learning functionality into a wide range of projects. Whether you're a seasoned developer or new to machine learning, our platform empowers you to leverage the power of AI in your applications effortlessly.</h3>
        </div>
    </>
  )
}

export default ServicePage