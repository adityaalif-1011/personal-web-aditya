import styles from "./CTA.module.css";

export default function CTA(){
return(
<section className={styles.cta}>

<div className={styles.blob}>

<span className={styles.tag}>
Let&apos;s Collaborate
</span>

<h2>
Have Any <br/>
Project In Mind?
</h2>

<p>
Let&apos;s build something meaningful,
modern and impactful together.
</p>

<div className={styles.actions}>
<button>
Start a Project ↗
</button>

<button className={styles.secondary}>
Contact Me
</button>
</div>

</div>

</section>
)
}