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
          <p className={styles.title}>Samantha Ferro</p>

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
                src="/artists/samantha ferro obra.jpg"
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
            <p className={styles.subtitle}></p>
            <Image
                src="/artists/samanthaferroCarnet.jpg"
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
              Es licenciada en Artes Visuales con orientación en escultura por la Universidad Nacional de Córdoba. A su vez se formó de manera paralela en talleres, seminarios y clínicas de perfeccionamiento en el campo de las artes visuales, fotografía y diseño de indumentaria. En el 2022/3 realizó la XIV edición del Programa de Artistas de la Universidad Torcuato Di Tella. Anteriormente participó del Programa ArtistasxArtistas y ABELE. Realizó el Programa de Residencias de Marco Arte Foco de Fundación Tres Pinos. Obtuvo distintas becas de perfeccionamiento y producción artística entre las cuales: participó del Encontro de Artistas Novos Cidade da cultura de Galicia, realizó la residencia R.A.R.O Buenos Aires; participó de Proyecto Yungas, Manifiesto Alegria y del Programa de Diseño de colección e indumentaria en FAUD (Facultad de Arquitectura, Urbanismo y Diseño).
              </p>

            </motion.div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              Realiza su producción en relación al cuerpo y su vulnerabilidad, pensandolo como un lugar de sujeción, de naturalización de ciertas practicas, buscando acentuar operaciones que muchas veces son silenciadas.   Su práctica está atravesada por vivencias, imposiciones, disciplinamientos y decanta en situaciones dicotómicas. A partir de esto lleva a cabo la construcción de su producción en materiales con distintos procesos de transmutación, conservación y deterioro, muchas veces pensadas como sostenes o protesis, originando a su vez nuevos comportamientos, posturas, símbolos y performatividades.
              </p>
            </div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS</p>

              <p>
              Participó de distintos salones como el Premio Osde 2023 donde obtuvo uno de los premios regionales, Salón Nacional de Artes Visuales 2022 y 2023 donde obtuvo Menciones en la categoria Escultura, en el año 2022 fue seleccionada en los premios Fundación Klemm y Salón 8M.
              </p>

            </div>
            {/* <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/JULI PROTO.pdf" target="_blank">PDF</a>
            </div> */}
            <div className={styles.artistSection} id="redes">
              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.instagram.com/samanthaferro__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  