import styles from "./Navbar.module.css";

export default function Navbar(){
return(
<nav className={styles.nav}>

<div className={styles.logo}>
AD.
</div>

<ul className={styles.menu}>
<li>Work</li>
<li>Philosophy</li>
<li>Contact</li>
</ul>

<button className={styles.cta}>
Let&apos;s Talk
</button>

</nav>
)
}