import styles from '../styles/navigations.module.css'
import Logo from "../assets/images/ai.png"
import { useState } from 'react'
import YellowButton from './YellowButton'
import { Link } from 'react-router-dom'

interface NavigationStatus {
    about?: boolean,
    application?:boolean,
    service?: boolean,
    pricing?: boolean,
    contactus?: boolean
    
}

const Navigation = ({about,contactus,application,service}:NavigationStatus) => {
    const [selectedItem,setSelectedItem] = useState({
        about,
        application,
        service,
        contactus
    })
    return (
        <div className={styles.navigation}>
            <img src={Logo}/>
            <ul>
                <li className={selectedItem.about ? styles.selected : ""}>
                    <Link to={"/"}  onClick={() => setSelectedItem({
                        about:true,
                        contactus : false,
                        application : false,
                        service : false
                    })}>About</Link>
                </li>

                <li className={selectedItem.application ? styles.selected : ""}>
                    <Link to={"/application"}  onClick={() => setSelectedItem({
                        about:false,
                        contactus : false,
                        application : true,
                        service : false
                    })}>Application</Link>
                </li>

                <li className={selectedItem.service ? styles.selected : ""}>
                    <Link to={"/service"} onClick={() => setSelectedItem({
                        about:false,
                        contactus : false,
                        application : false,
                        service : true
                    })}>Service</Link>
                </li>


                <li className={selectedItem.contactus ? styles.selected : ""} onClick={() => setSelectedItem({
                    about:false,
                    contactus : true,
                    application : false,
                    service : false
                })}>Contact Us</li>
            </ul>
            <YellowButton>Sign in</YellowButton>
        </div>
    )
}

export default Navigation