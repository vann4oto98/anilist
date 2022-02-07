import Link from "next/link";
import styles from "../../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">
            <h1 style={{ cursor: "pointer" }}>
              <span className={styles.title}>Ani</span>List
            </h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
