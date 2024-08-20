import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
return (
<main>
<header className={styles.header}>
<div>
<h1>
<span>
Hello
<span className={styles.yellowText}>.</span>
</span>
<br />
<span>
 <span>I am</span>
</span>
<br />
<span>Estefan Fergusson</span>
</h1>
</div>
</header>
<section className={styles.infoSection}>
<div className={styles.infoContainer}>
<span className={styles.title + "" + styles.yellowText}>Estefan</span>
<br />
<span className={styles.title}>Fergusson</span>
<div className={styles.list}>
<ul>
<li>
<span className={styles.grayText}>Edad: </span> 16
</li>
<li>
<span className={styles.grayText}>Nacionalidad: </span> Peruano
</li>
<li>
<span className={styles.grayText}>Habilidades: </span> Dormir
</li>
<li>
<span className={styles.grayText}>Idiomas: </span> Ingles y Español
</li>
</ul>
</div>
</div>
</section>
<section className={styles.infoSection}>
  <img
  src="/image.jpg"
  alt="Imagen"
  className={styles.image}
  />
</section>
</main>
);
}