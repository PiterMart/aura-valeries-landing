"use client"
import styles from "../page.module.css";
import Image from "next/image";
import {motion, useScroll} from "framer-motion";
import React, { useEffect, useRef } from "react";


export default function Artists() {

  const element = useRef(null);
  const {scrollYProgress} = useScroll({
    target: element,
    offset: ['start end', 'start start']
  })

  useEffect( () => {
    scrollYProgress.on("change", e => console.log(e))
  }, [scrollYProgress])


    return (
      <main className={styles.main}>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
        transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 }
      }}>
        <div className={styles.artist}>

          <div className={styles.artistNav}>
          <p className={styles.title}>Frenetik Void</p>

            <div className={styles.artistList}>
              <ul>
                <li><a href="#obra">Obra</a></li>
                <li><a href="#bio">Biografía</a></li>
                <li><a href="#muestras">Muestras</a></li>
                <li><a href="#catalogo">Catálogo</a></li>
                <li><a href="#redes">Redes</a></li>
              </ul>
            </div>


          </div>
          <div className={styles.artistContent}>
            <div className={styles.artistSection} id="obra">    
              <Image
                src="/artists/frenetikvoidObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
                alt="Picture of the author"
              />
            </div>
            <motion.div className={styles.artistSection} id="bio"
            ref={element}
            style={{opacity: scrollYProgress}}
            >
            <p className={styles.subtitle}>Nacido en Buenos Aires, en 1994.</p>
            <Image
                src="/valeriesLogo.png"
                width={200}
                height={200}
                alt="Picture of the author"
                style={{ 'margin-bottom': '10px'}}
              />

            </motion.div>
            
            <motion.div className={styles.artistSection}
              style={{opacity: scrollYProgress}}
            >


              <p>
              Es un artista digital que trabaja con múltiples herramientas y tecnologías. Su relación con este medio comenzó desde chico con los videojuegos. La posibilidad de crear mundo dentro de mundos, lo inspiraron a crear su propio universo virtual. A través del 3D, el collage digital y la Inteligencia Artifical, Frenetik Void creó un amplio cuerpo de obra que fue exhibiendo a lo largo de los años en diversas galerías digitales.
              <br></br>
              A partir del 2019 se dedicó a explorar las incipientes plataformas de arte en la blockchain, lo que lo posicionó velozmente como un referente local de este medio. Sus obras se exhiben y comercializan en plataformas como Superrare, Foundation, Makersplace y KnownOrigin. 
              <br></br>
              En 2020 creó “CryptoArg” la comunidad de crypto artistas más grande de Latinoamérica con cuatro muestras en su haber. En 2021 creó junto a Milton Sanz y 0xeegeno “Game Disease” un proyecto de NFTs coleccionables con perspectiva transmedia. En 2023 inauguró Sereno de mi Mente”, su primer muestra individual en C.h.e.L.A y “Psipsi Koko” una muestra junto a Julian Brangold en Aura Galería. Su obra también se exhibió en diversas muestras grupales en Nueva York, París, Lisboa, Miami, México, San Pablo, Milán, Turín y Venecia.
              </p>

            </motion.div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>
              
              <p>
              (2023) Sereno de mi Mente - C.h.e.L.A / Buenos Aires
              <br></br>
              (2023) Psipsi Koko junto a Julián Brangold - Aura / Buenos Aires
              </p>

            </div>

            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2023) NFT Brasil - Pavilhao Bienal / San Pablo
              <br></br>
              (2023) Intertwined - Armazém Soul / Lisboa
              <br></br>
              (2023) Non Places - L’Atelier Éphémère / Paris
              <br></br>
              (2023) CryptoArg x Bright Moments  - Galería Güemes / Buenos Aires
              <br></br>
              (2022) Decentral Art Pavilion / Venecia
              <br></br>
              (2022) RIP HEN - Curated by Jesse Drexler, Switzerland.
              <br></br>
              (2022) Riesgo País - Newton Gallery / Nueva York
              <br></br>
              (2022) Italian Tech Week - OGR Torino  / Turin
              <br></br>
              (2022) Art Week Miami / Miami
              <br></br>
              (2022) Eth Latam - Centro de Convenciones / Buenos Aires
              <br></br>
              (2022) The Non NFT Summit - Prim / México DF
              <br></br>
              (2021) The Wrong Biennale - Museo della Permanente / Milan 
              <br></br>
              (2021) No Existe Tierra Más Allá - C.h.e.L.A / Buenos Aires
              </p>

            </div>
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/FRENETIK.pdf" target="_blank">PDF</a>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="http://Frenetikvoid.xyz" target="_blank">Web</a>
              <a href="https://www.instagram.com/frenetikvoid/" target="_blank">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  