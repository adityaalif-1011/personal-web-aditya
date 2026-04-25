import styles from "./Projects.module.css";

export default function Projects(){
return(
<section className={styles.projects}>

<h2>
Let&apos;s take a look at some
of my featured projects
</h2>

<div className={styles.projectCard}>
<div className={styles.info}>
<span>FEATURED PROJECT</span>

<h3>Lokanesia</h3>

<p>
Tourism platform for local
exploration and discovery.
</p>

<div className={styles.buttons}>
<button>Live Demo</button>
<button>Case Study</button>
</div>

</div>

<div className={styles.preview}>
<img src="/images/lokanesia.png"/>
</div>
</div>



<div className={styles.projectCardReverse}>

<div className={styles.preview}>
<img src="/images/rshp.png"/>
</div>

<div className={styles.info}>
<h3>RSHP UNAIR</h3>

<p>
Health service platform with
appointment features.
</p>
</div>

</div>


</section>
)
}