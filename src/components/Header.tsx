import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Ani</span>List
      </h1>
      <p style={{ textAlign: "center" }}>All the anime in one place</p>
    </div>
  );
};

export default Header;
