import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";


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
              src="/valeriesLogo.png"
              alt="Valeries"
              width={60}
              height={60}
              priority
            />

            </Link>
          </div>
          <div className={styles.list}>
            <ul>
              <li><Link href="/artists">Artistas</Link></li>
              <li><Link href="/exhibitions">Exhibiciones</Link></li>
              <li><Link href="/contact">Contacto</Link></li>
            </ul>
          </div>
          <div>
          </div>
        </div>

        {children}

        <div className={styles.footer}>
          <p className={styles.title} style={{textAlign: 'center'}}>Manifesto</p>

          <div className={styles.contentSection} style={{borderTop: '0px solid #ffffff', marginTop: '1rem'}}>
            <p>
            Valerie es una galería de arte contemporáneo dirigida por Jimena Lusi, Xul Jan y Sandro Guevara. Es un espacio de cruce de lenguajes teniendo como núcleo las artes visuales, que pondera el trabajo colaborativo entre artistas, diseñadores, músicos, curadores y gestores. Nos excitan los desafíos y los artistas apasionados, la moda y el futuro, las obras que  auguran ese espíritu que ama los días de sol, las girl-girls, las boy-girls, los girl-boys y los boy-boys. El punk, la contracultura, el decolonialismo y la rebelión juvenil; es nuestra utopía que tiene objetivos múltiples
            es proyectar una imagen de potencialidad y posibilidad
            en nombre de otro tiempo y otro lugar, socavando el tejido de la realidad.
            Una imagen intermedial del futuro,
            Negamos el presente que nos entristece.
            Nuestro organismo como una ilegalidad,
            ninguna legalidad excepto el placer.
            Nuestra factoría. 

            </p>
          </div>
          <div className={styles.contentSection} style={{borderTop: '1px solid #ffffff'}}>
            <p className={styles.subtitle}>
              Artistas representados
            </p>
            <p>
              Alvaro Godoy /
              Elias Leiro /
              Facundo Belen /
              Facundo Jesus Lugea /
              Fanny Diaz /
              Franco Palioff /
              Frenetik Void /
              Julieta Proto Boca /
              Leonardo Sanchez /
              Marco Pimentel /
              Vladimir Maruts Ballet /
              Matias Tomas /
              Sofia Castro /
              Tomo Cabrera /
              Trinidad Metz Brea /
              Valentina Quintero
              

              </p>
          </div>
          <div className={styles.contentSection} style={{borderTop: '1px solid #ffffff'}}>
            <p>
              <a href="mailto:valerie@valeriesfactory.com">
              valerie@valeriesfactory.com
              </a>
            </p>
            <a href="https://www.instagram.com/valeries_factory/" target="blank">Instagram</a>
          </div>
          <div className={styles.contentSection} style={{borderTop: '1px solid #ffffff'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4908106012235!2d-58.4446443!3d-34.5917485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb56bc74fc40d%3A0xde01271c180d65!2sValerie&#39;s%20Factory!5e0!3m2!1ses-419!2sar!4v1712180399625!5m2!1ses-419!2sar" style={{border: '0', marginTop: '5rem'}}width="240" height="135" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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
