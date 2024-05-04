import Navigation from '../Navigation'
import ParticleBackground from '../ParticleBackground'
import styles from "../../styles/contact.module.css"

const ContactUsPage = () => {
  return (
    <>
        <Navigation />
        <ParticleBackground />
        <h1 className="big-heading">Contact Us</h1>
        <form className={styles.contactUsForm}>
            <div className="grid-1x2">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
            </div>
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Subject'/>
            <textarea placeholder='Body'></textarea>
            <div className="grid-1x2">
                <button>Submit</button>
                <button>Reset</button>
            </div>
        </form>
    </>
  )
}

export default ContactUsPage