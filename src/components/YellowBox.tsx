import { ReactNode } from "react"
import styles from "../styles/yellowBox.module.css"
interface Props{
  heading: ReactNode,
  children: ReactNode
}
const YellowBox = ({children,heading} : Props) => {
  return (
    <div className={styles.box}>
        <div className={styles.innerBox}>
            <h1>{heading}</h1>
            <p>{children}</p>
        </div>
    </div>
  )
}

export default YellowBox