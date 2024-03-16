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
          <p className={styles.title}>Matias Tomas</p>

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
                src="/matiastomasObra.jpeg"
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
            <p className={styles.subtitle}>Nacido en Tucumán, en 1990. </p>
            <Image
                src="/matiastomasCarnet.png"
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
              Realizó su enseñanza media en la Escuela de Bellas Artes de la Universidad Nacional de Tucumán con especialización en Grabado. Estudió Teatro en la Escuela de Teatro Paul Groussac y algunos años Filosofía en la Facultad de Filosofía y Letras de la Universidad Nacional de Tucumán. 
              </p>

            </motion.div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              Desde que me mudé a São Paulo en 2022 comencé a investigar el color, la imagen abandonó la monocromía para ocuparse de problemas de vibración y temperatura. Actualmente investigo planos de color para generar una espacialidad cromatica. 

              El arte lidia con los deseos y coloca la cuestión del placer de una manera impertinente. Expropiar y redistribuir. Intencionar, ejercitar la metonimia o la metáfora. Nuestro ambiente emocional es pobre y peligroso, el trabajo artístico no es capaz de cambiarlo, pero puede transcribirlo. Puede reproducir la atmósfera afectiva de un malestar. 

              Hay que tener cierto espíritu de incompatibilidad para ejercer el arte. Intentar no someterse a la hegemonía de los formatos, contrariar las ideas tradicionales del arte como conciliación, tanto en la producción de una obra compuesta como de un espectador compuesto para mantener la forma artística abierta y dinámica. Creo que ese hacer y deshacer del objeto puede inspirar un movimiento análogo en el sujeto. 

              </p>
            </div>
            
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              Participó de numerosas muestras colectivas como "Adentro no hay más que una morada, 33 Artistas Argentinos"  Museo de Arte Moderno de Buenos Aires (2022). "La sonrisa del alma sin dientes" Galería Alimentación General, Buenos Aires (2018). "La cueva en la roca" Fondo Nacional de las Artes, Buenos Aires(2015). Realizó algunas muestras individuales entre ellas le gusta destacar "Tesoro.Melancolía" Galería Komuna, Buenos Aires (2021) y "Dibujos" en Big SUR galería, Buenos Aires(2017). También fué parte de las ediciones de arteBA 2013, 2019 y 2023, (en esta última obtuvo premio en obra junto a otros artistas de Valerie’s Factory, galería que actualmente lo representa).Fue becario de CIA en 2016 (Centro de Investigaciones Artísticas) y asistente de muchos artistas durante sus estadías en las ciudades de Rosario, Buenos Aires y San Miguel de Tucumán. 
              Actualmente vive y trabaja en São Paulo, Brasil.

              </p>

            </div>
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.instagram.com/matiastomas2024/ ">Instagram</a>
              <a href="https://matiastomas.tumblr.com ">Tumblr</a>
              <a href="https://youtu.be/-WcdpWEczg0 ">Museo de Arte Moderno</a>
            </div>
          </div>
        </div>
      </motion.div>
      </main>
    );
  }
  