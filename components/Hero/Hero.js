import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero(){
return(
<section className={styles.hero}>

<div className={styles.orb1}></div>
<div className={styles.orb2}></div>

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
Frontend Developer building modern
digital experiences.
</p>

<div className={styles.actions}>
<button className={styles.primary}>
View Projects
</button>

<button className={styles.secondary}>
Contact
</button>
</div>

</div>


<div className={styles.right}>
<Image
src="/images/aditya.png"
fill
alt="Aditya"
priority
/>
</div>

<div className={styles.connector}></div>
<div className={styles.greenStar}></div>
<div className={styles.purpleFlower}></div>

<div className={styles.squiggle}>
<svg viewBox="0 0 180 70">
<path
d="M5 55 C18 5 35 5 48 55
C61 5 78 5 91 55
C104 5 121 5 134 55
C147 5 164 5 175 55"
stroke="#D8A8FF"
strokeWidth="4"
fill="none"
/>
</svg>
</div>

</section>
)
}