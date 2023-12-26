import styles from "../styles/yellowButton.module.css"

interface Props{
    children: React.ReactNode
}
const YellowButton = ({children} : Props) => {
  return (
    <div className={styles.button}>{children}</div>
  )
}

export default YellowButton