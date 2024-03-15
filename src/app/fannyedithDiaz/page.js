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
  }, [])


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
          <p className={styles.title}>Fanny Edith Diaz</p>

            <div className={styles.artistList}>
              <ul>
                <li><a href="#obra">Obra</a></li>
                <li><a href="#bio">Biografía</a></li>
                <li><a href="#statement">Statement</a></li>
                <li><a href="#muestras">Muestras</a></li>
                <li><a href="#catalogo">Catálogo</a></li>
                <li><a href="#redes">Redes</a></li>
              </ul>
            </div>


          </div>
          <div className={styles.artistContent}>
            <div className={styles.artistSection} id="obra">    
              <Image
                src="/fannyedithdiazObra.jpg"
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
            <p className={styles.subtitle}>Nacida en Guaymallén, Mendoza, en 1966.</p>
            <Image
                src="/fannyedithdiazCarnet.png"
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
                Estudió arte en Bellas Artes y en la Universidad Nacional de Cuyo, además de dedicar su vida a la experimentación del arte, de vivir entre sus obras e ideas, en viajes que le permitieron conocer profundamente la Argentina de norte a sur.
                Elige en este momento la pintura como medio de comunicación, como lenguaje para expresar  su mundo interno. Espiritualidad y el hacer como un gesto de libertad. 
                Además de ser artista, dirige junto a su esposo una empresa familiar dedicada a la construcción de viviendas. Tiene una marca de ropa llamada China, donde diseña y realiza prendas únicas, pintadas e intervenidas a mano, con una mirada sustentable dedicada al upcycling, trayendo al mundo prendas con conciencia e historia. 
                Es representada por Valerie’s Factory desde el año 2020 y ha participado en numerosas muestras colectivas. 
              </p>

            </motion.div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              Reconozco una fuerza tremenda que me invade, mi deseo e interés con los materiales es inquieto, las ideas se pueden contar de diferentes maneras y es en esa diversidad que me gusta materializar mi obra. Pinturas, dibujos, textiles y esculturas conviven en mi taller, se animan entre ellos. Hay en mis piezas hay una particular preocupación por el material como articulador de imágenes. El tejido que estas forman dejan a descubierto una preocupación sobre la vitalidad: sobre lo que significa tener vida, tener pasiones. Considero que la práctica artística es una oportunidad para actuar en el estar bien, sin importar lo que nos sucede o las acciones de las otras personas. Mi obra es un ensayo sobre la tranquilidad del ánimo, la ausencia de miedos y la libertad. 


              </p>
            </div>
            
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2023) “Natural”, Galeria Valeries Factory, ArteBA.
              <br></br>
              (2023) “Novias” curado por Jimena Lusi y Luis Juarez (Revista Balam), Barrakesh.
              <br></br>
              (2022) “Cómo debes imaginarme” curado por Lucia Nielsen, ECA Mendoza.
              <br></br>
              (2022) “SoldOut”, Galeria Valeries Factory, Feria Mapa.
              <br></br>
              (2021) “Playas paradisíacas, Talleres Brasil.
              <br></br>
              (2021) “Esperando como una pendeja”, Galeria Valeries Factory.
              </p>

            </div>
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  