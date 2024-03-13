import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function Artists() {

    return (
      <main className={styles.main}>
        <div>
          <div className={styles.artistSection}>

            <p className={styles.subtitle}>DIRECCIÓN ARTÍSTICA</p>
            <p>
              Jimena Nahuel Lusi
            </p>
            <p>
              Xul Jan
            </p>
          </div>
          <div className={styles.artistSection}>

            <p className={styles.subtitle}>PRODUCCIÓN EJECUTIVA</p>
            <p>
              Sandro Guevara
            </p>
          </div>
          <div className={styles.artistSection}>

            <p className={styles.subtitle}>PRODUCCIÓN ARTÍSTICA</p>
            <p>
              Lucia Ranzuglia
            </p>
          </div>
          <div className={styles.artistSection}>

            <p className={styles.subtitle}>COMUNICACIÓN</p>
            <p>
              Danila Nieto
            </p>
          </div>
        </div>
      </main>
    );
  }
  