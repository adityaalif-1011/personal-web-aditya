import styles from "./BentoCards.module.css";

export default function BentoCards(){
return(
<section className={styles.wrapper}>

<div className={styles.waveWrap}>
<div className={styles.waveTrack}>
<span>✦ Next.js</span>
<span>✦ Laravel</span>
<span>✦ JavaScript</span>
<span>✦ UI Engineer</span>
<span>✦ Problem Solver</span>
<span>✦ Open Source</span>

<span>✦ Next.js</span>
<span>✦ Laravel</span>
<span>✦ JavaScript</span>
</div>
</div>

<div className={styles.grid}>

<div className={styles.cardPurple}>
<span className={styles.label}>What I Do</span>
<h3>Frontend Developer</h3>
<p>
Building modern interfaces using
Next.js, React and scalable UI.
</p>
</div>

<div className={styles.cardPink}>
<span className={styles.label}>Tech Stack</span>
<h3>Clean & Scalable Code</h3>
<p>
Maintainable code for better
performance and experience.
</p>
</div>

<div className={styles.cardGreen}>
<span className={styles.label}>Currently Building</span>
<h3>Digital Products That Matter</h3>
<p>
Exploring ideas and turning them
into useful digital products.
</p>
</div>

</div>

</section>
)
}