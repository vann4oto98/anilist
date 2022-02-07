import styles from "../../styles/Layout.module.css";
import Meta from "./Meta";
import Nav from "./Nav";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta
        title="AniList"
        keywords={"anime"}
        description={"A place for all anime fans"}
      />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
