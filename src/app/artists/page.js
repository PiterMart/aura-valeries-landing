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
                src="/alvarogodoyObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Alvaro Godoy</p>

            </div> */}
          </Link>
          <Link href="./eliasLeiro">
            <div className={styles.imgContainer}>
              <Image
                src="/eliasT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%', pointerEvents: 'none'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Elias Leiro</p>

            </div> */}
          </Link>
          <Link href="./facundoBelen">
            <div className={styles.imgContainer}>
              <Image
                src="/facubelenT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Facundo Belen</p>

            </div> */}
          </Link>
          <Link href="./facundoLugea">
            <div className={styles.imgContainer}>
              <Image
                src="/faculugeaT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Facundo Lugea</p>

            </div> */}
          </Link>
          <Link href="/fannyedithDiaz">
            <div className={styles.imgContainer}>
              <Image
                src="/fannyT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', objectFit: 'cover', borderRadius: '50%' }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Fanny Edith Diaz</p>

            </div> */}
          </Link>
          <Link href="./francoPalioff">
            <div className={styles.imgContainer}>
              <Image
                src="/francopalioffT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Franco Palioff</p>

            </div> */}
          </Link>
          <Link href="./frenetikVoid">
            <div className={styles.imgContainer}>
              <Image
                src="/frenetikvoidObra.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Frenetik Void</p>

            </div> */}
          </Link>
          <Link href="./julietaprotoBoca">
            <div className={styles.imgContainer}>
              <Image
                src="/juliprotoT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Julieta Proto Boca</p>

            </div> */}
          </Link>
          <Link href="./leonardoSanchez">
            <div className={styles.imgContainer}>
              <Image
                src="/leosnchezT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Leonardo Sanchez</p>

            </div> */}
          </Link>
          <Link href="./marcoPimentel">
            <div className={styles.imgContainer}>
              <Image
                src="/marcopimentelObra.jpeg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Marco Pimentel</p>

            </div> */}
          </Link>
          <Link href="./vladimirmarutsBallet">
            <div className={styles.imgContainer}>
              <Image
                src="/marutsT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p> Vladimir Maruts Ballet</p>

            </div> */}
          </Link>
          <Link href="./matiasTomas">
            <div className={styles.imgContainer}>
              <Image
                src="/matitomasT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Matias Tomas</p>

            </div> */}
          </Link>
          <Link href="./sofiaCastro">
            <div className={styles.imgContainer}>
              <Image
                src="/soficastroT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Sofia Castro</p>

            </div> */}
          </Link>
          <Link href="./tomoCabrera">
            <div className={styles.imgContainer}>
              <Image
                src="/tomocabreraObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Tomo Cabrera</p>

            </div> */}
          </Link>
          <Link href="./trinidadmetzBarra">
            <div className={styles.imgContainer}>
              <Image
                src="/triniT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Trinidad Metz Brea</p>

            </div> */}
          </Link>
          <Link href="./valentinaQuintero">
            <div className={styles.imgContainer}>
              <Image
                src="/valentineT.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            {/* <div className={styles.dataContainer}>
              <p>Valentina Quintero</p>

            </div> */}
          </Link>
        </div>
      </motion.div>
    </main>
    );
  }
  