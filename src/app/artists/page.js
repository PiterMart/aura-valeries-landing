import styles from "../page.module.css";

export default function Artists() {
    return (
      <main className={styles.main}>
        <div>
          <h1>Artists</h1>
        </div>
        <div className={styles.artistList}>
            <ul>
              <li>Alvaro Godoy</li>
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
  