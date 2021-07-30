import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>People List | Home</title>
        <meta name="keywords" content="people" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet
          dapibus nisl, et vehicula ligula dictum sed. Sed aliquam velit nec
          elit venenatis, vel congue felis pretium. Nullam euismod arcu at neque
          facilisis sagittis. Vivamus dignissim augue non nisi eleifend
          molestie. Praesent nec urna dignissim mauris consectetur aliquam.
          Suspendisse pulvinar tortor in erat viverra hendrerit. Donec ac odio
          at elit varius pharetra sit amet ac diam. Integer cursus nunc non enim
          scelerisque, sed facilisis tellus eleifend. Phasellus pulvinar justo
          in libero porttitor, eget maximus urna blandit. Cras tempor nisi mi,
          ut pellentesque metus volutpat nec. Vestibulum vehicula lorem sed
          feugiat suscipit.
        </p>
        <Link href="/people">
          <a className={styles.btn}>See People Listing</a>
        </Link>
      </div>
    </>
  );
}
