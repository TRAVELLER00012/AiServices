import Navigation from '../Navigation'
import styles from "../../styles/servicePage.module.css"
import ParticleBackground from '../ParticleBackground'


const ServicePage = () => {
  return (
    <>
        <Navigation />
        <ParticleBackground />
        <div className={styles.heading}>
            <h1 className="big-heading">Services</h1>
            <h3 className={styles.subHeading}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis, ipsa, repellat, nesciunt facere culpa unde molestias at quam nihil quibusdam doloribus hic id necessitatibus optio explicabo illum! Culpa harum tenetur quod incidunt, aspernatur animi esse perspiciatis soluta, sit nesciunt dolorum recusandae repudiandae facilis inventore ducimus amet numquam eius nobis!</h3>
        </div>
        <div className={styles.manual}>
            <h1 className="big-heading">Manual</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta hic qui saepe sint rem dicta nulla libero temporibus! Facere possimus incidunt fuga eaque nemo exercitationem cum aperiam hic non ipsam delectus eum dolorum cumque necessitatibus veritatis, magnam culpa quae aspernatur magni asperiores sequi obcaecati soluta praesentium. Consequuntur exercitationem, illo repellat veniam modi odio nam laborum nihil pariatur eum, vero eius iusto sint cum ratione itaque qui dicta architecto rem numquam. Voluptate vero sunt molestiae error repudiandae, sed ad! Id expedita dicta quibusdam cumque ex, debitis iste soluta obcaecati inventore odio doloremque reprehenderit tenetur similique, atque adipisci? Earum blanditiis impedit asperiores.</p>
        </div>
    </>
  )
}

export default ServicePage