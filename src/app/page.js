import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/valeriesLogo2.png"
          alt="Next.js Logo"
          width={640}
          height={360}
          priority
        />
      </div>
    </main>
  );
}
