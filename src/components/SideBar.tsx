
import styles from "../styles/sideBar.module.css"


interface SideBar{
    items : {itemName:string,itemLink:string}[],
}

const SideBar = ({items}:SideBar) => {
  return (
    <>
        <div className={styles.sideBar}>
            <ul>
                {items.map(item =>(
                    <li><a href={item.itemLink}>{item.itemName}</a></li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default SideBar