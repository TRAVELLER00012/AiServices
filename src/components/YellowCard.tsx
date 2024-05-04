import { ReactNode } from "react"
import styles from "../styles/yellowCard.module.css"

interface Props{
    heading:ReactNode,
    children: ReactNode,
    readonly?  : boolean,
    fixedWidth? : boolean
}

const YellowCard = ({children,heading,readonly,fixedWidth} : Props) => {
  return (
    <div className={styles.box}>
        <div className={styles.heading}>
            <h1>{heading}</h1>
        </div>
        <div className={styles.description}>
            <p className={fixedWidth ? styles.fixedWidth : ""}>{children}</p>
        </div>
        {readonly && (
            <div className={styles.readMore}>
                <p>Read More</p>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill='#FF7000'><path d="M12 4c-.8.8-.8 2.1 0 2.8l3.2 3.2H4c-1.1 0-2 .9-2 2s.9 2 2 2h11.2L12 17.2c-.8.8-.8 2.1 0 2.8.8.8 2 .8 2.8 0l6.6-6.6c.4-.4.6-.9.6-1.4 0-.5-.2-1-.6-1.4L14.8 4c-.7-.8-2-.8-2.8 0z"></path></g></svg>
                </span>
            </div>
        )}
    </div>
  )
}

export default YellowCard