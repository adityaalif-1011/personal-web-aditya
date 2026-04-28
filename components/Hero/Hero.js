import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero(){
return(
<section className={styles.hero}>

<div className={styles.blob1}></div>
<div className={styles.blob2}></div>


<div className={styles.left}>

<p className={styles.badge}>
Frontend Engineer
</p>

<h1 className={styles.title}>
Building
<span>Alive</span>
Interfaces
</h1>

<p className={styles.subtitle}>
Code, motion and product thinking.
</p>

<div className={styles.actions}>
<button>
View Work
</button>

<button className={styles.ghost}>
Contact
</button>
</div>

</div>



<div className={styles.right}>

<div className={styles.photoCard}>

<div className={styles.glow}></div>

<Image
src="/images/aditya.png"
alt="Aditya"
fill
priority
className={styles.photo}
/>

</div>

</div>

</section>
)
}