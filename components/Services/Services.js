import styles from "./Services.module.css";

export default function Services(){
return(
<section className={styles.services}>

<div className={styles.top}>
<h2>
How can I assist you <br/>
with my skills
</h2>

<button>
See All Services ↗
</button>
</div>


<div className={styles.cards}>

<div className={styles.sideCard}>
<div className={styles.icon}>✦</div>

<h3>Frontend Development</h3>

<p>
Building responsive and interactive
web experiences.
</p>
</div>


<div className={styles.centerCard}>
<div className={styles.iconMain}>✦</div>

<h3>UI/UX Implementation</h3>

<p>
Turning designs into beautiful
usable interfaces.
</p>
</div>


<div className={styles.sideCard}>
<div className={styles.icon}>✦</div>

<h3>Web Applications</h3>

<p>
Developing full-stack applications
with scalable architecture.
</p>
</div>

</div>

</section>
)
}