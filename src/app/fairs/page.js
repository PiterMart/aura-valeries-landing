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
          <div className={styles.content} style={{marginTop: '0px', borderTop: '0px'}}>
            {/* <h1 className={styles.title} style={{textAlign: 'center'}}>Exhibiciones</h1> */}

            <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
              <div className={styles.exhibitions}>
                <div className={styles.exhibition_info}>
                <p className={styles.title}>Arte BA 2024</p>
                <p className={styles.subtitle}>Sección principal</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}>Trinidad Metz Brea / Valentina Quintero / Julieta Proto Boca</p>
                <p className={styles.subtitle}>Trastienda</p>
                <p className={styles.exhibition_text}>Sofia Castro / Frenetik Void / Vladimir Maruts Ballet / Pastel / Samantha Ferro / Julian Brangold</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                </div>
                <div className={styles.imageContainer}>
                  <Image
                        src="/exhibiciones/arteBA20241.jpg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                        alt="Picture of the author"
                  />
                  <Image
                    src="/exhibiciones/arteBA20242.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                    alt="Picture of the author"
                  />
                  <Image
                    src="/exhibiciones/arteBA20243.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                    alt="Picture of the author"
                  />
                  <Image
                    src="/exhibiciones/arteBA20244.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                    alt="Picture of the author"
                  />
                  <Image
                    src="/exhibiciones/arteBA20245.jpg"
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
                  <p className={styles.title}>Arte BA 2023</p>
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
                  <p className={styles.title}>Arte BA 2023</p>
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
                <p className={styles.title}>Arte Ba 2022</p>
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
  