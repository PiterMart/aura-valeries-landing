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
          <p className={styles.title}>  Sofia Castro</p>

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
                src="/artists/sofiacastroObra.jpg"
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
            <p className={styles.subtitle}>Nacida en Buenos Aires, en 1977.</p>
            <Image
                src="/artists/sofiacastroCarnet.jpg"
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
                A finales de los 90 comienza su carrera en el área del diseño gráfico y web. Trabaja y vive en Lisboa, Portugal. Se desempeña principalmente en el área de branding e identidad de marca, como también en diseño de páginas web e ilustraciones digitales.
                En 2005 se radica en Buenos Aires y comienza su práctica artística. Se forma en talleres de artistas y participa de clínicas de obra. Asiste a la beca de formación artística Yungas edición Buenos Aires. En sus inicios se enfoca en la pintura y luego incorpora a su obra instalaciones y objetos como también desarrolla el área textil.

                Hoy en día utiliza variadas técnicas para realizar sus obras, tanto pintura sobre tela o papel, acrílico y acuarela. Trabaja también varias piezas en textil y objetos con diferentes técnicas, como luz de neón de vidrio y metales (plata, bronce, oro) dependiendo de cada proyecto en particular.

                Inspirada en ídolos y pasiones, el trabajo de Sofía Castro refiere mayormente al deporte, sobretodo al fútbol, las celebridades, la política, el rock y la moda; abarcando mucho contenido de los años 90 y las particularidades de estos en la identidad argentina; resaltando así ciertos aspectos que trascienden en el tiempo y los límites.

              </p>

            </motion.div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ACADÉMICA</p>
              
              <p>
                (1997) Universidad de Palermo y cursa la carrera de Diseño Gráfico. 
              </p>

            </div>
            
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2022) "Mi Vereda" Museo Moderno de Buenos Aires. -Buenos Aires. 
              <br></br>
              <br></br>
              (2022) "Espejismos. Un ensayo sobre los '90". Fundación Cazadores - Buenos Aires
              <br></br>
              <br></br>
              (2021) "Cuul". Segunda edición.  Museo del Traje- Buenos Aires
              <br></br>
              <br></br>
              (2021) "Cuul". Segunda edición.  Museo del Traje- Buenos Aires
              <br></br>
              <br></br>
              (2021)  "Cuul". Tercera edición.  Museo del Traje- Buenos Aires
              <br></br>
              <br></br>
              (2021) ¨Yungas La Prensa¨  Casa de la cultura. - Buenos Aires
              <br></br>
              <br></br>
              (2020)  "Mi vereda" Primera edición. Curaduría Valeria Vilar - Buenos Aires
              <br></br>
              <br></br>
              (2020)  "Mi vereda" Primera edición. Curaduría Valeria Vilar - Buenos Aires
              <br></br>
              <br></br>
              (2018)  “Pensamiento Textil” Centro Cultural Ricardo Rojas - Buenos Aires
              <br></br>
              <br></br>
              (2018) “Infinito” Museo Judío - Buenos Aires
              <br></br>
              <br></br>
              (2017) 106 edición del Salón Nacional de Artes Visuales 2017 - Buenos Aires
              <br></br>
              <br></br>
              (2016) “Encuentro en conmemoración al 25 de noviembre, Día Internacional de la Eliminación de la Violencia contra la Mujer"  Espacio G104 - Buenos Aires
              </p>

            </div>
            {/* <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/SOFI CASTRO.pdf" target="_blank">PDF</a>
            </div> */}
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.instagram.com/sofiacastro_c/" target="_blank">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  