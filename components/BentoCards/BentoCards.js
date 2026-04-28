import styles from "./BentoCards.module.css";

export default function BentoCards(){
return(
<section className={styles.section}>

<h2 className={styles.headline}>
Design.
Code.
Clarity.
</h2>

<div className={styles.grid}>

<div className={`${styles.card} ${styles.hero}`}>
<h3>Building interfaces that feel alive.</h3>
<p>
Elegant frontend systems with motion and performance.
</p>
</div>

<div className={styles.card}>
<h4>Stack</h4>
<p>Next.js React Laravel</p>
</div>

<div className={styles.card}>
<h4>Focus</h4>
<p>UI Systems + Animation</p>
</div>

<div className={styles.card}>
<h4>Projects</h4>
<p>10+ Builds</p>
</div>

<div className={`${styles.card} ${styles.wide}`}>
<h3>Open for collaboration.</h3>
</div>

</div>

</section>
)
}