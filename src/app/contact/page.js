import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function Artists() {

    return (
      <main className={styles.main}>
        <div className={styles.contact}>
          <div className={styles.contentSection}>

            <p className={styles.subtitle}>DIRECCIÓN ARTÍSTICA</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactInfo}>
                <p className={styles.subtitle}>
                  Xul Jan
                </p>
                <p>
                  xul@valeriesfactory.com
                </p>
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.subtitle}>
                  Jimena Nahuel Lusi
                </p>
                <p>
                  Jimena@valeriesfactory.com
                </p>
              </div>
            </div>
            </div>
          <div className={styles.contentSection}>
            <p className={styles.subtitle}>PRODUCCIÓN EJECUTIVA</p>
            <div className={styles.contactInfo}>
              <p className={styles.subtitle}>
                Sandro Guevara
              </p>
              <p>
                Sandro@valeriesfactory.com
              </p>
            </div>
          </div>
          <div className={styles.contentSection}>

            <p className={styles.subtitle}>PRODUCCIÓN ARTÍSTICA</p>
            <div className={styles.contactInfo}>
              <p className={styles.subtitle}>
                Lucia Ranzuglia
              </p>
              <p>
                lucia@valeriesfactory.com
              </p>
            </div>
          </div>
          <div className={styles.contentSection}>

            <p className={styles.subtitle}>COMUNICACIÓN</p>
            <div className={styles.contactInfo}>
              <p className={styles.subtitle}>
                Danila Nieto
              </p>
              <p>
                desiree@valeriesfactory.com
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  