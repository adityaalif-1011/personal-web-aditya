import styles from "./Navbar.module.css";

export default function Navbar() {
return(
<nav className={styles.nav}>

<div className={styles.logo}>
A<span>.</span>
</div>

<ul className={styles.menu}>
<li>ABOUT</li>
<li>PROJECTS</li>
<li>EXPERIENCE</li>
<li>SKILLS</li>
<li>BLOG</li>
<li>CONTACT</li>
</ul>

<button className={styles.cta}>
Let&apos;s Talk
<span>↗</span>
</button>

</nav>
)
}