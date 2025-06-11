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
        <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Creer o Reventar</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>
                <Link href="./facundoBelen">  Facundo Belen</Link> 
                </p>
                <p className={styles.subtitle}>Diseño expositivo</p>
                <p className={styles.exhibition_text}> Endi Ruiz</p>
                <p className={styles.subtitle}>Buenos Aires / 2025</p>
                {/* <a href="/VF_EliasLeiro.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a> */}
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/CreerOReventar1.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA C"
                />
                <Image
                      src="/exhibiciones/CreerOReventar2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA CS"
                />
                <Image
                      src="/exhibiciones/CreerOReventar3.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA C"
                />
              </div>             
            </div>
          </div>
        <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Nature Is Healing</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}>
                  <Link href="./nanaSchlez"> Nana Schlez </Link> 
                </p>
                <p className={styles.subtitle}>Curaduría</p>
                <p className={styles.exhibition_text}>Carlos Gutiérrez </p>
                <p className={styles.subtitle}>Buenos Aires / 2025</p>
                {/* <a href="/VF_EliasLeiro.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a> */}
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/NATURE_1.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA C"
                />
                <Image
                      src="/exhibiciones/NATURE_2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA CS"
                />
                <Image
                      src="/exhibiciones/NATURE_3.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA C"
                />
                <Image
                      src="/exhibiciones/NATURE_4.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA C"
                />
              </div>             
            </div>
          </div>
          <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Sala C</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}>
                  <Link href="https://www.instagram.com/natachavoliakovsky/"> Natacha Voliakovsky /</Link> 
                  <Link href="./alvaroGodoy"> Alvaro Godoy / </Link> 
                  <Link href="">  Fanny Diaz / </Link>
                  <Link href="./leonardoSanchez">  Leonardo Sanchez / </Link>
                  <Link href="./marcoPimentel">  Marco Pimentel / </Link> 
                  <Link href="./matiasTomas">  Matias Tomas /</Link>
                  <Link href="./trinidadmetzBarra">  Trinidad Metz Brea </Link>
                </p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                {/* <a href="/VF_EliasLeiro.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a> */}
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/SALAC1.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA C"
                />
                <Image
                      src="/exhibiciones/SALAC2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA CS"
                />
                <Image
                      src="/exhibiciones/SALAC3.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="SALA C"
                />
              </div>             
            </div>
          </div>
          
        <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Flores salvajes</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}><Link href="./julietaprotoBoca"> Julieta Proto Boca  </Link></p>
                <p className={styles.subtitle}>Curaduría</p>
                <p className={styles.exhibition_text}>Carlos Baragli </p>
                <p className={styles.subtitle}>Texto</p>
                <p className={styles.exhibition_text}>Juan Laxagueborde</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                {/* <a href="/VF_EliasLeiro.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a> */}
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/FLORESSALVAJES.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="FLORESSALVAJES"
                />
                <Image
                      src="/exhibiciones/FLORESSALVAJES2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="FLORESSALVAJES"
                />
                <Image
                      src="/exhibiciones/FLORESSALVAJES3.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="FLORESSALVAJES"
                />
              </div>             
            </div>
          </div>
        <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>La mitad entre el cielo y el infinito</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}><Link href="./alvaroGodoy">  Álvaro Godoy </Link></p>
                <p className={styles.subtitle}>Texto</p>
                <p className={styles.exhibition_text}>Tobías Mao</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                {/* <a href="/VF_EliasLeiro.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a> */}
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/LAMITAD.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="LA MITAD ENTRE EL CIELO Y EL INFINITO"
                />
                <Image
                      src="/exhibiciones/LAMITAD2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="LA MITAD ENTRE EL CIELO Y EL INFINITO"
                />
                <Image
                      src="/exhibiciones/LAMITAD3.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="LA MITAD ENTRE EL CIELO Y EL INFINITO"
                />
              </div>             
            </div>
          </div>
          {/* <h1 className={styles.title} style={{textAlign: 'center'}}>Exhibiciones</h1> */}
          <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Para Editar</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}><Link href="./frenetikVoid">  Frenetik Void </Link></p>
                <p className={styles.subtitle}>Curaduría</p>
                <p className={styles.exhibition_text}>Carlos Huffmann</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                {/* <a href="/VF_EliasLeiro.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a> */}
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/PARAEDITAR1.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/PARAEDITAR2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/PARAEDITAR3.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
              </div>             
            </div>
          </div>
          <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Apotropaica</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}><Link href="./samanthaFerro">  Samantha Ferro </Link></p>
                <p className={styles.subtitle}>Text0</p>
                <p className={styles.exhibition_text}>Mercedes López Moreyra</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                {/* <a href="/VF_EliasLeiro.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a> */}
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/APOTROPAICA3.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/APOTROPAICA2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/APOTROPAICA1.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
              </div>             
            </div>
          </div>
          <div className={styles.container} style={{marginTop: '0px', borderTop: '0px'}}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>Cuando Empiece La Temporada</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}><Link href="./eliasLeiro"> Elias Leiro</Link></p>
                <p className={styles.subtitle}>Curaduría</p>
                <p className={styles.exhibition_text}>Julia Volpato</p>
                <p className={styles.subtitle}>Texto</p>
                <p className={styles.exhibition_text}>Lucía Requejo</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                <a href="/VF_EliasLeiro.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a>
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/cuandoEmpiezeLaTemporada.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/cuandoEmpiezeLaTemporada2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/cuandoEmpiezeLaTemporada3.jpg"
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
                <p className={styles.title}>Video</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}><Link href="./leonardoSanchez">  Leonardo Sanchez </Link></p>
                <p className={styles.subtitle}>Curaduría</p>
                <p className={styles.exhibition_text}>Nicanor Aráoz</p>
                <p className={styles.subtitle}>Texto</p>
                <p className={styles.exhibition_text}>Bruno Mendonça</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                <a href="/VF_LeoSanchez.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a>
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/video.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/video2.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/video3.jpg"
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
                <p className={styles.title}>Mundo: Se</p>
                <p className={styles.subtitle}>Artistas</p>
                <p className={styles.exhibition_text}> <Link href="./matiasTomas">  Matias Tomas /</Link> <Link href="./facundoLugea">  Facundo Jesus Lugea </Link></p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                <a href="/VF_MundoSe.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a>
              </div>
              <div className={styles.imageContainer}>
              <Image
                      src="/exhibiciones/mundoSe.jpg"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                      alt="memética"
                />
                <Image
                      src="/exhibiciones/mundoSe2.jpg"
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
                <p className={styles.title}>Valentina</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}><Link href="./valentinaQuintero">  Valentina Quintero</Link></p>
                <p className={styles.subtitle}>Texto</p>
                <p className={styles.exhibition_text}>Leandro Martínez Depietri</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                <a href="/VF_ValentinaQuintero.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a>
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
                <p className={styles.exhibition_text}><Link href="./tomoCabrera">  Tomo Cabrera </Link></p>
                <p className={styles.subtitle}>Mentoría</p>
                <p className={styles.exhibition_text}>Julieta García Vázquez</p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                <a href="/VF_TomoCabrera.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a>
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
                <p className={styles.exhibition_text}>China / <Link href="./julianBrangold">  Julian Brangold </Link> / <Link href="./frenetikVoid">  Frenetik Void /</Link> Mauro Koliva / <Link href="./alvaroGodoy"> Alvaro Godoy </Link> </p>
                <p className={styles.subtitle}>Buenos Aires / 2024</p>
                <a href="/VF_Memetica.pdf" target="_blank" className={styles.subtitle} style={{color: 'red', margin: '1rem'}}>{'>'} PDF {'<'} </a>
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
                <p className={styles.exhibition_text}>
                  <Link href="./alvaroGodoy"> Alvaro Godoy /</Link> 
                  <Link href="./eliasLeiro"> Elias Leiro /</Link> 
                  <Link href="./facundoBelen">  Facundo Belen /</Link> 
                  <Link href="./facundoLugea">  Facundo Jesus Lugea /</Link> 
                  <Link href="">  Fanny Diaz /</Link> 
                  Franco Palioff / 
                  <Link href="./frenetikVoid">  Frenetik Void /</Link> 
                  <Link href="./julietaprotoBoca">  Julieta Proto Boca /</Link> 
                  <Link href="./leonardoSanchez">  Leonardo Sanchez /</Link> 
                  <Link href="./marcoPimentel">  Marco Pimentel /</Link> 
                  <Link href="./vladimirmarutsBallet">  Vladimir Maruts Ballet /</Link> 
                  <Link href="./matiasTomas">  Matias Tomas /</Link> 
                  <Link href="./sofiaCastro">  Sofia Castro /</Link> 
                  <Link href="./tomoCabrera">  Tomo Cabrera /</Link> 
                  <Link href="./trinidadmetzBarra">  Trinidad Metz Brea /</Link> 
                  <Link href="./valentinaQuintero">  Valentina Quintero</Link>
                </p>
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
              <p className={styles.title}>Ferales</p>
              <p className={styles.subtitle}>Aura</p>
              <p className={styles.subtitle}>Artistas</p>
              <p className={styles.exhibition_text}><Link href="./trinidadmetzBarra">  Trinidad Metz Brea </Link> </p>
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
                <p className={styles.exhibition_text}>
                  <Link href="./julianBrangold">  Julian Brangold /</Link>
                  <Link href="./frenetikVoid">  Frenetik Void / </Link>
                   Artdao
                </p>
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
                <p className={styles.exhibition_text}><Link href="./vladimirmarutsBallet">  Vladimir Maruts Ballet </Link></p>
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
                <p className={styles.exhibition_text}><Link href="./julietaprotoBoca">  Julieta Proto Boca </Link></p>
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
              <p className={styles.exhibition_text}>
                Adrian Quiroz / 
                Ana Vallejo / 
                Archivo de la Memoria Trans / 
                Bett Pavetti / 
                Carlos Cima / 
                Dana Balajovsky / 
                Dana Vitorino / 
                <Link href="">  Fanny Diaz / </Link>
                Foto Estudio Luisita / 
                GagBall / 
                Julia Sbriller / 
                Karina Acosta / 
                Kasa Loka / 
                Leo Sanchez / 
                Marisol Mendez / 
                Mariana Papagni / 
                Óscar Sánchez Gómez / 
                Rafaelly (La Conga Rosa) / 
                Rocío Englender / 
                Thales Pessoa
              </p>
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

          <div className={styles.container}>
            <div className={styles.exhibitions}>
              <div className={styles.exhibition_info}>
                <p className={styles.title}>En El Nombre De Nadie</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}><Link href="./leonardoSanchez">  Leonardo Sanchez </Link></p>
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
                <p className={styles.title}>  Normcore</p>
                <p className={styles.subtitle}>Artista</p>
                <p className={styles.exhibition_text}><Link href="./eliasLeiro"> Elias Leiro </Link></p>
                <p className={styles.subtitle}>Buenos Aires / 2022</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src="/exhibiciones/NORMCORE.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/NORMCORE2.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxWidth: '900px', "overflow-clip-margin": 'content-box', objectFit: 'cover', margin: 'auto'  }}
                  alt="Picture of the author"
                />
                <Image
                  src="/exhibiciones/NORMCORE3.jpg"
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
  