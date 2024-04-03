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
          <div className={styles.contentSection}>

            <p className={styles.subtitle}>LOCACIÓN</p>
            <div className={styles.contactInfo}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4908106012235!2d-58.4446443!3d-34.5917485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb56bc74fc40d%3A0xde01271c180d65!2sValerie&#39;s%20Factory!5e0!3m2!1ses-419!2sar!4v1712180399625!5m2!1ses-419!2sar" style={{border: '0'}}width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  