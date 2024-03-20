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
          <p className={styles.title}>Elias Leiro</p>

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
                src="/eliasleiroObra.JPG"
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
            <p className={styles.subtitle}>Nacido en Buenos Aires, en 1995.</p>
            <Image
                src="/eliasleiroCarnet.png"
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
              Elías Leiro es un artista visual e historiador del arte. Su práctica artística inició en la fotografía para luego extenderse hacia video, pintura, instalación y escritura.
              <br></br>
              Su producción se desarrolla a partir de la observación de objetos cotidianos y sencillos que conviven de forma desjerarquizada junto a imágenes vinculadas a la cultura pop, internet y a la historia del arte. Las fotografías tomadas con celular dialogan con screenshots que el artista acumula sin ningún tipo de orden en su computadora y celular. La elección de los diferentes materiales que conforman la obra es intuitiva. La aleatoriedad es parte de su proceso y el resultado final no está planeado de antemano. 
              <br></br>
              Define su poética como realista. Está interesado en la composición de imágenes en el presente y en las diferentes capas de representación que constituyen la experiencia. Elías miras las escenas cotidianas con humor y asombro. Desde una tendencia casualista piensa a la realidad como una serie de hechos azarosos que mediante la ficción y la narración adquieren sentido. 

              </p>

            </motion.div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ACADÉMICA</p>
              
              <p>
              Graduado como Licenciado en Artes con orientación en Artes Visuales, Facultad de Filosofía y Letras, Universidad de Buenos Aires 
              </p>

            </div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
                Una botella de agua, el vidrio estallado de un auto, medias, gotas condensadas en un vaso de agua, cartas coleccionables, naturalezas muertas o la pantalla destrozada de un celular son algunos de los objetos que aparecen en sus obras. Elías construye un orden personal y frágil de su entorno. Además de fotografiar eventos y cosas de su espacio íntimo, traza un retrato de época enmarcado por el tiempo presente y preocupaciones contemporáneas.

                Quiere hacer obras en las que no pase nada, que sean como la vida. Despertarse, comer, hacer las compras, leer, comer, leer otra vez, volver a hacer compras y dormir. Todavía no lo logra. 

              </p>
            </div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>

              <p>
              (2023) “Normcore”, Valeries.
              </p>

            </div>
            
            <div className={styles.artistSection} >

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2022) “Programa de video”, curado por Lolo y Lauti, ArteBA 
              <br></br>
              (2022) “Y ahora, ¿qué hacemos?”, muestra de La Bienal de Arte Joven de Buenos Aires, curada por Tainá Azeredo, Centro Cultural Recoleta.
              <br></br>
              (2022) “Ciertos Destellos” curada para Carlos Herrera, Alianza Francesa de Buenos Aires.
              <br></br>
              (2022)  “Cómo debes imaginarme” curado por Lucia Nielsen, ECA Mendoza.
              <br></br>
              (2021)  “Muestra Final MUNAR”, Munar.
              <br></br>
              (2021)  “Full Feng Shui”, curada por el artista.
              </p>

            </div>
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/ELIAS.pdf" target="_blank">PDF</a>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://instagram.com/eliasleiro" target="_blank">Instagram</a>
              <a href="https://vimeo.com/eliasleiro" target="_blank">Vimeo</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  