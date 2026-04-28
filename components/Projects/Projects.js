import styles from "./Projects.module.css";

export default function Projects(){
return(
<section className={styles.projects}>

<h2>
Selected Work
</h2>

<div className={styles.caseStudy}>

<div>
<span>01</span>
<h3>Lokanesia</h3>

<p>
Tourism discovery product.
</p>
</div>

<img src="/images/lokanesia.png"/>
</div>



<div className={styles.caseStudy}>

<div>
<span>02</span>
<h3>RSHP UNAIR</h3>

<p>
Healthcare platform.
</p>
</div>

<img src="/images/rshp.png"/>
</div>

</section>
)
}