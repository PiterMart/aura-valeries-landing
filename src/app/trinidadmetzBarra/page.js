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
          <p className={styles.title}>Trinidad Metz Brea</p>

            <div className={styles.artistList}>
              <ul>
                <li><a href="#obra">Obra</a></li>
                <li><a href="#bio">Biografía</a></li>
                {/* <li><a href="#statement">Statement</a></li> */}
                <li><a href="#muestras">Muestras</a></li>
                {/* <li><a href="#catalogo">Catálogo</a></li> */}
                <li><a href="#redes">Redes</a></li>
              </ul>
            </div>


          </div>
          <div className={styles.artistContent}>
            <div className={styles.artistSection} id="obra">    
              <Image
                src="/artists/trinidametzbreaObra.jpg"
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
            <p className={styles.subtitle}>Nacida en Buenos Aires, en 1994.</p>
            <Image
                src="/artists/trinidadmetzbreaCarnet.jpg"
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
              Es Licenciada en Artes Visuales de la Universidad Nacional de Arte e ingresó al programa de Artistas de la UTDT 2024. En el 2023 fue seleccionada en el premio Argentino a las Artes Visuales OSDE y realizó su tercer muestra individual Ferales, con curaduría de Sofía Dourron en Aura fabrica. En el 2022 recibió el primer premio adquisición del Salón del Litoral de Santa Fe y fue seleccionada en los premios Fundación Klemm y Fundación ITAU. Asimismo, en el 2021 fue seleccionada en el premio Fundación Klemm, en la Bienal de Arte Joven y recibió el Premio en Obra de ARTEBA.
              <br></br>
              <br></br>
              Su práctica se centra en la escultura, incorporando procesos en 3D, pintura, dibujo y otros medios. En su obra crea mundos ecológicos y ficciones climáticas que son a la vez extrañas y familiares, generando nuevos mitos y crónicas fantásticas que surgen cuando entidades no humanas se enredan con proyectos de infraestructura humana, y explora las relaciones materiales y conceptuales entre tradiciones artísticas y nuevas tecnologías. A la vez que entrelaza diversas influencias: las mitologías y la historia del arte se fusionan con narrativas de juegos, ciberpunk y distopía, estudios biológicos, bestiarios y cuentos folklóricos latinos, emergiendo del potencial de lo que subsiste/resiste. De estos encuentros materiales surgen nuevos cuerpos y una poética de transición que explora qué significa ser humano o más que humano en el Antropoceno, en un contexto de desafíos climáticos, ecológicos y políticos, dando paso a subjetividades tentaculares y devenires porosos.
              <br></br>
              <br></br>
              Sus proyectos recientes incluyen: Technotronics (muestra colectiva cuerda por Joaquin Barreda y Laura Spivak - CCEBA, BsAs, 2023), Después de la naturaleza (muestra colectiva curada por Sofía Dourron - arteba, BsAs,  2022), Figuritas (muestra colectiva curada por Jesu Antuña, Joaquín Barrera y Marcos Krämer - CNB, BsAs, 2022), Cómo ecos en la bruma (muestra duo curada por Irene Gelfman - Pionera, Pinamar, 2022), La Motherboard (Muestra individual curada por Irene Gelfman - Fundación el Mirador, BsAs, 2021) con apoyo de Fundación Santander a través del programa de Mecenazgo.  Vive y trabaja en Buenos Aires.
              </p>

            </motion.div>

            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>

              <p>
              (2023) Ferales / Aura.
              <br></br>
              <br></br>
              (2021) La Motherboard / Fundación El 
              <br></br>
              <br></br>
              (2019) Nada que lastime / CPU. Palacio Barolo 
              </p>

            </div>
            
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2023) Technotronics / CCEBA.
              <br></br>
              <br></br>
              (2022) Figuritas / Casa Nacional del Bicentenario. 
              <br></br>
              <br></br>
              (2022) Después de la naturaleza / Arteba. 
              <br></br>
              <br></br>
              (2022) Como ecos en la Bruma - muestra dúo junto a Maria Filomena Pierri / Pionera. 
              <br></br>
              <br></br>
              (2020) Mientras mi sueños sangran / Fundación el Mirador.  
              <br></br>
              <br></br>
              (2020)  Toque de seda / Quimera Galeri. 
              <br></br>
              <br></br>
              (2020)  Para todes, tode / Centro Cultural Kirchner. 
              <br></br>
              <br></br>
              (2019)  Relaciones Peligrosas / Galería Pasaje 17. 
              <br></br>
              <br></br>
              (2018)  Intervención Noche de los Museos / Centro Cultural Haroldo Conti. 
              <br></br>
              <br></br>
              (2018)  Mar de fondo / Local Support. 
              <br></br>
              <br></br>
              (2018)  El placer del exilio / Galería Gachi Prieto. 
              <br></br>
              <br></br>
              (2017)  Poiesis / Centro Cultural San Martin. 
              <br></br>
              <br></br>
              (2017)  Intervención en Trimarchi / Auditorio MDQ. 
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FERIAS</p>

              <p>
              (2023) PINTA MIAMI 
              <br></br>
              <br></br>
              (2021 - 2022 - 2023) ARTEBA
              </p>

            </div>
            {/* <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/TRINI METZ.pdf" target="_blank">PDF</a>
            </div> */}
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://trinidadmetzbrea.com/">Web</a>
              <a href="https://linktr.ee/3inidad">Links</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  