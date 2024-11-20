"use client"
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import {motion} from "framer-motion";


export default function Artists() {

    return (
      <main className={styles.main}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
        transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 }
        }}>
        <div className={styles.artistList}>
          <Link href="./alvaroGodoy">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/alvarogodoyObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Alvaro Godoy</p>

            </div>
          </Link>
          <Link href="./eliasLeiro">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/eliasT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%', pointerEvents: 'none'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Elias Leiro</p>

            </div>
          </Link>
          <Link href="./facundoBelen">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/facubelenT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Facundo Belen</p>

            </div>
          </Link>
          <Link href="./facundoLugea">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/faculugeaT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Facundo Lugea</p>

            </div>
          </Link>
          <Link href="/fannyedithDiaz">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/fannyT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', objectFit: 'cover', borderRadius: '50%' }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Fanny Edith Diaz</p>

            </div>
          </Link>
          <Link href="./frenetikVoid">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/frenetikvoidObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Frenetik Void</p>

            </div>
          </Link>
          <Link href="./julianBrangold">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/julianbrangoldObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Julian Brangold</p>
            </div>
          </Link>
          <Link href="./julietaprotoBoca">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/juliprotoT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Julieta Proto Boca</p>

            </div>
          </Link>
          <Link href="./leonardoSanchez">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/leosnchezT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Leonardo Sanchez</p>

            </div>
          </Link>
          <Link href="./marcoPimentel">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/marcopimentelObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Marco Pimentel</p>

            </div>
          </Link>
          <Link href="./vladimirmarutsBallet">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/marutsT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p> Vladimir Maruts Ballet</p>

            </div>
          </Link>
          <Link href="./matiasTomas">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/matitomasT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Matias Tomas</p>

            </div>
          </Link>
          <Link href="./pastel">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/pastelObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Pastel</p>
            </div>
          </Link>
          <Link href="./samanthaFerro">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/samantha ferro obra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Samantha Ferro</p>
            </div>
          </Link>
          <Link href="./sofiaCastro">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/soficastroT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Sofia Castro</p>

            </div>
          </Link>
          <Link href="./tomoCabrera">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/tomocabreraObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Tomo Cabrera</p>

            </div>
          </Link>
          <Link href="./trinidadmetzBarra">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/triniT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Trinidad Metz Brea</p>

            </div>
          </Link>
          <Link href="./valentinaQuintero">
            <div className={styles.imgContainer}>
              <Image
                src="/artists/valentineT.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Valentina Quintero</p>

            </div>
          </Link>
        </div>
      </motion.div>
    </main>
    );
  }
  