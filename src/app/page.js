import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <video autoPlay muted loop style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', display:
        'block', right: '0', bottom: '0'}}>
        <source src="/auravaleries bloon heart0001_H.264_H.264.mp4" />
      </video>
      
      {/* <Image
          src="/testbloon.png"
          layout="fill"
          sizes="100vw"
          style={{ zIndex: '-100', objectFit: 'cover' }}
        /> */}

      <div className={styles.center}>

        <Image
          className={styles.logo}
          src="/valeriesLogo2.png"
          alt="Valeries factory"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
        />
      </div>
    </main>
  );
}
