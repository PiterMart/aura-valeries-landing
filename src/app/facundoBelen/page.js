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
          <p className={styles.title}>Facundo Belen</p>

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
                src="/artists/facundobelenObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxWidth: '1000px' }}
                alt="Picture of the author"
              />
            </div>
            <motion.div className={styles.artistSection} id="bio"
            ref={element}
            style={{opacity: scrollYProgress}}
            >
            <p className={styles.subtitle}>Nacido en La Plata, en 1979</p>
            <Image
                src="/artists/facundobelenCarnet.jpg"
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
              Facundo Belén es un artista Audiovisual y Co fundador de NN galería. Estudió Comunicación Audiovisual en la Facultad de Bellas Artes de la UNLP. Desarrolla obras audiovisuales, esculturas, instalaciones y performances, las cuales fueron exhibidas en el Museo de Arte Moderno de Buenos Aires, Museo de Bellas Artes Emilio Pettoruti, Museo Castagnino + Macro Rosario, en el MACLA.
              </p>

            </motion.div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
                Navego erráticamente entre performances audiovisuales, esculturas, instalaciones, pinturas y fotografías. Mi obra propone una mirada distópica y satírica, que nos refleja como una especie frágil y ridícula. Me interesa reflexionar y exponer la tensión que existe entre ciertos conceptos y costumbres humanas como ser, el consumo de productos y el concepto de salud,  nuestros sistemas de creencias y el desarrollo de las ciencias, el sistema de producción industrial y la convivencia empática con el ecosistema , lo ritual y  lo real. 
                El uso de materialidad y técnica siempre están ligados al concepto en torno al cual gire la obra. Me interesa pensar las obras como arqueologías del futuro, por eso, uso materiales que definen el presente, como ser, el plástico, la goma, el latex, los chicles, los productos de limpieza entre otros. Me emociona encontrar tras una fachada leve o tonta una mirada crítica y reflexiva.

              </p>
            </div>
            
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>
              
              <p>
              (2022) Furor
              <br></br>
              (2020) realizó su performance LECTURA DE ALIAS BANCARIO en el ciclo Mi Vereda en el Museo de Arte Moderno de Bs As. Presentó su exhibición  individual FRUOR curada por Julieta Tarraubella en Fundación El Mirador. Participó de una muestra colectiva curada por Diego Bianchi en TRA Miami y fue seleccionado por Lolo y Lauti para la sección video de Arteba. 
              <br></br>
              (2021) su obra ECDISIS fue distinguida con una mención especial en el premio Fundación Andreani. A su vez, su obra Macedonia fue seleccionada para participar en el premio Fundación Fortabat. También fue seleccionado para la exhibición itinerante por el sur del país (Apóstoles) organizada por Distrito1. 
              <br></br>
              (2020) fue seleccionado en el salón Provincial de Artes Visuales e intervino una serie de naturalezas muertas del acervo del Museo Provincial de Bellas Artes Emilio Pettoruti con una performance que fue registrada en video en la sala Microespacio. 
              <br></br>
              (2019) Velo
              <br></br>
              (2019) su video performance Limpieza Profunda fue seleccionado para el Salón Nacional de Rosario. Realizó VELO una exhibición individual en la sala LAboratorio y fue becado por Fundación El Mirador para ser parte del programa anual Artistas x artistas, el cual terminó con una exhibición colectiva en Munar. 
              <br></br>
              (2016) Un Cuarto
              </p>

            </div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2023) Participó de Cómo Sentir? una muestra colectiva curada por Nicolás Cuello en la Casa del Bicentenario CABA. Y de ¨Cien caminos en un solo día¨ un proyecto de Jimena Ferreiro y Luciana Lamothe en el Museo de Arte Moderno de CABA. Su obra Árbol de Cristal fue seleccionada en el 111 Salon Nacional y fue exhibida en el CCK.
              <br></br>
              (2017 - 2018) Participó de exhibiciones colectivas en NN galería, UV estudios, galería Lanzallamas y Wunsch gallery.
              <br></br>

              </p>

            </div>
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/FACUNDO BELEN.pdf" target="_blank">PDF</a>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.instagram.com/tartadezapallito/" target="_blank">Instagram</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  