import Navigation from "../Navigation"
import ParticleBackground from "../ParticleBackground"
import styles from "../../styles/applicationPage.module.css"
import YellowBox from "../YellowBox"
import YellowCard from "../YellowCard"

const ApplicationPage = () => {
  return (
    <>
        <Navigation application={true} />
        <ParticleBackground />
        <div className={styles.heading}>
          <h1 className="big-heading">Application</h1>
          <h3 className={styles.subHeading}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias impedit iusto nihil, nostrum reprehenderit, vitae repellat, deleniti sequi perferendis dolorum neque culpa modi. Modi possimus vel est porro incidunt at nostrum iusto minus ullam veritatis ducimus quaerat, accusantium laborum explicabo, quae repellat nesciunt? Veniam labore ad id laboriosam magni.</h3>
        </div>
        <div className={styles.content}>
          <h1 className="big-heading">FAQs</h1>
          <YellowCard heading={"For Who Is It For?"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores soluta ab repudiandae distinctio temporibus, culpa quaerat similique enim minus repellendus fugit laboriosam labore quasi quos, dolores ullam sed. Facilis deleniti eum corrupti, eos, eaque illo illum recusandae qui eligendi explicabo dolor dolores numquam suscipit ducimus soluta earum voluptatem dignissimos nostrum accusamus consequatur. Dolore obcaecati, error minima voluptates, eaque incidunt iure magni, officia dolor omnis accusamus? Asperiores repellat unde rerum doloremque, perferendis, exercitationem, libero ex quam animi quaerat reprehenderit aliquid! Incidunt delectus reiciendis sed quos officiis? Ipsam voluptate dolorem ipsum. Accusantium eveniet tempora impedit rem dignissimos fuga repellendus, dicta ea!</p></YellowCard>
          <YellowCard heading={"How to Use it?"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores soluta ab repudiandae distinctio temporibus, culpa quaerat similique enim minus repellendus fugit laboriosam labore quasi quos, dolores ullam sed. Facilis deleniti eum corrupti, eos, eaque illo illum recusandae qui eligendi explicabo dolor dolores numquam suscipit ducimus soluta earum voluptatem dignissimos nostrum accusamus consequatur. Dolore obcaecati, error minima voluptates, eaque incidunt iure magni, officia dolor omnis accusamus? Asperiores repellat unde rerum doloremque, perferendis, exercitationem, libero ex quam animi quaerat reprehenderit aliquid! Incidunt delectus reiciendis sed quos officiis? Ipsam voluptate dolorem ipsum. Accusantium eveniet tempora impedit rem dignissimos fuga repellendus, dicta ea!</p></YellowCard>
          <YellowCard heading={"What Machine Learning Models Do We Support?"}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores soluta ab repudiandae distinctio temporibus, culpa quaerat similique enim minus repellendus fugit laboriosam labore quasi quos, dolores ullam sed. Facilis deleniti eum corrupti, eos, eaque illo illum recusandae qui eligendi explicabo dolor dolores numquam suscipit ducimus soluta earum voluptatem dignissimos nostrum accusamus consequatur. Dolore obcaecati, error minima voluptates, eaque incidunt iure magni, officia dolor omnis accusamus? Asperiores repellat unde rerum doloremque, perferendis, exercitationem, libero ex quam animi quaerat reprehenderit aliquid! Incidunt delectus reiciendis sed quos officiis? Ipsam voluptate dolorem ipsum. Accusantium eveniet tempora impedit rem dignissimos fuga repellendus, dicta ea!</p></YellowCard>
        </div>
    </>
  )
}

export default ApplicationPage