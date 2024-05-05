import { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import styles from "../styles/navigations.module.css"
import Logo from "../assets/images/ai.png"
interface NavigationStatus {
    services?: boolean,
    exampleCode?:boolean,
    settings?: boolean,
    contactus?: boolean
    
}

const MainPageNavBar = ({services,exampleCode,contactus,settings} : NavigationStatus) => {
    const [selectedItem,setSelectedItem] = useState({
        services,
        exampleCode,
        settings,
        contactus
    })

    return (
        <div className={styles.navigation}>
            <img src={Logo}/>
            <ul>
                <li className={selectedItem.services ? styles.selected : ""}>
                    <Link to={"/mainpage"}  onClick={() => setSelectedItem({
                        services:true,
                        contactus : false,
                        exampleCode : false,
                        settings : false
                    })}>Services</Link>
                </li>

                <li className={selectedItem.exampleCode ? styles.selected : ""}>
                    <Link to={"/mainpage#exampleCode"}  onClick={() => setSelectedItem({
                        services:false,
                        contactus : false,
                        exampleCode : true,
                        settings : false
                    })}>Example</Link>
                </li>

                <li className={selectedItem.settings ? styles.selected : ""}>
                    <Link to={"/mainpage/settings"} onClick={() => setSelectedItem({
                        services:false,
                        contactus : false,
                        exampleCode : false,
                        settings : true
                    })}>Settings</Link>
                </li>


                <li className={selectedItem.contactus ? styles.selected : ""}>
                    <Link to={"/contact"}  onClick={() => setSelectedItem({
                        services:false,
                        contactus : true,
                        exampleCode : false,
                        settings : false
                    })}>Contact Us
                    </Link>
                </li>
            </ul>
            <RegisterButton />
        </div>
    )
}

export default MainPageNavBar