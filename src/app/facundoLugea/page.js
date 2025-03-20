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
          <p className={styles.title}>Facundo Lugea</p>

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
                src="/artists/facundolugeaObra.jpg"
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
            <p className={styles.subtitle}>Nacido en Mar del Plata, en 1996.</p>
            <Image
                src="/artists/facundolugeaCarnet.jpg"
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
              Comenzó su práctica artística en 2015 a sus 18 años explorando diversas disciplinas al mismo tiempo que realizaba diferentes talleres de análisis de obra y curaduría, por al menos tres años. Luego de todo este tiempo de investigación y trabajo, tratando de entender la manera más fiel  de proyectar su obra.  En 2020 es donde considera el inicio formal de su carrera, ya que debido a la falta de espacio y oportunidad, comenzó un proyecto titulado “Autoedición”(2020-2024) el cual constaba de transformar el espacio de taller en una sala exhibición para  realizar diversos ensayos expositivos de su cuerpo de obra, investigando en  sus intereses conceptuales y formales. Al mismo tiempo que documentaba todo este proceso.
              <br></br>
              <br></br>
              En 2021 obtuvo la beca a la creación del FNA (Fondo nacional Argentino) para continuar dicho proyecto “Autoedición”. Ese mismo año expuso un solo show en Nighttimestory- (Los Angeles, Estados Unidos). En 2022 realizó su primera muestra individual institucional titulada “La Prolongación de nuestra inercia” en Museo MAR (MDP, Argentina). En 2023 participó de la muestra colectiva “Montes no visibles” en MACBA - (Bs As, Argentina). 
              </p>

            </motion.div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ESPECIFICA</p>

              <p>
              (2021) Obtiene la beca de creación del Fondo Nacional de las Artes por su proyecto “Autoedición”
              <br></br>
              <br></br>
              (2020) Seminario Curatorial “Exposición de Exposiciones” bajo la dirección de Lara Marmor en la Universidad Torcuato di Tella.
              <br></br>
              <br></br>
              (2017) Seminario “Materialidad y Hacer” dirigido por Nilda Rosemberg en Casa Yakuzi.
              <br></br>
              <br></br>
              (2017) Seleccionado para el Taller Abierto de Casa Intermitente en la Universidad Nacional de Mar del Plata - Facultad de Arquitectura y Urbanismo.
              <br></br>
              <br></br>
              (2017) Becaria “Fronteras Suspendidas” en Museo MAR, Mar del Plata, de Sebastián Tedesco y Mariano Luna.
              <br></br>
              <br></br>
              (2015)  G.R.A.P.A (Grupo de Reflexión y Análisis de la Producción Artística), con los tutores Claudio Roveda y Josefina Fossatti.
              <br></br>
              <br></br>
              (2015)  Seminarios con Daniel Fitte, María Lightowler, Mariana Rodriguez Iglesias
              </p>
              

            </div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              La práctica artística de Facundo  transcurre por diferentes medios, destacando más la escultura, instalación y poesía. 
              Su trabajo podría dividirse en dos focos de interés. Desde un punto de vista formal, Lugea explora el potencial poético de los materiales en su estado original. Y a partir de ahí, intenta construir la narrativas de sus obras a través de ensamblajes, gestos y señalamientos.
              La otra parte, la conceptual, está filtrada por diversos intereses, pero todos ellos pueden reducirse al cuerpo como punto central de su investigación. Esto se debe a que utiliza el concepto del cuerpo como un espejo en el que se reflejan otros intereses, como el origen, las relación materiales e inmateriales, los límites, la muerte, el tiempo y la transformación.
              Para Lugea no existe un límite claro entre nuestro cuerpo y lo que nos rodea, es por eso que todo su trabajo de alguna manera funciona como ensayos para tratar  de entender o al menos contemplar esa concepción de totalidad.
              </p>
            </div>
            
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2023) “Montes invisibles” en MACBA (Museo de Arte Contemporáneo de Buenos Aires), curada por Natalia Sosa Molina y Víctor López zurumecu.
              <br></br>
              <br></br>
              (2021) Premio Provincial de Arte Joven del Museo Pettoruti de La Plata, Buenos Aires.
              <br></br>
              <br></br>
              (2021) Otra feria- Galería Singular 2020 Arteba + Artsy- Galería Leputit.
              <br></br>
              <br></br>
              (2019)  “Una bolsa de hierro, rota por su extremo” Leputit en Mar del Mundo.
              <br></br>
              <br></br>
              (2017)  “Taller Abierto #2” Sede de la Facultad de Urbanismo y Arquitectura 2017 “Fronteras Suspendidas” Museo MAR.
              <br></br>
              <br></br>
              (2017)  “Mudar la piel”, GRAPA - Centro Cultural Villa Victoria Ocampo.
              <br></br>
              <br></br>
              (2016)  “Parafernalia”," GRAPA - Centro Cultural Villa Victoria Ocampo.
              <br></br>
              <br></br>
              (2015)  “El Lugar Eterno”, Galería Leputit en el Teatro Auditorio.
              <br></br>
              <br></br>
              (2015)  “Calma Chicha”," GRAPA - Plaza del Agua, Mar del Plata.
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>

              <p>
              (2022) “La expansión de nuestra inercia” MUSEO MAR (Museo de Arte Contemporáneo de Mar del Plata).
              <br></br>
              <br></br>
              (2021) “Ciclos activos de expiaciones constantes” en NIGHT TIME STORY en Los Ángeles, EE. UU. curada por Laura Regoni y Lucie Baumgartner.
              <br></br>
              <br></br>
              (2018) “Los débiles quedan” Casa Yakuzi en Mar del Plata, Argentina curada por Lole Remon.
              <br></br>
              <br></br>
              (2016) “Agua en mis manos” Le putit galerie en Mar del Plata, Argentina curada por Nahuel Agüero.
              </p>

            </div>
            {/* <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/FACU LUGEA.pdf" target="_blank">PDF</a>
            </div> */}
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://cargocollective.com/facundojesuslugea" target="_blank">Cargo Collective</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  