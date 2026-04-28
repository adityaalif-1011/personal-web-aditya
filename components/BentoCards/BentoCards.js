import styles from "./BentoCards.module.css";

export default function BentoCards(){
return(
<section className={styles.wrapper}>

<div className={styles.waveWrap}>
<div className={styles.waveTrack}>
<span>✳ Next.js</span>
<span>✳ Laravel</span>
<span>✳ JavaScript</span>
<span>✳ UI</span>
<span>✳ Open Source</span>
</div>
</div>


<div className={styles.grid}>

<div>
<span className={styles.label}>Featured</span>
<h3>Frontend Engineering</h3>
<p>Modern interfaces with performance in mind.</p>
</div>

<div>
<span className={styles.label}>Stack</span>
<h3>Scalable Code</h3>
<p>Clean architecture.</p>
</div>

<div>
<span className={styles.label}>Building</span>
<h3>Digital Products</h3>
<p>Products with impact.</p>
</div>

</div>

</section>
)
}