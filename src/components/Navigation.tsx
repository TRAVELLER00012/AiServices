import styles from '../styles/navigations.module.css'
import Logo from "../assets/images/ai.png"
import { useState } from 'react'
import YellowButton from './YellowButton'
const Navigation = () => {
    const [selectedItem,setSelectedItem] = useState({
        about: true,
        knowledge:false,
        service: false,
        pricing: false,
        contactus : false
    })
    return (
        <div className={styles.navigation}>
            <img src={Logo}/>
            <ul>
                <li className={selectedItem.about ? styles.selected : ""} onClick={() => setSelectedItem({
                    about:true,
                    contactus : false,
                    knowledge : false,
                    pricing : false,
                    service : false
                })}>About</li>

                <li className={selectedItem.knowledge ? styles.selected : ""} onClick={() => setSelectedItem({
                    about:false,
                    contactus : false,
                    knowledge : true,
                    pricing : false,
                    service : false
                })}>Knowledge</li>


                <li className={selectedItem.service ? styles.selected : ""} onClick={() => setSelectedItem({
                    about:false,
                    contactus : false,
                    knowledge : false,
                    pricing : false,
                    service : true
                })}>Service</li>

                <li className={selectedItem.pricing ? styles.selected : ""} onClick={() => setSelectedItem({
                    about:false,
                    contactus : false,
                    knowledge : false,
                    pricing : true,
                    service : false
                })}>Pricing</li>

                <li className={selectedItem.contactus ? styles.selected : ""} onClick={() => setSelectedItem({
                    about:false,
                    contactus : true,
                    knowledge : false,
                    pricing : false,
                    service : false
                })}>Contact Us</li>
            </ul>
            <YellowButton>Sign in</YellowButton>
        </div>
    )
}

export default Navigation