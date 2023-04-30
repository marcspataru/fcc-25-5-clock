import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Clock from "@/components/Clock/Clock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>25 + 5 Clock</title>
        <meta name="description" content="FreeCodeCamp Certification Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      <main className={`${styles.main} ${inter.className}`}>
        <Clock></Clock>
      </main>
    </>
  );
}
