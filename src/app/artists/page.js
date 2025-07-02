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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FalvaroGodoy%2FalvarogodoyObra.jpg?alt=media&token=1c42d740-f989-4833-8a77-eb50d59467c0"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FeliasLeiro%2FeliasleiroObra.jpg?alt=media&token=f299807e-ae07-482e-9986-e741999b1193"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FfacundoBelen%2FfacubelenT.jpg?alt=media&token=7dfaee97-dbc5-4486-af2f-750f9603eb52"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FfacundoLugea%2FfacundolugeaObra.jpg?alt=media&token=25f2582b-5db0-47e9-80bc-5cc8f8067426"
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
          <Link href="./francoPalioff">
            <div className={styles.imgContainer}>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FfrancoPalioff%2FfrancopalioffT.jpg?alt=media&token=087e6dc7-1290-4312-9dcc-e3edfc3991f9"
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
          <Link href="./frenetikVoid">
            <div className={styles.imgContainer}>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FfrenetikVoid%2FfrenetikvoidObra.jpg?alt=media&token=1a198362-c070-4e47-a703-c3d4595f4751"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FjulianBarangold%2FjulianbrangoldObra.jpg?alt=media&token=5c873be2-1d5a-465a-86b9-fef3f3abd10c"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FjulietaprotoBoca%2FjuliprotoT.jpg?alt=media&token=6cd78531-4b06-4c04-9837-c6f8c38223ac"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FleonardoSanchez%2FleosnchezT.jpg?alt=media&token=4b408b95-f46e-44ed-a3a3-dba7fb993c7c"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FmarcoPimentel%2FmarcopimentelObra.jpg?alt=media&token=31b8cc7f-0888-48c5-86f5-45c28043271d"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FvladimirmartusBallet%2FvladimirmarutsT.jpg?alt=media&token=d3893dad-927c-4301-9e52-48bcea80ddd6"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer} style={{maxWidth: '158px'}}>
              <p> Vladimir Maruts Ballet</p>

            </div>
          </Link>
          {/* <Link href="./matiasTomas">
            <div className={styles.imgContainer}>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FmatiasTomas%2FmatitomasT.jpg?alt=media&token=b11e7388-1fe5-41a1-960c-e71e3b30dbff"
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
          </Link> */}
          <Link href="./nanaSchlez">
            <div className={styles.imgContainer}>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FnanaSchelz%2FnanaSchelzObra.jpg?alt=media&token=d8d87ab9-f029-4632-9b1b-1485c7d7fc67"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '10rem', maxWidth: '150px', "overflow-clip-margin": 'content-box', objectFit: 'cover', borderRadius: '50%'  }}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.dataContainer}>
              <p>Nana Schlez</p>

            </div>
          </Link>
          <Link href="./pastel">
            <div className={styles.imgContainer}>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2Fpastel%2FpastelObra.jpg?alt=media&token=97e011cf-bb94-42aa-89d1-7a33761544df"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FsamanthaFerro%2FsamanthaferroObra.jpg?alt=media&token=6869098d-f83b-402f-931c-d7e00979b1c8"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FsofiaCastro%2FsoficastroT.jpg?alt=media&token=86d69b34-2855-4a6c-8f94-936f7f02b45a"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FtomoCabrera%2FtomocabreraObra.jpg?alt=media&token=c9151833-53ca-45ea-88e8-6f1130f45d6f"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FtrinidadmetzBarra%2FtrinidametzbreaObra.jpg?alt=media&token=e58f9fb7-af2e-4bf8-b45b-a61dab026c5d"
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
                src="https://firebasestorage.googleapis.com/v0/b/valeries-factory.appspot.com/o/artistas%2FvalentinaQuintero%2FvalentinaquinteroT.jpg?alt=media&token=9814eac5-ae41-416f-a79b-c5bbc6b6ec5f"
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
  