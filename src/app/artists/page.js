import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function Artists() {

    return (
      <main className={styles.main}>
        <video autoPlay muted loop style={{ width: '100%', height: '100%', position: 'fixed', objectFit: 'cover', zIndex: '-1', display:
        'block', right: '0', bottom: '0'}}>
        <source src="/auravaleries bloon heart0001_H.264_H.264.mp4" />
      </video>
        <div>
          <h1 className={styles.title}>Artistas</h1>
        </div>
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
            <div className={styles.dataContainer}>
              <p>Alvaro Godoy</p>

            </div>
          </Link>
          <a>
            <div className={styles.imgContainer}>
              <Image
                src="/eliasleiroObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Elias Leiro</p>

            </div>
          </a>
          <a>
            <div className={styles.imgContainer}>
              <Image
                src="/facundobelenObra.jpg"
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
          </a>
          <a>
            <div className={styles.imgContainer}>
              <Image
                src="/facundolugeaObra.jpg"
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
          </a>
          <a>
            <div className={styles.imgContainer}>
              <Image
                src="/fannyedithdiazObra.jpg"
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
          </a>
          <Link href="./alvaroGodoy">
            <div className={styles.imgContainer}>
              <Image
                src="/francopalioffObra.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Franco Palioff</p>

            </div>
          </Link>
          <Link href="./alvaroGodoy">
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
            <div className={styles.dataContainer}>
              <p>Frenetik Void</p>

            </div>
          </Link>
          <Link href="./alvaroGodoy">
            <div className={styles.imgContainer}>
              <Image
                src="/julietaprotoObra.jpg"
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
          <Link href="./alvaroGodoy">
            <div className={styles.imgContainer}>
              <Image
                src="/leonardosanchezObra.jpg"
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
          <Link href="./alvaroGodoy">
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
            <div className={styles.dataContainer}>
              <p>Marco Pimentel</p>

            </div>
          </Link>
          <Link href="./alvaroGodoy">
            <div className={styles.imgContainer}>
              <Image
                src="/marutsballetObra.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Maruts Ballet</p>

            </div>
          </Link>
          <Link href="./alvaroGodoy">
            <div className={styles.imgContainer}>
              <Image
                src="/matiastomasObra.jpeg"
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
          <Link href="./alvaroGodoy">
            <div className={styles.imgContainer}>
              <Image
                src="/sofiacastroObra.jpg"
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
          <Link href="./alvaroGodoy">
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
            <div className={styles.dataContainer}>
              <p>Tomo Cabrera</p>

            </div>
          </Link>
          <Link href="./alvaroGodoy">
            <div className={styles.imgContainer}>
              <Image
                src="/trinidametzbreaObra.jpg"
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
          <Link href="./alvaroGodoy">
            <div className={styles.imgContainer}>
              <Image
                src="/valentinaquinteroObra.jpg"
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
      </main>
    );
  }
  