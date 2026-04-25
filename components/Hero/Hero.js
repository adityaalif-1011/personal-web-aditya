import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero(){
return(
<section className={styles.hero}>

<div className={styles.left}>

<div className={styles.badge}>
Hi, I&apos;m Aditya 👋
</div>

<h1 className={styles.title}>
Build
<span>Your</span>
Digital
Experience
</h1>

<p>
Frontend Developer focused on building modern,
responsive web applications with clean code &
great design.
</p>

<div className={styles.actions}>
<button className={styles.primary}>
View Projects ↗
</button>

<button className={styles.secondary}>
Contact Me
</button>
</div>

</div>


<div className={styles.right}>
<Image
src="/images/aditya.png"
alt="aditya"
fill
priority
/>
</div>


<div className={styles.connector}></div>
<div className={styles.greenStar}></div>
<div className={styles.purpleFlower}></div>
<div className={styles.spark1}></div>
<div className={styles.spark2}></div>
<div className={styles.squiggle}></div>

</section>
)
}