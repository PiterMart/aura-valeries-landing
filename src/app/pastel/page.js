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
          <p className={styles.title}>Pastel</p>

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
                src="/artists/pastelObra.jpg"
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
            <p className={styles.subtitle}>.</p>
            <Image
                src="/artists/pastelCarnet.jpg"
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
              Francisco Díaz Scotto es pintor y arquitecto (UBA). Lejos de la arquitectura convencional, entiende el trabajo en el espacio público como una acupuntura urbana. La mayoría de los contextos murales son los "no-lugares". Aquellos que están relegados de los diseños urbanos irregulares y no inclusivos. Muchas de sus obras están ubicadas en fachadas que funcionan como lienzos para sus pinturas. La búsqueda principal y más compleja está orientada a crear un diálogo natural y respetuoso con el entorno, ya que los límites de la obra se entienden entre el espacio pintado y su entorno. La flora que utiliza como referencia en sus pinturas es la que crece en las grietas de las aceras y fachadas. Estas grietas, generadas por un proceso de construcción deficiente, son un reflejo de la necesidad humana de controlar el espacio para un uso racional y autárquico. Tomar estas pequeñas plantas y glorificarlas con su cambio de escala puede ser un mecanismo para cuestionar los métodos modernos que tenemos como sociedad.
              </p>

            </motion.div>
            <div className={styles.artistSection} id="statement">
              <p className={styles.subtitle}>STATEMENT</p>
              <p>
              En su taller, Francisco aplica los mismos mecanismos de búsqueda, pero siendo él mismo el límite externo de análisis, por lo que se construye una obra profundamente personal que pone en juego el registro y la memoria emocional de sus raíces misioneras. El crepúsculo, el hogar, la selva y los perros impulsan el desarrollo integral de su trabajo.
              </p>
            </div>
            <div className={styles.artistSection} id="muestras">

              <p className={styles.subtitle}>MUESTRAS</p>

              <p>
              (2024) Autoroute mural Project / Keskastel, France Intemperie Mutante Group Show / CCEBA / Buenos Aires, Argentina 10 yr anniversary  Group Show / Hashimoto Gallery / Los Angeles, USA Waregem Mural Project / Waregem, Belgium
              <br></br>
              <br></br>
              (2023) Where dreams touch ground Solo Show / Hashimoto Gallery / Los Angeles, USA Angers Mural Project / Angers, France Ville de Vercorin Mural / Bourgogne, France Metro Project Châtelet / Paris, France
              <br></br>
              <br></br>
              (2022) Patio Misionero Solo Show / Hashimoto Gallery / San Francisco, USA Vessel Group Show / Hashimoto Gallery / Los Angeles, USA Inspire Festival / Normandie, France Mural city Project / Mons, Belgium Mural city Project / Vercorin Switzerland Nalata Festival / São Paulo, Brazil Miami Art Fair / Hashimoto Gallery / Miami USA
              <br></br>
              <br></br>
              (2021) Urbanmorphogenesis / Solnechnodolsk, Russia Public Art Program Underdogs Gallery / Lisbon, Portugal Vessel Group Show /Hashimoto Gallery / San Francisco, USA Inaugural Group Show / Hashimoto Gallery / Los Angeles, USA
              <br></br>
              <br></br>
              (2020) SM Pinta Bien / Buenos Aires, Argentina B. de Jussieu Project Versailles/ Paris, France
              <br></br>
              <br></br>
              (2019) Mural city Project / Höganäs, Suecia Van Eyck kultur program /Ghent, Belgica Mural Project Underdogs Gallery / Lisbon, Portugal Barracas Community center / Buenos Aires, Argentina
              <br></br>
              <br></br>
              (2018) DEUTSCHEHAUS Mural / Ho Chi Minh, Vietnam TERRITORIO, Group Show / Buenos Aires, Argentina Marchet de Batignolles Mural / Paris, Francia
              UPEA / Helsinki, Finland WOOL / Covilha, Portugal “Chlorophyl and capital” Group Show / Lillestrøm, Noruega Festiwall / Sicily, Italy
              <br></br>
              <br></br>
              (2017) 516 Mural Program / Albuquerque, USA San Leandro Mural / California, USA Crystalship Festival / Oostend, Belgium Primary Skole Wall / Oslo, Norway Pop-up show / 488 Gallery / Buenos Aires, Argentina “Prisma” Group show / Colab. Gallery / Weil am Rhein, Germany Forum of Climate change / Gaia, Portugal Mural Project / Paris, France Upnorth Festival / Røst, Norway “Space-landscape” solo show / Athen B. Gallery / Oakland, USA
              <br></br>
              <br></br>
              (2016) Color BA / Buenos Aires, Argentina Unexpected Project / Arkansas, USA Artmosphere Public art Biennale / Moscow, Russia Mural Program / Oslo, Norway Art United Us / Kiev, Ukraine No Blank Walls / Greensboro, USA Le Basse Project / Manila, Philippines Piel de Serpiente / Museum of Architercture / Buenos Aires, Argentina “Plenty” Group Show / Athen B. Gallery / Oakland, USA 1xRun Residence / Detroit, USA. Santurce es Ley / San Juan, Puerto Rico
              <br></br>
              <br></br>
              (2015) Scope Art Fair / Res Non Verba / Miami, USA Canvas Festival / West Palm Beach, USA Walls 352 Festival / Gainesville, USA Dreamers Art Festival / Playa del Carmen, México Residencia Gorila / Tulum, México “Lethal” Solo Show / Galería Balneario / Querétaro, Mexico Swab Art Fair / Res Non Verba Gallery / Barcelona, Spain “Tirar de la cuerda” Group Show / Fundación ICBC / Buenos Aires, Argentina Walk and Talk Festival / Açores Islands Via Vai Project / Racale, Italy Milestone Project / Girona, Spain Le Mur / Niort, France Memorie Urbane Festival / Gaeta, Italy “Fallas” duo show / Montana Gallery / Barcelona, Spain Public Festival / Perth, Australia Residencia Vatelón / Villa Soriano, Uruguay
              <br></br>
              <br></br>
              (2014) Artesano Project / Dominican Republic Scope Art Fair / Vice Gallery / Miami, USA “Friends and Family” collective show / I 305 Gallery / Miami, USA Festival Muropolis / Mendoza, Argentina Festival Asalto / Zaragoza, Spain Festival La Escocesa / Barcelona, Spain Open Walls Festival / Barcelona, Spain Fordistas Residence / Miami, USA “Materia Prima”  duo show / I 305 Gallery / Miami, USA Bien Urbain Festival / Besançon, France
              Trafﬁc Design Festival / Gdynia, Poland VIA VAI Project / Racale, Italy Vatelón Residence / Villa Soriano, Uruguay “Motin”, collective show / Dinamica Gallery / Buenos Aires, Argentina
              <br></br>
              <br></br>
              (2013) Mirrorless Project / Pastel+2501 / Wynwood, USA “Friends and Family”, collective show / I 305 Gallery / Miami, USA Los Muros Hablan Festival / New York, USA Living Walls Conference / Atlanta, USA “Dasein”, solo show / Galería Hollywood in Cambodia /Buenos Aires, Argentina
              <br></br>
              <br></br>
              (2012) Living Walls Space/ Wynwood / Miami “Existencialismo”, solo show / Galería Honeycomb/ Buenos Aires, Argentina Talking Walls /MALBA/ Conferencia / Buenos Aires, Argentina THE WALLMANIA / Buenos Aires, Argentina
              <br></br>
              <br></br>
              (2011) Salón Marwaii / Muestra colectiva / Buenos Aires MOS Festival / Buenos Aires, Argentina GARIBALDI PUM / Proyecto de Revitalización Urbano / Buenos Aires, Argentina TECNOPOLIS / Buenos Aires, Argentina OPEN STUDIO / Fundación Rozenblum / Buenos Aires, Argentina ARTAQ AWARDS / Mención en pintura / Francia Gallerie Conﬂuences / Muestra Colectiva / Lyons, France Espace ART22 / Muestra Colectiva / Brussels, Belgium
              <br></br>
              <br></br>
              (2010) ARTAQ URBAN ART AWARDS / Muestra Colectiva / Stättbad / Berlin, Germany Espace Beaurepaire / Muestra Colectiva / Paris, France Galería Proyecto A / Buenos Aires, Argentina AFUERA! / Centro Cultural España / Córdoba, Argentina BIENAL ARTESACRO /(UCA) / Buenos Aires, Argentina SELECCION CONCURSO DE PINTURA / (UADE) / Buenos Aires, Argentina 200 / Centro Cultural Vicente Lopez / Muestra Colectiva / Buenos Aires, Argentina
              <br></br>
              <br></br>
              (2009) GRAFFITIMUNDO EXHIBITION / Casa L’Inc / Buenos Aires, Argentina Galeria Proyecto A / Muestra Colectiva / Buenos Aires, Argentina
              </p>
            </div>
{/*             
            <div className={styles.artistSection} id="catalogo">

              <p className={styles.subtitle}>CATÁLOGO</p>
              <a href="/JULI PROTO.pdf" target="_blank">PDF</a>
            </div> */}
            <div className={styles.artistSection} id="redes">

              <p className={styles.subtitle}>REDES</p>
              <a href="https://www.instagram.com/pastelfd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">Instagram</a>
            </div>
          </div>
        </div>
      </motion.div>
      </main>
    );
  }
  