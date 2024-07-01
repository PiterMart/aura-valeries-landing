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
          <p className={styles.title}>Vladimir Maruts Ballet</p>

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
                src="/artists/marutsballetObra.jpg"
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
            <p className={styles.subtitle}>Nacido en Buenos Aires, en 1985.</p>
            <Image
                src="/artists/vladimirmarutsCarnet.jpg"
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
              Se formó a comienzos del 2000 entre el graffiti, el punk y la exploración urbana. De formación autodidacta su cuerpo de obra abre una materialidad variada que abarca la pintura, los muros, la tapicería estilo bondi, lo digital (NFT’s), publicaciones impresas, artes de tapas y diferentes experimentaciones. En 2021 edita su primer publicación impresa “Ballet” junto a Bucle editorial, una revista donde muestra diversas composiciones digitales, de la cual ya lleva 2 ediciones. En 2022 comenzó a exponer en galerías. Sus obras pintadas combinan el uso de pincel, aerógrafo y aerosol. Su obra mezcla elementos de la cultura popular Argentina e Internacional, y vacilan entre lo Kitsch, Cute, ignorante y absurdo hasta un sentido más crítico, crudo, psicológico y esotérico.
              Actualmente reside en Buenos Aires, Argentina.

              </p>

            </motion.div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              Me motiva la búsqueda constante de nuevas formas de estética y de expresión, tratando de volcar en cada obra la naturaleza humana y alienada, propia y ajena en todos los sentidos. Intento describir de una forma visual tantos los mundos que me rodean como el universo psíquico. Algunas obras son absurdas, algunas fieles descripciones de la realidad y otras tienen un sentido crítico.
              </p>
            </div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>

              <p>
              (2023) “Papa Urbano 1” Solo show at Aura Fábrica Galería - Buenos Aires
              </p>

            </div>
            
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2022)  “HIJXS MAL HABIDXS" Galería CPU. Palacio Barolo  - Buenos Aires
              <br></br>
              <br></br>
              (2022) Aura at SP arte  - Sao Paulo
              <br></br>
              <br></br>
              (2022) Galería Vermeer - Aura - Buenos Aires
              <br></br>
              <br></br>
              (2022)  Publicación Ballet Edicion 2 - Bucle editorial - Rata Kiosko - Buenos Aires
              <br></br>
              <br></br>
              (2022) “Cute but Psycho” Galería Gazcon - Buenos Aires
              <br></br>
              <br></br>
              (2021) Publicación Ballet Edición 1 - Bucle editorial - Feria Migra - Buenos Aires
              </p>

            </div>
            
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/MARUTS.pdf" target="_blank">PDF</a>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.instagram.com/maruts_ballet/" target="_blank">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  