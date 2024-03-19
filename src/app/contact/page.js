"use client"
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
        <div className={styles.contact}>
          <div className={styles.contentSection} style={{border: '0px'}}>

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
                  jimena@valeriesfactory.com
                </p>
              </div>
              <div className={styles.contactInfo}>
                <p className={styles.subtitle}>
                  Sandro Guevara
                </p>
                <p>
                  sandro@valeriesfactory.com
                </p>
              </div>
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
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', right: '0', bottom: '0' , pointerEvents: 'none'}}>
          <source src="/auravaleries bloon heart0001_H.264_H.264.mp4" />
        </video>
      </motion.div>
      </main>
    );
  }
  