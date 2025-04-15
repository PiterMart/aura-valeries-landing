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
          <p className={styles.title}>Franco Palioff</p>

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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FfrancoPalioff%2FfrancopalioffObra.jpg?alt=media&token=1a3136d0-1057-4fa8-9ab8-1a9fd31b03cc"
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
            <p className={styles.subtitle}>Nacido en Junín, en 1988.</p>
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FfrancoPalioff%2FfrancopalioffCarnet.jpg?alt=media&token=ff9c5152-a221-48ad-aa81-85a9f7546fe9"
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
              A través de una estética grotesca oscura e intensa, las obras de Franco Palioff abordan narrativas y criaturas de otro mundo a través de imágenes, objetos, máquinas e instalaciones complejas intrincadas. Con formación en Ingeniería Nuclear, usa técnicas de programación, inteligencia artificial, robótica, pintura, escultura, dibujo y escultura y diseño 3D para componer imaginarios absurdos y enrevesados, y construir objetos robóticos con comportamientos inteligentes. Su práctica articula emociones percibidas a través de herramientas de visión artificial con reacciones robóticas, creando objetos con forma de productos ficticios para abrazar respuestas robóticas con algoritmos de teoría de juegos.
              <br></br>
              Sus exposiciones individuales incluyen First Hit en Erratum Gallery, Berlín (2022); Decode en Galería Airez en Curitiba, Brasil (2019). Franco también tiene exposiciones colectivas en Mendes Wood DM en Sao Paulo, Brasil, Bavan Gallery en Irán (2020 y 2021); Galería Valuart en Paradiso, Suiza (2021); Erratum Gallery y Open Studios Glogauair en Berlín, Alemania (2022); Lona Galeria y Casa de Criadores en Sao Paulo (2018 y 2020); La exposición Wrong en Brasil (2020); Kavro/ARTEBA (2022); Galería Gascón en Buenos Aires, Argentina (2022).

              </p>

            </motion.div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>

              <p>
              (2023) UIUIUI - Aura gallery, Buenos Aires.
              <br></br>
              (2022) FIRST HIT - Erratum Gallery, Berlin, Germany.
              <br></br>
              (2019) DECODE - Airez Gallery, Curitiba, Paraná, Brazil.
              <br></br>
              (2017) ARQUETIPOS - Museu de arte, CIC, Florianópolis, SC, Brazil.
              <br></br>
              (2016) MONTE - Nacasa, Florianópolis, Santa Catarina, Brazil.
              </p>

            </div>
            
            
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2022) Esfingico Frontal - Mendes Wood Gallery, São Paulo, Brazil. 
              <br></br>
              <br></br>
              (2022)Exhibition of 3D videos in process with funds from Ruanet in Brazil. 
              <br></br>
              <br></br>
              (2022) Open Studios Moos Vol 01 - Berlin, Germany.
              <br></br>
              <br></br>
              (2022) Random Kingdom Vol 01 - Berlin, Germany.
              <br></br>
              <br></br>
              (2021) RIP HEN - Curated by Jesse Drexler, Switzerland.
              <br></br>
              <br></br>
              (2021) Sameheads, solo show. Berlin, Germany.
              <br></br>
              <br></br>
              (2021) Open studios GlogauAIR - Berlin, Germany.
              <br></br>
              <br></br>
              (2021) Mid Fall Modied Dream, Erratum Gallery, Berlin, Germany
              <br></br>
              <br></br>
              (2021) Platform 101 vol 03 - Teheran, Iran.
              <br></br>
              <br></br>
              (2021) Open Studios Glogauair, Berlin, Germany.
              <br></br>
              <br></br>
              (2020) São Paulo fashion week at Casa de Criadores, Plasma project
              <br></br>
              <br></br>
              (2020) Algoritmia maquinica - Online - Galería O Sitio, Florianópolis, Brazil.
              <br></br>
              <br></br>
              (2020) O amanhã chegou mais cedo. Curitiba, Brazil. link
              <br></br>
              <br></br>
              (2020) Corpos Sintéticos - Synthetic bodies - Curitiba, Brazil.
              <br></br>
              <br></br>
              (2020) 101 Platform exhibition - Tehran, Rasht, and Shiraz, Irán.
              <br></br>
              <br></br>
              (2020) The Wrong exhibition  Laniakea  Curitiba, Paraná,Brazil.
              <br></br>
              <br></br>
              (2019) Intimo/estranho - Galeria Lona, São Paulo, Brazil
              <br></br>
              <br></br>
              (2019) Antes tarde Duke Nukem. Rio Janeiro, Brazil.
              <br></br>
              <br></br>
              (2019) Redoma exhibitor at dierent events.
              <br></br>
              <br></br>
              (2018) Conexão III exhibition - Centro Cultural Portão, Curitiba, Paraná.
              <br></br>
              <br></br>
              (2017) Feira de Arte do Solar do Barão - Curitiba, Paraná, Brazil.
              <br></br>
              <br></br>
              (2015) 7th entremostras - Fundação Badesc, Florianópolis, SC, Brazil.
              <br></br>
              <br></br>
              (2015) 5th entremostras - Fundação Badesc, Florianópolis, SC, Brazil.
              </p>

            </div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>COLABORACIONES</p>
              
              <p>
              (2020) Main developer of the Plasma project presented at São Paulo Fashion Week at Casa de Criadores, Brazil. The project aimed to develop digitalrun.
              <br></br>
              <br></br>
              (2020) Talk and Showcase about digital fashion and developent of 3D printable accesories at Brazil
              Immersive Fashion Week, São Paulo, Brazil.

              <br></br>
              <br></br>
              (2019) Hired by artist Jack Holmer as programmer for robot exhibited in Museu de Minas e do
              Metal in Belo Horizonte, Brazil. Development of articial vision techniques for robots.
              </p>

            </div>
            {/* <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/FRANCO PALIOFF.pdf" target="_blank">PDF</a>
            </div> */}
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="http://www.francopalioff.com/" target="_blank">Web</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  