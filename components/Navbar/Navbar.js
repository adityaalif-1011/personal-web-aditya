import styles from "./Navbar.module.css";

export default function Navbar(){
return(
<nav className={styles.nav}>

<div className={styles.logo}>
A<span>.</span>
</div>

<ul className={styles.menu}>
<li>About</li>
<li>Projects</li>
<li>Skills</li>
<li>Contact</li>
</ul>

<button className={styles.cta}>
Let&apos;s Talk
<span>↗</span>
</button>

</nav>
)
}