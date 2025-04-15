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
          <p className={styles.title}>Nana Schelz</p>

            <div className={styles.artistList}>
              <ul>
                <li><a href="#obra">Obra</a></li>
                <li><a href="#bio">Biografía</a></li>
                {/* <li><a href="#statement">Statement</a></li> */}
                <li><a href="#muestras">Muestras</a></li>
                <li><a href="#catalogo">Catálogo</a></li>
                <li><a href="#redes">Redes</a></li>
              </ul>
            </div>


          </div>
          <div className={styles.artistContent}>
            <div className={styles.artistSection} id="obra">    
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FnanaSchelz%2FnanaSchelzObra.jpg?alt=media&token=d8d87ab9-f029-4632-9b1b-1485c7d7fc67"
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
            <p className={styles.subtitle}>Nació en Agosto de 1989, en Buenos Aires, Argentina.  </p>
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FnanaSchelz%2FnanaSchelzCarnet.jpg?alt=media&token=a6e2347e-6173-42c9-80ed-a345a879a100"
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
              Se crió viendo TV en exceso, en especial Cartoon Network y coleccionando stickers holográficos. De chica su accesorio favorito era la caja flúor de sus aparatos.
              <br></br>
              <br></br>
              Transitó las carreras de indumentaria y artes en la UBA pero no las terminó. Se formó a partir de múltiples talleres y clínicas. Participó de la residencia Casero en Río de Janeiro, y la Residencia Virreina, en Colombia (2024) Formó parte del programa Manglar (2021), del Programa de Artistas de la Universidad Torcuato Di Tella (2022- 2023) y del  programa Hito Cultural (2024) Su obra quedó seleccionada en la 13 edición del premio Itaú Artes Visuales, en el 16 -17 premio de pintura Bancor.
              <br></br>
              <br></br>
               En 2022 tuvo su muestra Vivero en Acéfala. Participó de la muestra Monumentos que crecen hacia adentro en Chela y en Un Jarrón en el Ciberespacio en galería Vermeer. 
              <br></br>
              <br></br>

              </p>

            </motion.div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ACADÉMICA</p>
              
              <p>
              UBA, Diseño de indumentaria, 2009- 2012
              <br></br>
              <br></br>
              UBA, Licenciada en artes 2013- 2018
              <br></br>
              <br></br>
              Estudió composición y color en la Art Student League of New York.
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ESPECIFICA</p>

              <p>
                Seminario de acuarela en la Art Student League of New York. Febrero - Abril 2012
                <br></br>
                <br></br>
                Clínica con Fabiana Barreda. 2012 - 2013
                <br></br>
                <br></br>
                Taller de pintura con Aníbal Garfunkel. 2012 - 2014
                <br></br>
                <br></br>
                Clínica con Romina Resuche. 2013 - 2015
                <br></br>
                <br></br>
                Clínica con Patricia Hakim. Octubre 2017 - Junio 2018
                <br></br>
                <br></br>
                Taller El texto de la obra con Silvia Gurfein. Febrero 2019
                <br></br>
                <br></br>
                Taller de clínica con Hernán Salamanco. 2019
                <br></br>
                <br></br>
                Programa de artistas Manglar con Andrés Labaké. 2021
                <br></br>
                <br></br>
                Programa de artistas de la Universidad Torcuato Di Tella. 2022 - 2023
                <br></br>
                <br></br>
                Participación del programa Hito Cultural. 2024
                <br></br>
                <br></br>
              </p>
            </div>
            <div className={styles.artistSection}>
              <p className={styles.subtitle}>RESIDENCIAS</p>
              <p>
                (2017) "Residencia Casero" – Río de Janeiro, Brasil. Marzo-Junio
                <br></br>
                <br></br>
                (2024) "Residencia Virreina" – Santander, Colombia. Marzo
                <br></br>
                <br></br>
              </p>
            </div>
            <div className={styles.artistSection}>
              <p className={styles.subtitle}>PREMIOS</p>
              <p>
                "Participación de la 13° edición del Premio Itaú Artes Visuales"
                <br></br>
                <br></br>
                "Participación de la 16° y 17° edición del Premio Bancor"
                <br></br>
                <br></br>
                "Participación del 68° Salón de Artes Plásticas Manuel Belgrano"
                <br></br>
                <br></br>
              </p>
            </div>

            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              Según mi mamá nunca tuve miedo. Hijx de internet, los reality shows y la crisis del 2001. Artesano de memes y fiel amante del calor de las redes sociales, boxeador amateur, club kid precario y pet player. 
              <br></br>
              <br></br>
              Artista audiovisual y docente/investigador en el área de Diseño de Imagen y Sonido. Me especializo en la escritura de guiones y formé parte de mesas de desarrollo de proyectos audiovisuales de ciencia ficción, fantasía y terror. Además, suelo trabajar como director de arte en publicidad, cine y videoclips. Esta experiencia me permite explorar, dentro de mi práctica artística, campos ficcionales y utópicos usando todas las herramientas y medios que conozco: Internet, las redes sociales, la edición de video, el dibujo, la escritura, la instalación audiovisual y la (proto)performance.
              <br></br>
              <br></br>
              Admiro los vínculos que pueden tener todos los contenidos arbitrarios subidos a la red. Me hago preguntas sobre el post humanismo-tecnológico, lo interespecie transhumano, la vulnerabilidad y las nuevas formas de ficción. Estos espacios de experiment-acción son los que llamo prácticas artísticas.
              </p>
            </div>
            
            <div className={styles.artistSection} id="muestras">

            <p className={styles.subtitle}>EXHIBICIONES</p>
              <p>
                (2017) "Sopro Colectivo" – Performance en Fábrica Bhering, Río de Janeiro, Brasil. Junio
                <br></br>
                <br></br>
                (2019) "Inflexiones de la memoria" curado por la Mediateca FADU, Noches de los Museos, FADU UBA.
                <br></br>
                <br></br>
                (2021) "Siempre en otra parte" – Muestra colectiva en Decentraland. Junio
                <br></br>
                <br></br>
                (2021) "Eterno resplandor" curado por Julieta Tarraubella, Munar.
                <br></br>
                <br></br>
                (2021) "______ Prensado", Edificio Diario La Prensa.
                <br></br>
                <br></br>
                (2021) "Derrumbe programado" – Muestra colectiva en Acéfala Galería. Noviembre
                <br></br>
                <br></br>
                (2021) "No existe tierra más allá" – Muestra colectiva en Chela. Diciembre
                <br></br>
                <br></br>
                (2021) "Festival del Puente" – Muestra colectiva en Viedma. Diciembre
                <br></br>
                <br></br>
                (2022) "Vivero" – Muestra individual en Acéfala Galería. Marzo
                <br></br>
                <br></br>
                (2022) "Cómo debes imaginarme" curado por Lucía Nielsen, ECA Mendoza.
                <br></br>
                <br></br>
                (2022) "Playas paradisíacas", Talleres Brasil.
                <br></br>
                <br></br>
                (2023) "Un jarrón en el ciberespacio" – Muestra colectiva en Vermeer. Mayo
                <br></br>
                <br></br>
                (2023) "Mil y una fugas" – Muestra colectiva en Acoyte. Mayo
                <br></br>
                <br></br>
                (2023) "Monumentos que crecen hacia adentro" – Muestra de cierre del Programa de Artistas UTDT.
                <br></br>
                <br></br>
                (2024) "Festín" – Muestra colectiva en Barrakesh. Febrero
                <br></br>
                <br></br>
              </p>
            </div>
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FnanaSchelz%2Fcat%C3%A1logo%20VF%20Nana.pdf?alt=media&token=c3f9fdcc-f5f3-49f8-b655-791421e618fc" target="_blank">PDF</a>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.nanasch.com.ar/" target="_blank">Web</a>
              <a href="https://www.instagram.com/nanaschlez/?hl=es" target="_blank">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  