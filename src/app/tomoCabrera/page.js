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
          <p className={styles.title}>Tomo Cabrera</p>

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
                src="/tomocabreraObra.jpg"
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
            <p className={styles.subtitle}>Nacido en Ciudad Autónoma de Buenos Aires, en 1992.</p>
            <Image
                src="/tomocabreraCarnet.png"
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
              Según su madre, nunca tuvo miedo. 
              <br></br>
              Tomo Cabrera es un artista audiovisual que inició su camino queriendo estudiar cine y encontró asilo en la carrera de Diseño de Imagen y Sonido. Las ideas de ser director de cine se borronearon al descubrir que se podía ser hijo de Internet, gurú de la simulación, perro-humano o artesano de memes. Es decir, había un saber audiovisual que extremaba las reflexiones alrededor de las mediatizaciones y la representación, lo verosímil. A su vez, experimentó el trabajo en la industria como director de arte y productor en cine, publicidad y videoclips además de desarrollarse en otras áreas como guionista de series internacionales de televisión y director de incipientes obras autorales. 
              <br></br>
              Actualmente, es miembro activo del colectivo transespecie Suavecitxs que explora los límites identitarios de humanxs que deciden hibridarse con animales y del Club de Lectura que se sumerge en imaginaciones delirantes sobre política, cultura y vida asumiendo un triunfo de la estética por sobre la retórica.
              <br></br>
              Tomo necesita de la creación de relatos ficcionales que hilen sus prácticas artísticas ancladas en la elucubración de investigaciones y proyectos, sirviéndose así de la cultura pop, la cosmovisión de internet, el post-humanismo, las teorías cyborg, la ciencia ficción y la admiración-desconfianza a la tecnología. Podrían pensar que lo que intenta sintonizar es “un clima de época” pero también le preocupan los históricos estados alterados de la sociedad y los procesos profundos de la política.
              <br></br>
              Mezcla, digiere y ejecuta distintas herramientas, no con destreza, sino con un conocimiento profundo de sus alcances en la representación, medio para pensar y reflexionar. De alguna forma, el eje rector de su trabajo es la idea de ensayo poético y académico que lo encuentra atravesando dispositivos tecnológicos, interfaces de redes sociales, en la reapropiación de sonidos y videos, la post-fotografía, el diseño y el dibujo, la escritura y performance. Su palabra clave es puesta en escena.

              </p>

            </motion.div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ACADÉMICA</p>
              
              <p>
              (2011 - 2018) Graduado como Diseñador de Imagen y Sonido, Facultad de Arquitectura, Diseño y Urbanismo, Universidad de Buenos Aires.
              <br></br>
              Investigador del proyecto “Morfologías Audiovisuales II” (PIA - UBACYT) dirigido por Verónica Vitullo
              <br></br>
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ESPECIFICA</p>
              
              <p>
              (2023- 2024) Programa de Artistas del Di Tella.
              <br></br>
              (2022) Éxtasis, seminario de práctica performátiva dictado por Silvio Lang.
              <br></br>
              (2021) Laboratorio de exploración y creación escénica “Territorios de Ocupación” dictado por Silvio Lang. 
              <br></br>
              (2020 - 2021) Diplomatura “Corporeidades y  Tecnonarrativas”, Facultad de Filosofía y Letras, Universidad de Buenos Aires. 
              <br></br>
              (2020) Seguir viviendo, clínica sobre cultura dictado por Silvio Lang. 
              <br></br>
              (2020) Teoría del límite, clínica de obra con Lucas Despósito. 
              <br></br>
              (2020) Programa de Artistas x Artistas, Fundación El Mirador. 
              <br></br>
              (2018) Residencia de dramaturgia y escritura coordinado por Agustina Gatto, Lumitón.
              <br></br>
              (2017 - 2019) Entrenamiento Vocal con Micaela.
              </p>

            </div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              Según mi mamá nunca tuve miedo. Hijx de internet, los reality shows y la crisis del 2001. Artesano de memes y fiel amante del calor de las redes sociales, boxeador amateur, club kid precario y pet player. 
              <br></br>
              Artista audiovisual y docente/investigador en el área de Diseño de Imagen y Sonido. Me especializo en la escritura de guiones y formé parte de mesas de desarrollo de proyectos audiovisuales de ciencia ficción, fantasía y terror. Además, suelo trabajar como director de arte en publicidad, cine y videoclips. Esta experiencia me permite explorar, dentro de mi práctica artística, campos ficcionales y utópicos usando todas las herramientas y medios que conozco: Internet, las redes sociales, la edición de video, el dibujo, la escritura, la instalación audiovisual y la (proto)performance.
              <br></br>
              Admiro los vínculos que pueden tener todos los contenidos arbitrarios subidos a la red. Me hago preguntas sobre el post humanismo-tecnológico, lo interespecie transhumano, la vulnerabilidad y las nuevas formas de ficción. Estos espacios de experiment-acción son los que llamo prácticas artísticas.
              </p>
            </div>
            
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2022) “Cómo debes imaginarme” curado por Lucia Nielsen, ECA Mendoza.
              <br></br>
              (2022) “Playas paradisíacas, Talleres Brasil.
              <br></br>
              (2021) “Eterno resplandor” curado por Julieta Tarraubella, Munar. 
              <br></br>
              (2021)  “______ Prensado”, Edificio Diario La Prensa.
              <br></br>
              (2019) “Inflexiones de la memoria” curado por la Mediateca FADU, Noches de los Museos, FADU UBA.
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>PERFORMANCE</p>

              <p>
              (2021) “CLANDE.SUDOR.CGI” en el stand “Esperando como una pendeja” Arteba21, Valerie’s Factory.
              <br></br>
              (2019) “La jauría de Dylan” en la Carpa Rosa
              <br></br>
              (2019) “Me puse una correa al drone” en el marco de Perfuch Disidentx curado por Jair Jesús Toledo, Perfuch 4k, UV STUDIOS.
              <br></br>
              (2018) “Sísifo” en el cheLA.
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>PROYECCIONES</p>

              <p>
              “En otro momento te cuento I, II, III y IV” (video-ensayo) en el marco de la Jornadas Ver Poder (2017-2018) en el Centro Cultural Haroldo Conti.
              <br></br>
              “No era el silencio” (cortometraje ficción) en el Festival de la Luz 2016 y en el Festival de Cine de la Universidad VGIK 2017 (Rusia)
              <br></br>
              “Principio de precaución” (cortometraje documental) Poéticas documentales - Festival de Cine de Mar del Plata (no competencia) y Festival Pergamino Cine 2017 (ganador a Mejor Cortometraje Documental)
              <br></br>
              </p>

            </div>
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/TOMO CARERA.pdf" target="_blank">PDF</a>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://tcabrerac.com/" target="_blank">Web</a>
              <a href="https://www.instagram.com/tcabrerac/" target="_blank">Instagram</a>
              <a href="https://vimeo.com/user5369142" target="_blank">Vimeo</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  