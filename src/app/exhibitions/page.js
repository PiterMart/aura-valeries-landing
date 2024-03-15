import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function Artists() {

    return (
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Exhibiciones</h1>

          <div className={styles.content}>
          <p className={styles.subtitle}>Los Patitos Feos</p>
            <Image
                src="/Flyer-Los Patitos Feos_6_1.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxWidth: '500px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
                alt="Picture of the author"
            />
            <Image
              src="/Flyer-Los Patitos Feos_6_2.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px', "overflow-clip-margin": 'content-box', objectFit: 'cover',  }}
              alt="Picture of the author"
            />

          </div>
        </div>
      </main>
    );
  }
  