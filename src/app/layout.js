import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "./components/newsletter";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Valeries Factory",
  description: "Valerie es una galería fundada en 2021 e instalada en Villa Crespo, una fábrica que aloja la práctica de todxs los artistas y hacedores de la galería. Nos llamamos así en tributo a Valerie Solanas, para traerla como pregunta, ¿qué hubiese sido de la historia del arte, del pop, si ella hubiese tenido su propia Factory?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.nav}>
          <div>
            <Link href="/">
            <Image
              src="/valeriesLogoVERDE.png"
              alt="Valeries"
              width={60}
              height={60}
              className={styles.navImage}
              priority
            />

            </Link>
          </div>
          <div className={styles.list}>
            <ul>
              <li><Link href="/artists">Artistas</Link></li>
              {/* <p>/</p> */}
              <li><Link href="/exhibitions">Exhibiciones</Link></li>
              {/* <p>/</p> */}
              <li><Link href="/fairs">Ferias</Link></li>
              {/* <p>/</p> */}
              <li><Link href="/contact">Contacto</Link></li>
            </ul>
          </div>
        </div>

        {children}

        <div className={styles.footer}>
          <p className={styles.title} style={{textAlign: 'center'}}>Manifesto</p>

          <div className={styles.contentSection} style={{borderTop: '0px solid #ffffff', marginTop: '1rem'}}>
            <p>
              Valerie’s Factory es una galería de arte contemporáneo dirigida por Jimena Lusi, Xul Jan y Sandro Guevara. Es un espacio de cruce de lenguajes teniendo como núcleo las artes visuales, que pondera el trabajo colaborativo entre artistas, diseñadores, músicxs, curadores y gestores. 
              Nos excitan los desafíos y lxs artistas apasionadxs, 
              la moda y el futuro, las obras que  auguran ese espíritu 
              que ama los días de sol, las girl-girls, las boy-girls, 
              los girl-boys y los boy-boys. 
              Nuestra utopía tiene objetivos múltiples;
              es proyectar una imagen de potencialidad y posibilidad
              en nombre de otro tiempo y otro lugar, socavando el tejido de la realidad.
              Una imagen intermedial del futuro.
              Negamos el presente que nos entristece.
              Nuestrx organismo como una ilegalidad,
              ninguna legalidad excepto el placer.
              Nuestra factoría.
            </p>
          </div>
          <div className={styles.contentSection} style={{borderTop: '1px solid #ffffff'}}>
            <p className={styles.subtitle}>
              Artistas representados
            </p>
            <p>
            <Link href="./alvaroGodoy"> Alvaro Godoy /</Link>
            <Link href="./eliasLeiro"> Elias Leiro /</Link>
            <Link href="./facundoBelen">  Facundo Belen /</Link>
            <Link href="./facundoLugea">  Facundo Jesus Lugea /</Link>
            {/* <Link href="/fannyedithDiaz">  Fanny Diaz /</Link> */}
            <Link href="./frenetikVoid">  Frenetik Void /</Link>
            <Link href="./francoPalioff">  Franco Pailoff /</Link>
            <Link href="./julianBrangold">  Julian Brangold /</Link>
            <Link href="./julietaprotoBoca">  Julieta Proto Boca /</Link>
            <Link href="./leonardoSanchez">  Leonardo Sanchez /</Link>
            <Link href="./marcoPimentel">  Marco Pimentel /</Link>
            <Link href="./vladimirmarutsBallet">  Vladimir Maruts Ballet /</Link>
            {/* <Link href="./matiasTomas">  Matias Tomas /</Link> */}
            <Link href="./nanaSchlez">  Nana Schlez /</Link>
            <Link href="./pastel">  Pastel /</Link>
            <Link href="./samanthaFerro">  Samantha Ferro /</Link>
            <Link href="./sofiaCastro">  Sofia Castro /</Link>
            <Link href="./tomoCabrera">  Tomo Cabrera /</Link>
            <Link href="./trinidadmetzBarra">  Trinidad Metz Brea /</Link>
            <Link href="./valentinaQuintero">  Valentina Quintero</Link>
              </p>
          </div>
          <div className={styles.contentSection} style={{borderTop: '1px solid #ffffff'}}>
            <div style={{gap: '2rem', display: 'flex', flexDirection: 'column', alignItems: "baseline", alignSelf: "baseline"}}>
              <p>
                <a href="mailto:valerie@valeriesfactory.com">
                valerie@valeriesfactory.com
                </a>
              </p>
              <a href="https://www.instagram.com/valeries_factory/" target="blank">Instagram</a>
            </div>
            {/* <Newsletter/> */}
          </div>
          <div className={styles.contentSection} style={{borderTop: '1px solid #ffffff'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4908106012235!2d-58.4446443!3d-34.5917485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb56bc74fc40d%3A0xde01271c180d65!2sValerie&#39;s%20Factory!5e0!3m2!1ses-419!2sar!4v1712180399625!5m2!1ses-419!2sar" style={{border: '0', marginTop: '5rem'}}width="240" height="135" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <Link href="/">
            <Image
                    src="/valeriesLogoWhite.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', maxWidth: '15rem', paddingTop: '5rem' }}
                    alt="Picture of the author"
            />
            </Link>
          </div>
          
        </div>
        </body>
    </html>
  );
}
