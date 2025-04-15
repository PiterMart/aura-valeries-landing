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
          <p className={styles.title}>Julian Brangold</p>

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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FjulianBarangold%2FjulianbrangoldObra.jpg?alt=media&token=5c873be2-1d5a-465a-86b9-fef3f3abd10c"
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
            <p className={styles.subtitle}>Nacido en Buenos Aires, en 1986...</p>
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FjulianBarangold%2FjulianbrangoldCarnet.jpg?alt=media&token=2d1c1cff-8e6e-4015-b151-0ac9b32f877b"
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
              Julian Brangold completó su formación secundaria en la Escuela Técnica ORT II, especializándose en medios de comunicación. Posteriormente, realizó una tecnicatura en dirección cinematográfica en la Fundación Universidad del Cine. A lo largo de su trayectoria, ha participado en diversas clínicas y talleres dictados por artistas como Carolina Antoniadis, Sergio Bazan, Diana Aisenberg, Rafael Cippolini, Tomás Espina, Rodrigo Alonso, Jorge Macchi y Marcelo Pombo.
              <br></br>
              </p>

            </motion.div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS</p>

              <p>
              Su obra ha sido expuesta en numerosas muestras colectivas en espacios culturales como el Centro Cultural Recoleta, el Centro Cultural Borges, el Marq y el Museo Fortabat. Además, ha sido seleccionado para participar en concursos y premios, entre los que destacan el Premio Proyecto A, la Semana del Arte Contemporáneo de Mar del Plata, el Salón Nacional de Artes Visuales 2019 y el Premio Andreani 2020. Su trabajo también ha tenido proyección internacional, con exhibiciones colectivas en Alemania, Estados Unidos e Italia.
              </p>

            </div>
            <div className={styles.artistSection} >

              {/* <p className={styles.subtitle}>FORMACIÓN ESPECÍFICA</p> */}

              <p>
              En 2020, formó parte del programa de artistas de la Universidad Torcuato Di Tella. Asimismo, se desempeñó como director de programación de MOCA, un museo especializado en arte contemporáneo digital basado en Nueva York, donde profundizó en el uso de la tecnología como herramienta artística.
              </p>

            </div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              Actualmente, su práctica se centra en la exploración de la tecnología como elemento central de craeción, investigación y crítica. En este sentido, experimenta con herramientas como la inteligencia artificial y blockchain para explorar internet como ecosistema cultural, los fenómenos virales, las subculturas y los mitos que emergen en el universo de lo online.
              </p>
            </div>
            
            {/* <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/JULI PROTO.pdf" target="_blank">PDF</a>
            </div> */}
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.instagram.com/julian.brangold?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  