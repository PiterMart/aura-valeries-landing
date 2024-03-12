import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function Artists() {

    return (
      <main className={styles.main}>
        <div>
          <h1>Artists</h1>
        </div>
        <div className={styles.artistList}>
          {/* <a>
            <Image
              src="/alvarogodoyObra.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
              alt="Picture of the author"
            />
          </a> */}
            <ul>
              <li><Link href="./alvaroGodoy">Alvaro Godoy</Link></li>
              <li>Elias Leiro</li>
              <li>Facundo Belen</li>
              <li>Facundo Lugea</li>
              <li>Fanny Edith Diazt</li>
              <li>Franco Palioff</li>
              <li>Frenetik Void</li>
              <li>Julieta Proto Boca</li>
              <li>Leonardo Sanchez</li>
              <li>Marco Pimentel</li>
              <li>Matias Tomas</li>
              <li>Sofia Castro</li>
              <li>Tomo Cabrera</li>
              <li>Trinidad Metz Brea</li>
              <li>Valentina Quintero AKA VALENTINE</li>
              <li>Vladimir Martus</li>
            </ul>
          </div>
      </main>
    );
  }
  