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
          <p className={styles.title}>Valentina Quintero</p>

            <div className={styles.artistList}>
              <ul>
                <li><a href="#obra">Obra</a></li>
                <li><a href="#bio">Biografía</a></li>
                <li><a href="#statement">Statement</a></li>
                <li><a href="#muestras">Muestras</a></li>
                {/* <li><a href="#catalogo">Catálogo</a></li> */}
                <li><a href="#redes">Redes</a></li>
              </ul>
            </div>


          </div>
          <div className={styles.artistContent}>
            <div className={styles.artistSection} id="obra">    
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FvalentinaQuintero%2FvalentinaquinteroObra.jpg?alt=media&token=6d33e9b3-1d22-4f8a-8378-9910ad0b2ede"
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
            <p className={styles.subtitle}>Nacida en 1997 en Mendoza, Argentina.</p>
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FvalentinaQuintero%2FvalentinaquinteroCarnet.jpg?alt=media&token=e6a6f468-7a4b-40df-9e2e-24299d81f338"
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
              Valentina Quintero, también conocida como Valentine es una artista visual, cantante y performer. Dibujante desde niña, comienza a desarrollar su obra desde 2015 junto al fugaz colectivo artístico Ricarda Espinosa y posteriormente su propio camino con performances e instalaciones/happenings como RED CARPET en el MMAMM (Mendoza, 2016) y TEMPLO en Imagen Galería (Mendoza, 2017).
              <br></br>
              <br></br>
              Su obra visual descansa y se alimenta de su experiencia constante en el campo de lo escénico, como el teatro y la música, cruzando las fronteras de las disciplinas artísticas. 
              La feminidad, el no-binarismo, la re-escritura de la historia del arte en clave trans, la cultura popular, las nociones de identidad desde la fantasía, son algunos de los componentes que conjuran la obra que la artista realiza en diferentes medios como la foto performance, instalación, performance en vivo y el dibujo. 

              <br></br>
              </p>

            </motion.div>

            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ACADÉMICA</p>
              
              <p>
              Licenciatura y Profesorado en Artes Visuales en la Universidad Nacional de Cuyo (Mendoza, Argentina).
              <br></br>
              <br></br>
              Tecnicatura Superior en Diseño Multimedial en IES Manuel Belgrano (Mendoza, Argentina) 
              <br></br>
              <br></br>
              </p>

            </div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              La manera en que el arte traslada y trae objetos de otros lenguajes para su mundo, siempre fue un ejercicio que admiré profundamente como cuando la televisión se homenajea a sí misma.
              La inquietud que me genera la historia del arte y los mitos que la conforman son un motor para repensar el presente-futuro que quiero crear.
              En clave de constante transición, opero cada ejercicio artístico desde una parada performativa. Construyo alter-egos para sublimar mi experiencia social en la obra, para re escribir, re pensar la identidad. 

              </p>
            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ESPECIFICA</p>
              
              <p>
              (2022) Programa ARTISTASXARTISTAS, Fundacion el Mirador 
              <br></br>
              <br></br>
              (2020) Clinica de Artistas ’’Clinica Degenerada’’ Silvio Lang y SOMA 
              <br></br>
              <br></br>
              (2019) Residencia ‘’Fuerzas Silvestres-Princesas del Asfalto’’ Silvio Lang 
              <br></br>
              <br></br>
              (2019) Seminario de Actuación ‘’Insurgencias Afectivas’’ Silvio Lang 
              <br></br>
              <br></br>
              (2016 - 2017) Laboratorio de Análisis y Producción de Arte Contemporáneo: ‘’Apariencia y Revestimiento’’ a cargo de Silvana Gutiérrez (Proyecto Penrose).
              <br></br>
              <br></br>
              (2018) Clínica y Taller para artistas Método Diana Aisenberg en Curadora Residencia 
              <br></br>
              <br></br>
              (2017) Seminario ‘’Operaciones del Lenguaje en las Artes Visuales’’ a cargo de Pilar Altilio 
              <br></br>
              <br></br>
              (2017) Taller ‘’Un ArcoIris Negro’’ Nati Cristo Pan 
              <br></br>
              <br></br>
              (2016) Taller ‘’Técnicas de Supervivencia para Artistas’’ Marisa Rossini 
              <br></br>
              <br></br>
              (2016) Taller ‘’La Ilusion Biográfica’’ Cecilia Tello D’Elia 
              <br></br>
              <br></br>
              (2016) Taller ‘’Donde está el Mundo’’ Mario Scorzelli 
              </p>

            </div>

            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>

              <p>
              (2023) Chicos Confundidos y yo, ECA Mendoza 
              <br></br>
              <br></br>
              (2023) TEMPLO II, Valeries Factory 
              <br></br>
              <br></br>
              (2019) Miro La Vida Pasar en Casa Colmena, 
              <br></br>
              <br></br>
              (2019) Vesti La Giubba en Proyecto Galería   
              <br></br>
              <br></br>
              (2018) Scary Mostra en Imagen Galeria de Mendoza 
              <br></br>
              <br></br>
              (2017) TEMPLO en Imagen Galería de Mendoza 
              <br></br>
              <br></br>
              (2016) RED CARPET en el Museo Municipal de Arte Moderno de Mendoza 
              </p>

            </div>
            
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2023) Casi Angeles, Galería Barro 
              <br></br>
              <br></br>
              (2023) Twinks vs Dolls, Galeria Hipopoety 
              <br></br>
              <br></br>
              (2018) Arte, Género y Política en Biblioteca San Martín, Mendoza
              <br></br>
              <br></br>
              (2015 / 2017) Como ecos en la Bruma - muestra dúo junto a Maria Filomena Pierri / Pionera. 
              <br></br>
              </p>


            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>PREMIOS Y SALONES</p>

              <p>
              100º Salón Anual Nacional de Santa Fe - Museo Rosa Galisteo - Premio Estímulo Pilay (No adquisición) por la fotografía “Venus Esteatopigia 2”
              </p>

            </div>
            {/* <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/VALENTINE.pdf" target="_blank">PDF</a>
            </div> */}
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="valentinaquinteroart.tumblr.com" target="_blank">Tumblr</a>
              <a href="https://instagram.com/holavalentine" target="_blank">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  