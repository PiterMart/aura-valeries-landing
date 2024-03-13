import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>

        <Image
          className={styles.logo}
          src="/valeriesLogo2.png"
          alt="Valeries factory"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
        />
      </div>
    </main>
  );
}
