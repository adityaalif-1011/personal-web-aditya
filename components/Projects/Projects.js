import styles from "./Projects.module.css";

export default function Projects(){
return(
<section className={styles.projects}>

<h2>Selected Projects</h2>

<div className={styles.project}>
<div>
<h3>Lokanesia</h3>
<p>Tourism platform</p>
</div>

<img src="/images/lokanesia.png"/>
</div>


<div className={styles.project}>
<div>
<h3>RSHP UNAIR</h3>
<p>Healthcare platform</p>
</div>

<img src="/images/rshp.png"/>
</div>

</section>
)
}