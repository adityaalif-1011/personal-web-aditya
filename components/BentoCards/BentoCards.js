import styles from "./BentoCards.module.css";

export default function BentoCards() {
return (
<section className={styles.section}>

<div className={styles.grid}>

{/* Hero Card */}
<div className={`${styles.card} ${styles.hero}`}>
<div className={styles.orb}></div>

<span className={styles.eyebrow}>
About Me
</span>

<h2 className={styles.heroTitle}>
Crafting Digital
Experiences With
Precision.
</h2>

<p className={styles.desc}>
Frontend engineer focused on elegant interfaces,
motion and performance.
</p>

<button className={styles.glassBtn}>
More About Me →
</button>

</div>



{/* Stack */}
<div className={styles.card}>

<span className={styles.eyebrow}>
Tech Stack
</span>

<h3>
Modern tools
for modern web
</h3>

<div className={styles.tags}>
<span>Next.js</span>
<span>React</span>
<span>Laravel</span>
<span>UI</span>
</div>

</div>



{/* Focus */}
<div className={styles.card}>

<span className={styles.eyebrow}>
Focus
</span>

<h3>
Design Systems,
Animation &
Performance
</h3>

</div>



{/* Experience */}
<div className={styles.card}>

<span className={styles.eyebrow}>
Experience
</span>

<h3>
2+ Years Building
</h3>

<div className={styles.graph}>
<div></div>
<div></div>
<div></div>
<div></div>
</div>

</div>



{/* CTA */}
<div className={`${styles.card} ${styles.wide}`}>

<div className={styles.orbTwo}></div>

<span className={styles.eyebrow}>
Open For Work
</span>

<h3>
Available for
collaboration.
</h3>

<button className={styles.glassBtn}>
Get in Touch →
</button>

</div>

</div>

</section>
)
}