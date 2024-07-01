'use client'
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import {motion} from 'framer-motion';


export default function Artists() {

    return (
      <main className={styles.main}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
        transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 }
        }}>
        <div className={styles.content} style={{marginTop: '0px'}}>
          {/* <h1 className={styles.title} style={{textAlign: 'center'}}>Exhibiciones</h1> */}
          <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Valentina</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>Valentina Quintero </p>
                <p className={styles.subtitle}>Texto</p>
                <p className={styles.exhibition_text}>Leandro Martínez Depietri</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/VALENTINA(2).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/VALENTINA(1).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/VALENTINA(3).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
              </div>             
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>El Publico</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>Tomo Cabrera</p>
                <p className={styles.subtitle}>Mentoría</p>
                <p className={styles.exhibition_text}>Julieta García Vázquez</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/ELPUBLICO(1).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/ELPUBLICO(2).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/ELPUBLICO(3).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
              </div>             
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Memética</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>China / Julian Brangold / Frenetik Void / Mauro Koliva / Álvaro Godoy </p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/MEMETICA(1).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/MEMETICA(2).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/MEMETICA(3).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
              </div>             
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Los Patitos Feos (Colectiva)</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}>Alvaro Godoy / Elias Leiro / Facundo Belen / Facundo Jesus Lugea / Fanny Diaz / Franco Palioff / Frenetik Void / Julieta Proto Boca / Leonardo Sanchez / Marco Pimentel / Maruts Ballet / Matias Tomas / Sofia Castro / Tomo Cabrera / Trinidad Metz Brea / Valentina Quintero.</p>
                <p className={styles.subtitle}>Curaduría</p>
                <p className={styles.exhibition_text}>Raúl Flores </p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
              <a href="/Los_Patitos_Feos.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/losPatitosFeos.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                      src="/exhibiciones/losPatitosFeos2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                      src="/exhibiciones/losPatitosFeos3.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                      src="/exhibiciones/losPatitosFeos4.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
              </div>
              
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
              <p className={styles.title}>Pinta Miami</p>
              <p className={styles.subtitle}>Feria Pinta / sector NEXT</p>
              <p className={styles.subtitle}>Artistas</p>
              <p className={styles.exhibition_text}>Trinidad Metz Brea / Julieta Proto</p>
              <p className={styles.subtitle}>Curaduría</p>
              <p className={styles.exhibition_text}>Giuliana Vidarte</p>
              <p className={styles.subtitle}>Estados Unidos / 2023</p>
              <p className={styles.subtitle}>Aura x Valeries</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/pintaMiami.jpeg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/pintaMiami2.JPG"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/pintaMiami3.jpeg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
              <p className={styles.title}>Ferales</p>
              <p className={styles.subtitle}>Aura</p>
              <p className={styles.subtitle}>Artistas</p>
              <p className={styles.exhibition_text}>Trinidad Metz Brea</p>
              <p className={styles.subtitle}>Curaduría</p>
              <p className={styles.exhibition_text}>Sofía Dourron</p>
              <p className={styles.subtitle}>Argentina / 2023</p>
              </div>
              <div className={styles.imageContainer}>

              <Image
                    src="/exhibiciones/ferales.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                    alt="Picture of the author"
              />
              <Image
                src="/exhibiciones/ferales2.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                alt="Picture of the author"
              />
              <Image
                src="/exhibiciones/ferales3.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                alt="Picture of the author"
              />
              <Image
                src="/exhibiciones/ferales4.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                alt="Picture of the author"
              />


              </div>
              
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Psipsikoko</p>
                <p className={styles.subtitle}>Aura</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}>Julian Brangold / Frenetik Void / Artdao</p>
                <p className={styles.subtitle}>Argentina - 2023</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/psipsikoko.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/psipsikoko2.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/psipsikoko3.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />

              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Papa Urbano 1</p>
                <p className={styles.subtitle}>Aura</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>Vladimir Maruts Ballet</p>
                <p className={styles.subtitle}>Texto</p>
                <p className={styles.exhibition_text}>Jorge Pomar</p>
                <p className={styles.subtitle}>Buenos Aires / 2023</p>
              </div>
              <div className={styles.imageContainer}>
              <Image
                  src="/exhibiciones/papaUrbano2.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                      src="/exhibiciones/papaUrbano.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/papaUrbano3.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />

              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Amniótica</p>
                <p className={styles.subtitle}>Aura</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>Fausto Valiente</p>
                <p className={styles.subtitle}>Texto</p>
                <p className={styles.exhibition_text}>Renata Molinari</p>
                <p className={styles.subtitle}>Argentina / 2023</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/amniotica.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/amniotica2.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/amniotica3.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />

              </div>
            </div>
          </div>
          
          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>En El Nombre De Nadie</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>Leonardo Sanchez</p>
                <p className={styles.subtitle}>Curaduría y Texto</p>
                <p className={styles.exhibition_text}>Nicolas Cuello </p>
                <p className={styles.subtitle}>Buenos Aires / 2022</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/ENELNOMBREDENADIE(1).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/ENELNOMBREDENADIE(2).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/ENELNOMBREDENADIE(3).jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
              </div>             
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Arte BA</p>
                <p className={styles.subtitle}>Utopía</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}>Sofi Castro / Valentina Quintero / Leonardo Sanchez  / Tomo Cabrera / Fanny Díaz / Julieta Proto / Matías Tomás / Elias Leiro </p>
                <p className={styles.subtitle}>Buenos Aires / 2023</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                    src="/exhibiciones/ARTEBA2022 (1).jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                    alt="Picture of the author"
                  />
                  <Image
                    src="/exhibiciones/ARTEBA2022 (2).jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                    alt="Picture of the author"
                  />
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Arte BA</p>
                <p className={styles.subtitle}>Utopía</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}>Aun Helden / Enco / Eva Moro Cafiero / Facundo Jesus Luega / Franco Pailoff / Frenetik Void / Juan Pablo Ferlat / Lila Llunez / Orkgotik / Trinidad Metz Brea</p>
                <p className={styles.subtitle}>Buenos Aires - 2023</p>
                <p className={styles.subtitle}>Aura VTV</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/arteBA2023.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/arteBA20232.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/arteBA20233.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                
              </div>              
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Host de nuestros sueños</p>
                <p className={styles.subtitle}>Aura</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}>Cafiero / Lila Llunez (queerborg) / Cervio Martini</p>
                <p className={styles.subtitle}>Curaduría</p>
                <p className={styles.exhibition_text}>Julieta Tarraubella</p>
                <p className={styles.subtitle}>Argentina / 2023</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/hostNuestrosSuenos.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/hostNuestrosSuenos2.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/hostNuestrosSuenos3.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
              
              </div>
              
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Las Chicas C.</p>
                <p className={styles.subtitle}>Barrakesh</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>Julieta Proto</p>
                <p className={styles.subtitle}>Curaduría</p>
                <p className={styles.exhibition_text}>Gimena Macri</p>
                <p className={styles.subtitle}>Buenos Aires / 2023</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/lasChicasC.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/lasChicasC2.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/lasChicasC3.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />

              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Uiuiui</p>
                <p className={styles.subtitle}>Aura</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>Franco Pailoff</p>
                <p className={styles.subtitle}>Texto</p>
                <p className={styles.exhibition_text}>Jazmín Adler</p>
                <p className={styles.subtitle}>Argentina / 2023</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/uiuiui.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/uiuiui2.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/uiuiui3.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />

              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
              <p className={styles.title}>Novias</p>
              <p className={styles.subtitle}>Barrakesh</p>
              <p className={styles.subtitle}>Artistas</p>
              <p className={styles.exhibition_text}>Adrian Quiroz / Ana Vallejo / Archivo de la Memoria Trans / Bett Pavetti / Carlos Cima / Dana Balajovsky / Dana Vitorino / Fanny Díaz / Foto Estudio Luisita / GagBall / Julia Sbriller / Karina Acosta / Kasa Loka / Leo Sanchez / Marisol Mendez / Mariana Papagni / Óscar Sánchez Gómez / Rafaelly (La Conga Rosa) / Rocío Englender / Thales Pessoa</p>
              <p className={styles.subtitle}>Curaduría</p>
              <p className={styles.exhibition_text}>Luis Juárez / Jimena Lusi </p>
              <p className={styles.subtitle}>Buenos Aires / 2023</p>
              <p className={styles.subtitle}>Valeries x Balam</p>
              </div>
              <div className={styles.imageContainer}>
              <Image
                  src="/exhibiciones/NOVIAS (1).JPG"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/NOVIAS (2).JPG"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/NOVIAS (3).JPG"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/NOVIAS (4).JPG"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
              </div>
            </div>
            
          </div>

          {/* <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Magma Futura</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>Franco Pailoff</p>
                <p className={styles.subtitle}>Aura VTV</p>
                <p className={styles.subtitle}>Uruguay / 2023</p>
              </div>
              <div className={styles.imageContainer}></div>
            </div>
          </div> */}

        

        <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Arte Ba</p>
                <p className={styles.subtitle}>Utopía</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}>Franco Pailoff</p>
                <p className={styles.subtitle}>Aura VTV</p>
                <p className={styles.subtitle}>Argentina / 2022</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                      src="/exhibiciones/arteBA2022.JPG"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/arteBA20222.JPG"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/arteBA20223.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />

              </div>
              
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>SP Arte</p>
                <p className={styles.subtitle}>Bienal De São Paulo</p>
                <p className={styles.subtitle}>Aura</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}>Enco Desgem / Aun Helden</p>
                <p className={styles.subtitle}>Brazil / 2022</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                    src="/exhibiciones/SP.jpeg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                    alt="Picture of the author"
                  />
                  <Image
                    src="/exhibiciones/SP2.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                    alt="Picture of the author"
                  />
              </div>
            </div>
          </div>
        
          </div>
        

        </motion.div>
      </main>
    );
  }
  