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
          <p className={styles.title}>Leonardo Sanchez</p>

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
                src="/leonardosanchezObra.jpg"
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
            <p className={styles.subtitle}>Nacido en Buenos Aires, en 1986.</p>
            <Image
                src="/leonardosanchezCarnet.png"
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
              A muy temprana edad se mudo a la provincia de San Juan donde se formó y desarrolló como artista visual y gestor cultural.
              Estudió Diseño Gráfico y Artes Visuales en la UNSJ. 
              <br></br>
              Realizó clínicas de formación con Carlos Herrera, Flavia Da Rin, Florencia Battitti y Roberto Echen. Participó en muestras colectivas en San Juan, Mendoza, Córdoba y Buenos Aires. 
              En 2020 se mudo a la Ciudad de Buenos Aires y participó del programa Artistas x Artistas de coordinado por Florencia Rodriguez Giles y Juan Tessi de Fundación El Mirador en Munar Arte
              </p>

            </motion.div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              Su producción visual está muy arraigada a las tradiciones clandestinas de la autoedición y la ideología pirata, trabaja con collages, pinturas, esculturas e instalaciones malditas. Propone un imaginario de fantasía horrorosa con cuerpos extraídos de revistas pornográficas, posters de películas de terror y publicidades de productos ya vencidos, generando atmósferas   y  personajes desfigurados, chorreantes y monstruosos  que evocan y ofrendan una tensión entre juicio y castigo, entre dios y súbdito, entre amo y esclavo, a partir de la repetición desfigurada de lo obsceno.
              </p>
            </div>
            
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2023) Programa de Formación MANGLAR coordinado por Andrés Labaké en Acéfala Galería.
              <br></br>
              (2022) Obtuvo el 2do premio adquisición del Premio Franklin Rawson. MPBA FR.
              <br></br>
              (2007 - 2019) participó en diferentes exposiciones y proyectos grupales de la escena artística sanjuanina.
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>

              <p>
              (2022) “En el nombre de nadie” su primera muestra individual con curaduría de Nicolás Cuello en Valerie Galería. 
              </p>

            </div>
            
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://cargocollective.com/LeonardoSanchez">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  