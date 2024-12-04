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
        <div className={styles.content} style={{marginTop: '0px'}}>
        <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Pinta Miami 2024</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}> <Link href="./frenetikVoid">  Frenetik Void /</Link> <Link href="./trinidadmetzBarra">  Trinidad Metz Brea </Link></p>
                <p className={styles.subtitle}>Miami / 2024</p>
                <p className={styles.SUBTITLE} style={{paddingTop: '1rem'}}>CATALOG:</p>
                <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', marginTop: '1rem'}}>
                  <a href="/PINTAMIAMI_24_ESP_.pdf" target="_blank" className={styles.subtitle} style={{color: 'red',}}>{'>'} ESPAÑOL {'<'} </a>
                  <a href="/PINTAMIAMI_24_ENG_.pdf" target="_blank" className={styles.subtitle} style={{color: 'red',}}>{'>'} ENGLISH {'<'} </a>
                </div>
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/Valeries-PintaMiami_2024.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
              </div>             
            </div>
          </div>
        </div>
        </motion.div>
      </main>
    );
  }
  