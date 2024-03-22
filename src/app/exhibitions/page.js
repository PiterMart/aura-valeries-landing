'use client'
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import {motion} from 'framer-motion';


export default function Artists() {

    return (
      <main className={styles.main}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
        transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 }
        }}>
        <div className={styles.exhibitions}>
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
          <div className={styles.content}>
          <a href="/Los_Patitos_Feos.pdf" target="_blank">PDF</a>
          </div>
        </div>

        </motion.div>
      </main>
    );
  }
  