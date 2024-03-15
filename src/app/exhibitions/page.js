import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function Artists() {

    return (
      <main className={styles.main}>
        <video autoPlay muted loop style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', display:
        'block', right: '0', bottom: '0'}}>
        <source src="/auravaleries bloon heart0001_H.264_H.264.mp4" />
      </video>
        <div>
          <h1 className={styles.title}>Exhibiciones</h1>

          <div className={styles.content}>
          <p className={styles.subtitle}>Los Patitos Feos</p>
            <Image
                src="/Flyer-Los Patitos Feos_6_1.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxWidth: '500px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                alt="Picture of the author"
            />
            <Image
              src="/Flyer-Los Patitos Feos_6_2.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
              alt="Picture of the author"
            />

          </div>
        </div>
      </main>
    );
  }
  