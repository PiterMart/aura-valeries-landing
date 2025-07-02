"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {motion} from 'framer-motion';


export default function Home() {
  return (
    
    <main className={styles.main}>

      <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 }
      }}>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/valeriesLogo2VERDE.png"
            alt="Valeries factory"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
          />
        </div>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0', pointerEvents: 'none', }}>
          <source src="/auravaleries bloon heart green0026_1.mp4" />
        </video>
      </motion.div>
    </main>
  );
}
