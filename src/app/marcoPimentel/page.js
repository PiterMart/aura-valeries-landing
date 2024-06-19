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
          <p className={styles.title}>Marco Pimentel</p>

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
                src="/artists/marcopimentelObra.jpg"
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
            <p className={styles.subtitle}>Nacido en Buenos Aires, en 1995.</p>
            <Image
                src="/artists/marcopimentelCarnet.jpg"
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
              Es un nativo digital y artista multidisciplinar que investiga desde 2014 sobre distintos medios en los que desarrollar imágenes que decantan de internet o estados alterados de la consciencia (ya sean ensoñaciones, fantasías o psicodelias autoinducidas). Hasta ahora, sus predilectos son el dibujo y la aerografía, aunque recientemente experimenta con otros formatos más cercanos al mundo textil. Hizo su paso por las clínicas y talleres de artistas como Diana Aisenberg, Pablo Siquier, Nicanor Aráoz, Flavia Da Rin, Mauro Koliva, Sobrino Bruno y Eduardo Stupia. A su vez cursó los Programas Artísticos de la UTDT, y la Licenciatura en Artes Visuales de la Universidad Nacional de las Artes. 
              Participó en las exhibiciones colectivas El burro y la moto, curada por Nicanor Araoz y Flavia Da Rin, Mientras mis sueños sangran, curada por Joaquin Barrera, y Tegumento curada por Max Zimmerman en Fundación El Mirador en los años 2018, 2020 y 2021 respectivamente, y más recientemente en Siniestra, curada por Nahuel Aguero en Proyecto Urra y en Lagarta de fogo, curada por Max Gomez Canle en Residencia Fidalga, Sao Paulo. También, mostró individualmente en Fundación El Mirador en 2021. 
              Actualmente, desenvuelve su práctica en su taller en la Ciudad de Buenos Aires, manteniéndose conectado a su vez con las escenas de ciudades como Sao Paulo, y a través de la world wide web con toda una generación de artistas que se proyecta globalmente por medio de las pantallas.

              </p>

            </motion.div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ACADÉMICA</p>

              <p>
              (2015-2023)  Lic. en artes visuales UNA.
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>FORMACIÓN ESPECÍFICA</p>

              <p>
              (2019 - 2021) Clínica de obra y taller de pintura de Diana Aisenberg. 
              <br></br>
              (2019) Clínica de Pablo Siquier. 
              <br></br>
              (2018) Taller de Dibujo de Mauro Koliva.
              <br></br>
              (2018) Spooky Vision, clínica de Nicanor Araoz y Flavia Da Rin. AXA 
              <br></br>
              (2017)  Taller Sobrino Bruno.
              <br></br>
              (2016)  Proyecto Documental, seminario de Andrés Di Tella, UTDT
              <br></br>
              (2016)  Ejercicios Picasso, seminario de Eduardo Stupia, 
              <br></br>
              (2016)  Ejercicios Sistemáticos de Dibujo, seminario de Eduardo Stupia UTDT 
              </p>

            </div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              Desde el comienzo de los tiempos el ser humano buscó refugio en lugares subterráneos, cuyas condiciones de oscuridad permitieran imaginar otros mundos y llevar a cabo rituales colectivos o individuales que propiciaran la ascensión a esos otros planos de existencia. La luz y la oscuridad puestas al servicio del rito es una constante en las obras que llevo a cabo a través del dibujo, la pintura, la aerografía y el diseño textil. Entremezclados con personajes de una mitología propia, estos escenarios, a veces acuáticos, a veces brumosos, infernales incluso, pueden caer todos bajo la categoría de espacios mentales, que ensamblo a partir de un empleo de la composición por momentos errático pero no por eso menos cargado de simbolismos. 

              La fragmentación de los cuerpos, de las escenas o de las temporalidades como tema en mis obras responde a una lógica ligada al modo en que el cerebro humano percibe los traumas elementales ocasionados por la violencia, la muerte o la emergencia ya sea desde el útero, los hipogeos, o distintos estados mentales como el sueño profundo o meditativo. 

              El mundo de referencias por el que transcurren muchas de estas imágenes proviene de la ilustración y el manga japonés, los consumos irónicos, el gótico alemán, las figuras ocasionadas por la pareidolia, y las alucinaciones inducidas por los estados alterados de la consciencia.

              Así, la investigación por el limbo que separa a la confusión del no-retorno, a lo terrorífico de la extravagancia, a la vigilia del sueño, se empasta con intereses propios del mundo de la cultura de masas, la historia del arte, y una fuerte inclinación por los recovecos mentales que se encienden en el líquido amniótico que recubre ciertas experiencias humanas que tienen raíz en lo primordial-primigenio.

              </p>
            </div>

            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS INDIVIDUALES</p>

              <p>
              (2021) Apnea, curada por Maruki Nowacki. Fundación el mirador.
              </p>

            </div>
            
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>MUESTRAS COLECTIVAS</p>
              
              <p>
              (2023) Siniestra, curada por Nahuel Aguero, en Proyecto Urra. Buenos 
              <br></br>
              (2022) Lagarta de fogo, junto a Mauro Agustín Cruz, curada por Max Gomez Canle. Residencia Fidalga. Sao Paulo.
              <br></br>
              (2022) Salón Nacional Jamaica Posible 
              <br></br>
              (2021) Perdedores Hermosos, junto a Renata Molinari, Belen Boeris y Maria Florencia, CCSM. 
              <br></br>
              (2021) Secreta noche nuestra. Rosas AC. 
              <br></br>
              (2021) Tegumento. curada por Max Zimmerman, Fundacion el mirador
              <br></br>
              (2020) Mientras mis sueños sangran, curador Joaquín Barrera. Fundacion el mirador
              <br></br>
              (2019) Banda Pop Metal ,Cervio Martini, Renata Molinari, y Santiago Licata. Roseti
              <br></br>
              (2018) El burro y la moto, curada por Nicanor Araoz y Flavia Da Rin, Fundación el mirador. 
              </p>

            </div>
            <div className={styles.artistSection}>

              <p className={styles.subtitle}>RESIDENCIAS</p>

              <p>
              (2022) Residencia Fidalga, Sao Paulo.
              </p>

            </div>
            
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/MARCO PIMENTEL.pdf" target="_blank">PDF</a>
            </div>
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.instagram.com/marco_pimentel__/" target="_blank">Instagram</a>
              <a href="https://www.artsy.net/artist/marco-pimentel" target="_blank">Web</a>
            </div>
          </div>
        </div>



      </motion.div>
      </main>
    );
  }
  