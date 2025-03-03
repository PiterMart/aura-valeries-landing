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

        {children}

        </body>
    </html>
  );
}
