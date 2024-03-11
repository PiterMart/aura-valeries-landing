import styles from "../page.module.css";
// import Link from "next/link";
import Image from "next/image";


export default function Artists() {

    return (
      <main className={styles.main}>
        <div className="{styles.artist}">

          <p className="{styles.title}">Alvaro Godoy</p>
          
          <Image
            src="/alvarogodoyCarnet.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          
          <div className="{style.artistSection">

          <p id="bio">Alvaro Godoy de pequeño miraba "El banquete telemático" de Federico Kleem sin tener idea de qué se trataba; el excéntrico hombre rubio le resultaba interesante, explicaba cosas que no estaban en Discovery Channel. Hizo la primaria en seis colegios, escuchaba discos de heavy metal de su madre y jugaba mucho solo.
          A los 17 años alquiló su primer taller en una casa tomada por un punk que los jueves hacía fiestas sadomasoquistas. El taller es para él como un laboratorio: un espacio donde las posibilidades se amplían, un lugar con las condiciones necesarias para que algo especial suceda. Ese algo en su caso es variado, pero íntimamente relacionado.
          Actualmente vive y trabaja en la Ciudad Autónoma de Buenos Aires.
          Su forma de avanzar sobre el conocimiento es intuitiva y accidentada. Considera el accidente como una parte esencial de su obra y  algo que le seduce en la de los demás. Intercala investigaciones personales con clases, clínicas y talleres. Adorador de internet y su infinito sustento de memes e hipervínculos, parte de su obra, como la vida, sucede en el plano digital. Él piensa que su obra se sitúa en cierto punto de contacto entre estos dos planos.
          </p>

          </div>
          <div className="{style.artistSection}">

            <p>MUESTRAS COLECTIVAS</p>
            
            <p id="">
            (2022) “Ensayo de convergencia” L.A.R. 
            <br></br>
            (2021) “SpookyNacionalista” OHNO Galeria
            <br></br>
            (2021) “Prensado” Muestra final AxA
            <br></br>
            (2019)  “Maratón de performance” de Colectivo Triangular. Fundación Cazadores.
            <br></br>
            (2019)  “Casa intervenida III” de Cara-Seca duo.
            <br></br>
            (2018)  Muestra final taller Luis Teran.
            <br></br>
            (2017)  “11.11.S” Proyecto HHS.
            <br></br>
            (2015)  “El todo en las partes” Espacio Dasein.
            <br></br>
            </p>
  
          </div>
          <div className="{style.artistSection">

            <p>BECAS</p>

            <p id={""}>
            (2020) Artistas x Artistas - Beca Completa
            <br></br>
            (2020) MDA - Media Beca
            </p>

          </div>
          <div className="{style.artistSection">

            <p>RESIDENCIAS</p>
            <p>
              (2023) Zona residencia - San Carlos, Salta, Argentina 
            </p>
          </div>
          <div className="{style.artistSection">

            <p>PROYECTOS EN COLABORACION</p>
            <p>
              (2019-2020) Luces Calientes (joyería) junto a Diana Grieco.
            </p>
          </div>
          <div className="{style.artistSection">

            <p>CLINICAS</p>
            <p>
              (2020-2021) Artistas x Artistas
              <br></br>
              (2019-2022) MDA -Método Diana Aisenberg-
            </p>
          </div>
        </div>
      </main>
    );
  }
  