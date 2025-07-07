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
                {/* <li><a href="#catalogo">Catálogo</a></li> */}
                <li><a href="#redes">Redes</a></li>
              </ul>
            </div>


          </div>
          <div className={styles.artistContent}>
            <div className={styles.artistSection} id="obra">    
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FfrenetikVoid%2FfrenetikvoidObra.jpg?alt=media&token=1a198362-c070-4e47-a703-c3d4595f4751"
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
            <p className={styles.subtitle}>Franco Verrascina nace en Buenos Aires, en 1994.</p>
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
              Su relación con la tecnología comenzó en la infancia a través de los videojuegos. La posibilidad de crear mundos dentro de mundos lo inspiró a desarrollar su propio universo visual, combinando softwares de 3D, edición digital e inteligencia artificial. Su universo se nutre de un imaginario surrealista, configurado por simulaciones y experiencias virtuales.
              <br></br>
              <br></br>
              Bajo el seudónimo de “Frenetik Void” desarrolló un amplio cuerpo de obra digital que ha sido exhibida en diversos espacios alrededor del mundo como Museo della Permanente, (Mián) Palacio Giustinian Lolin (Venecia) Pavilhao Bienal (San Pablo) OGR Torino (Turin) y Newton Gallery (Nueva York). 
              <br></br>
              <br></br>
              En 2019, comenzó a experimentar con las incipientes plataformas de arte en la blockchain, posicionándose rápidamente como un referente del criptoarte. Sus obras se han exhibido y comercializado en plataformas de NFTs como SuperRare, Foundation, MakersPlace y KnownOrigin, entre otras. Además fue exhibida en bienales como The Iconic Biennale y The Wrong Digital Biennale.
              <br></br>
              <br></br>
              A lo largo de su carrera creó diversos proyectos colectivos como Magma, un ciclo de muestras para estudiantes de la carrera de Imagen y Sonido, CryptoArg, la comunidad de criptoartistas más grande de Latinoamérica, Psipsikoko, un proyecto híbrido digital/instalativo y Game Disease, un proyecto de NFTs coleccionables con perspectiva transmedia.
              <br></br>
              <br></br>
              En 2023, inauguró Sereno de mi Mente, su primera muestra individual en cheLA. En 2024 presentó Para Editar, muestra individual en Valerie’s Factory curada por Carlos Huffmann que marcó su transición del arte digital al físico. Asimismo participó en muestras colectivas como Los Patitos Feos y Memética, ambas en Valerie’s Factory.
              <br></br>
              <br></br>
              Actualmente continúa investigando formas de enlazar su obra digital a formatos físicos. 
              </p>

            </motion.div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>
              
              <p>
              Para Editar, curada por Carlos Huffmann, Valerie’s Factory (Buenos Aires, 2024)
              <br></br>
              <br></br>
              Psipsikoko junto a Julián Brangold, RnA Studio (Lisboa, 2024)
              <br></br>
              <br></br>
              Sereno de mi Mente, cheLA  (Buenos Aires, 2023)
              <br></br>
              <br></br>
              Psipsikoko junto a Julián Brangold, Valerie’s Factory (Buenos Aires, 2023)
              </p>

            </div>

            <div className={styles.artistSection}>

             <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
             
             <p>
               (2024) Los Patitos Feos - Valerie’s Factory / Buenos Aires
               <br></br>
               <br></br>
               (2024) Memética - Valerie’s Factory / Buenos Aires
               <br></br>
               <br></br>
               (2023) NFT Brasil - Pavilhao Bienal / San Pablo
               <br></br>
               <br></br>
               (2023) Intertwined - Armazém Soul / Lisboa
               <br></br>
               <br></br>
               (2023) Non Places - L’Atelier Éphémère / Paris
               <br></br>
               <br></br>
               (2023) Boca+Arte - Centro Cultural San Martín / Buenos Aires
               <br></br>
               <br></br>
               (2023) CryptoArg x Bright Moments  - Galería Güemes / Buenos Aires
               <br></br>
               <br></br>
               (2022) Decentral Art Pavilion - Palazzo Giustinian Lolin / Venecia
               <br></br>
               <br></br>
               (2022) RIP HEN - Curated by Jesse Drexler, Switzerland.
               <br></br>
               <br></br>
               (2022) Riesgo País - Newton Gallery / Nueva York
               <br></br>
               <br></br>
               (2022) Italian Tech Week - OGR Torino  / Turin
               <br></br>
               <br></br>
               (2022) Art Week Miami / Miami
               <br></br>
               <br></br>
               (2022) Eth Latam - Centro de Convenciones / Buenos Aires
               <br></br>
               <br></br>
               (2022) The Non NFT Summit - Prim / México DF
               <br></br>
               <br></br>
               (2021) The Wrong Biennale - Museo della Permanente / Milan 
               <br></br>
               <br></br>
               (2021) No Existe Tierra Más Allá - C.h.e.L.A / Buenos Aires
               <br></br>
               <br></br>
               (2021) CryptoArg x MOCA - Decentraland / Digital
               <br></br>
               <br></br>
               (2020) CAOS - CryptoArg - CryptoVoxels / Digital
               <br></br>
               <br></br>
               (2019) The Wrong Biennale / Digital
               <br></br>
               <br></br>
               (2019) Obscure Distortion - Espacio Byte / Digital
               <br></br>
               <br></br>
               (2018) The Wrong Biennale - Mutant Club / Digital
               <br></br>
               <br></br>
               (2017) Iconic Digital Art Biennale / Digital
               </p>

           </div>
            {/* <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/FRENETIK.pdf" target="_blank">PDF</a>
            </div> */}
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
  