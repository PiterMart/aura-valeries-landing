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
          <p className={styles.title}>Alvaro Godoy</p>

            <div className={styles.artistList}>
              <ul>
                <li><a href="#obra">Obra</a></li>
                <li><a href="#bio">Biografía</a></li>
                <li><a href="#statement">Statement</a></li>
                <li><a href="#muestras">Muestras</a></li>
                {/* <li><a href="#catalogo">Catálogo</a></li> */}
                {/* <li><a href="#redes">Redes</a></li> */}
              </ul>
            </div>


          </div>
          <div className={styles.artistContent}>
            <div className={styles.artistSection} id="obra">    
              <Image
                src="/artists/alvarogodoyObra.jpg"
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
            <p className={styles.subtitle}>Nacido en Buenos Aires, en 1994. </p>
            <Image
                src="/alvarogodoyCarnet.jpg"
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
                Alvaro Godoy de pequeño miraba "El banquete telemático" de Federico Kleem sin tener idea de qué se trataba; el excéntrico hombre rubio le resultaba interesante, explicaba cosas que no estaban en Discovery Channel. Hizo la primaria en seis colegios, escuchaba discos de heavy metal de su madre y jugaba mucho solo.
                A los 17 años alquiló su primer taller en una casa tomada por un punk que los jueves hacía fiestas sadomasoquistas. El taller es para él como un laboratorio: un espacio donde las posibilidades se amplían, un lugar con las condiciones necesarias para que algo especial suceda. Ese algo en su caso es variado, pero íntimamente relacionado.
                Actualmente vive y trabaja en la Ciudad Autónoma de Buenos Aires.
                Su forma de avanzar sobre el conocimiento es intuitiva y accidentada. Considera el accidente como una parte esencial de su obra y  algo que le seduce en la de los demás. Intercala investigaciones personales con clases, clínicas y talleres. Adorador de internet y su infinito sustento de memes e hipervínculos, parte de su obra, como la vida, sucede en el plano digital. Él piensa que su obra se sitúa en cierto punto de contacto entre estos dos planos.
              </p>

            </motion.div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              En mis obras confluyen el dibujo, la pintura, la escultura, la música, la programación y la biología. Me interesan los límites de las técnicas, los puntos en que una se transforma en otra y las combinaciones que pueden surgir entre ellas. Trabajo bajo la premisa de la existencia de otros mundos, de que la materia posee infinitas formas de organizarse y que las formas que actualmente vemos, conocemos, olemos y escuchamos son accidentes precisos.
              Vinculo técnicas como el dibujo o la pintura con la mecánica y la programación, generando imágenes híbridas que albergan en sí partes de los dos universos: analógico y digital. Me interesa integrar la robótica a campos sensibles como el dibujo y comprender y participar en la asociación artística entre una máquina y un humano. También investigo las posibilidades de la botánica como medio plástico escultórico y cómo esto propone un tipo de obra mutante, no limitativa e incluso perecedera. 
              </p>
            </div>
            
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2022) “Ensayo de convergencia” L.A.R. 
              <br></br>
              <br></br>
              (2021) “SpookyNacionalista” OHNO Galeria
              <br></br>
              <br></br>
              (2021) “Prensado” Muestra final AxA
              <br></br>
              <br></br>
              (2019)  “Maratón de performance” de Colectivo Triangular. Fundación Cazadores.
              <br></br>
              <br></br>
              (2019)  “Casa intervenida III” de Cara-Seca duo.
              <br></br>
              <br></br>
              (2018)  Muestra final taller Luis Teran.
              <br></br>
              <br></br>
              (2017)  “11.11.S” Proyecto HHS.
              <br></br>
              <br></br>
              (2015)  “El todo en las partes” Espacio Dasein.
              <br></br>
              <br></br>
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>BECAS</p>

              <p>
              (2020) Artistas x Artistas - Beca Completa
              <br></br>
              <br></br>
              (2020) MDA - Media Beca
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>RESIDENCIAS</p>
              <p>
                (2023) Zona residencia - San Carlos, Salta, Argentina 
              </p>
            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>PROYECTOS EN COLABORACIÓN</p>
              <p>
                (2019-2020) Luces Calientes (joyería) junto a Diana Grieco.
              </p>
            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>CLINICAS</p>
              <p>
                (2020-2021) Artistas x Artistas
                <br></br>
                <br></br>
                (2019-2022) MDA -Método Diana Aisenberg-
              </p>
            </div>
            {/* <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>

              <a href="/ALVARO.pdf" target="_blank">PDF</a>
            </div> */}
            {/* <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
            </div> */}
          </div>
        </div>
      </motion.div>
      </main>
    );
  }
  