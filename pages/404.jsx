import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <h1 className="heading">Página no encontrada</h1>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
