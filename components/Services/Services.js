import styles from "./Services.module.css";

export default function Services(){
return(
<section className={styles.services}>

<h2>How I Can Help</h2>

<div className={styles.cards}>
<div>
<h3>Frontend</h3>
<p>Responsive interfaces.</p>
</div>

<div>
<h3>UI Implementation</h3>
<p>Pixel perfect coding.</p>
</div>

<div>
<h3>Web Apps</h3>
<p>Scalable products.</p>
</div>
</div>

</section>
)
}