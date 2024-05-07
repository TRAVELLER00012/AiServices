import { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import styles from "../styles/navigations.module.css"
import Logo from "../assets/images/ai.png"
interface NavigationStatus {
    services?: boolean,
    exampleCode?:boolean,
    contactus?: boolean
    
}

const MainPageNavBar = ({services,exampleCode,contactus} : NavigationStatus) => {
    const [selectedItem,setSelectedItem] = useState({
        services,
        exampleCode,
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
                    })}>Services</Link>
                </li>

                {/* <li className={selectedItem.exampleCode ? styles.selected : ""}>
                    <Link to={"/mainpage#exampleCode"}  onClick={() => setSelectedItem({
                        services:false,
                        contactus : false,
                        exampleCode : true,
                    })}>Example</Link>
                </li> */}

                {/* <li className={selectedItem.contactus ? styles.selected : ""}>
                    <Link to={"/contact"}  onClick={() => setSelectedItem({
                        services:false,
                        contactus : true,
                        exampleCode : false,
                    })}>Contact Us
                    </Link>
                </li> */}
            </ul>
            <RegisterButton />
        </div>
    )
}

export default MainPageNavBar