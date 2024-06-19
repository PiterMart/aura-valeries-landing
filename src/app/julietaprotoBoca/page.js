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
          <p className={styles.title}>Julieta Proto Boca</p>

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
                src="/artists/julietaprotoObra.jpg"
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
            <p className={styles.subtitle}>Nacida en Buenos Aires, en 1996.</p>
            <Image
                src="/artists/julietaprotobocaCarnet.jpg"
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
              Sus obras se construyen a partir de la combinación de elementos tradicionales de la pintura con materiales vinculados al dibujo o graffiti. Su imagen surge de deformar la figuración de las fotografías de su vida cotidiana y de sus viajes, relacionándola con elementos de su universo onírico y restaurando sus recuerdos por medio de lagunas tonalizadas y texturas. El resultado de esta articulación genera muchas veces un efecto pareidolico donde la abstracción y la figuración se balancean en su liminalidad, permitiendo dar lugar al no control y facilitar el autoconocimiento desde lo sorpresivo.
              <br></br>
              El texto es un elemento siempre presente que juega un papel fundamental en el desarrollo de sus temas, muchas veces permite evidenciar información sobre la construcción de la imagen y el relato. Pictóricamente ocupa también ese lugar liminal donde por momento se vuelve ilegible y estructura el diagrama inicial de la construcción de imagen. Los textos provienen de letras de la música que escucha, de sus lecturas diarias y de sus pensamientos. 

              </p>

            </motion.div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ACADÉMICA</p>

              <p>
              Cursó la carrera de Licenciatura en Artes Visuales en la Universidad Nacional de las Artes en Capital Federal, Buenos Aires.  
              <br></br> 
              (2015-2023)  Proyectual con Cátedra Bissolino y Clínica con Pablo Siquier. 
              </p>

            </div>
            <div className={styles.artistSection} >

              <p className={styles.subtitle}>FORMACIÓN ESPECÍFICA</p>

              <p>
              (2023) Clinica con Pablo Siquier
              <br></br>
              (2021) Taller de pintura de Gimena Macri
              <br></br>
              (2020)Programa de artistas “Artistas x Artistas”
              <br></br>
              (2017/2018) Taller de pintura de Gabriela Gutiérrez
              <br></br>
              (2017)  Curso de Extensión Filete Porteño, UNA
                <br></br>
              (2016)  Curso de Extensión Grabado, Transferencia y Collagraph, UNA
              </p>

            </div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              La necesidad de conectar el mundo interior con el mundo exterior se vuelve parte de mi búsqueda visual y vital, siendo mis pinturas un camino posible hacia la reconciliación. En la pintura me detengo, y respiro. Me permite preguntarme constantemente por qué estoy haciendo lo que hago, por qué elijo lo que elijo y hasta qué punto tengo decisión sobre mis acciones. Jugar con el no control y con lo desconocido me facilita el camino hacia el autoconocimiento.

              </p>
            </div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>

              <p>
              (2023) “Las Chicas C”, curada por Gimena Macri, Valerie’s en Barrakesh
              </p>

            </div>
            
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2022) “Las Asesinas de la Cueva en La Cueva del Repliegue”, Asesinas de la Escalera, en La Cueva del Repliegue, Vecinal de Villa del Parque.
              <br></br>
              (2022) “Cómo debes imaginarme” muestra colectiva de Valerie’s curado por Lucia Nielsen, ECA Mendoza
              <br></br>
              (2021) “Todo encaja”, cierre del taller de pintura de Gimena Macri
              <br></br>
              (2021) “______ Prensado”, Edificio Diario La Prensa. Muestra colectiva del programa AxA.
              </p>

            </div>
            
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/JULI PROTO.pdf" target="_blank">PDF</a>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.instagram.com/julietaprotoboca/" target="_blank">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  